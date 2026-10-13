import assert from 'node:assert/strict'
import test from 'node:test'
import { book, parts, chapters, readingItems, epilogue } from './book.js'
import { media, resolveMediaAsset } from './media.js'
import { languages, ui } from '../localization/ui.js'

const codes = languages.map(({ code }) => code)

test('UI translations cover exactly EN, BG and IT', () => {
  assert.deepEqual(codes, ['en', 'bg', 'it'])
  assert.deepEqual(Object.keys(ui).sort(), [...codes].sort())
  for (const code of codes) assert.ok(ui[code])
})

test('IT MASTER V9 structure is complete and ordered', () => {
  assert.equal(book.originalLanguage, 'it')
  assert.equal(book.plannedChapters, 49)
  assert.equal(parts.length, 10)
  assert.equal(chapters.length, 49)
  assert.deepEqual(chapters.map((chapter) => chapter.number), Array.from({ length: 49 }, (_, index) => index + 1))
  assert.equal(new Set(chapters.map((chapter) => chapter.slug)).size, 49)
  assert.equal(readingItems.length, 52)
  assert.equal(readingItems[0].slug, 'idea-del-libro')
  assert.equal(readingItems[1].slug, 'introduzione')
  assert.equal(readingItems.at(-1).slug, 'la-staffetta')
  assert.equal(epilogue.slug, 'la-staffetta')
})

test('all chapters resolve to a valid part and continuous reader navigation', () => {
  for (const chapter of chapters) {
    assert.equal(chapter.bookId, book.id)
    assert.ok(parts.some((part) => part.id === chapter.partId && part.bookId === book.id))
    assert.equal(chapter.status, 'master')
    assert.ok(chapter.contentIt.length > 0)
    assert.deepEqual(chapter.mediaIds, [])
  }

  for (let index = 0; index < readingItems.length; index += 1) {
    const item = readingItems[index]
    assert.equal(item.previousSlug ?? null, readingItems[index - 1]?.slug ?? null)
    assert.equal(item.nextSlug ?? null, readingItems[index + 1]?.slug ?? null)
  }
})

test('editorial VERIFICA notes are metadata, not reader blocks', () => {
  for (const item of readingItems) {
    const renderedText = (item.contentIt ?? []).flatMap((block) => block.items ?? [block.text ?? '']).join('\n')
    assert.equal(renderedText.includes('[VERIFICA'), false)
  }
  assert.ok(readingItems.some((item) => (item.editorialNotes ?? []).some((note) => note.includes('[VERIFICA'))))
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
  if (media[0]) for (const code of codes) assert.equal(resolveMediaAsset(media[0], code), media[0].original)
})
