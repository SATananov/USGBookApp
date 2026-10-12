import assert from 'node:assert/strict'
import test from 'node:test'
import { book, parts, chapters } from './book.js'
import { media, resolveMediaAsset } from './media.js'
import { languages, ui } from '../localization/ui.js'

const codes = languages.map(({ code }) => code)

test('all UI and editorial translations cover exactly EN, BG and IT', () => {
  assert.deepEqual(codes, ['en', 'bg', 'it'])
  const records = [ui, book.translations, ...parts.map((p) => p.translations),
    ...chapters.map((c) => c.translations), ...media.map((m) => m.translations)]
  for (const translations of records) {
    assert.deepEqual(Object.keys(translations).sort(), [...codes].sort())
    for (const code of codes) {
      assert.deepEqual(Object.keys(translations[code]).sort(), Object.keys(translations.en).sort())
      for (const value of Object.values(translations[code])) {
        if (typeof value === 'string') assert.ok(value.trim())
        if (Array.isArray(value)) assert.ok(value.length && value.every((text) => text.trim()))
      }
    }
  }
})

test('demo chapter relations and media references resolve', () => {
  assert.equal(chapters.filter((chapter) => chapter.status === 'demo').length, 1)
  assert.equal(chapters.filter((chapter) => chapter.status === 'planned').length, 1)
  assert.equal(chapters[0].slug, 'masseria')
  for (const chapter of chapters) {
    assert.equal(chapter.bookId, book.id)
    assert.ok(parts.some((part) => part.id === chapter.partId && part.bookId === book.id))
    assert.ok(chapter.number > 0 && chapter.number <= book.plannedChapters)
    if (chapter.nextSlug) assert.ok(chapters.some((next) => next.slug === chapter.nextSlug && next.previousSlug === chapter.slug))
    if (chapter.previousSlug) assert.ok(chapters.some((previous) => previous.slug === chapter.previousSlug && previous.nextSlug === chapter.slug))
    if (chapter.status === 'planned') {
      assert.deepEqual(chapter.mediaIds, [])
      for (const code of codes) assert.equal(chapter.translations[code].paragraphs, undefined)
    }
    for (const id of chapter.mediaIds) {
      assert.ok(media.some((item) => item.id === id && item.chapterId === chapter.id))
    }
  }
})

test('embedded-text visuals require the exact language; a missing variant stays empty', () => {
  const english = { src: '/en.svg' }
  const bulgarian = { src: '/bg.svg' }
  const italian = { src: '/it.svg' }
  const item = { kind: 'conceptual', containsEmbeddedText: true, original: english,
    translations: { en: { asset: english }, bg: { asset: bulgarian }, it: { asset: italian } } }
  assert.equal(resolveMediaAsset(item, 'en'), english)
  assert.equal(resolveMediaAsset(item, 'bg'), bulgarian)
  assert.equal(resolveMediaAsset(item, 'it'), italian)
  assert.equal(resolveMediaAsset({ ...item, translations: { en: { asset: english } } }, 'bg'), null)
})

test('archives always use the untouched original even when a localized asset exists', () => {
  const original = { src: '/original.jpg' }
  const item = { kind: 'archive', containsEmbeddedText: true, original,
    translations: { bg: { asset: { src: '/must-not-be-used.jpg' } } } }
  for (const code of codes) assert.equal(resolveMediaAsset(item, code), original)
})

test('text-free conceptual media can share a source or use a local override', () => {
  const original = { src: '/shared.jpg' }
  const override = { src: '/bg.jpg' }
  const item = { kind: 'conceptual', containsEmbeddedText: false, original,
    translations: { bg: { asset: override } } }
  assert.equal(resolveMediaAsset(item, 'en'), original)
  assert.equal(resolveMediaAsset(item, 'bg'), override)
  for (const code of codes) assert.equal(resolveMediaAsset(media[0], code), media[0].original)
})
