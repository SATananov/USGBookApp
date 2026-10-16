import assert from 'node:assert/strict'
import test from 'node:test'
import { book, parts, chapters, readingItems, epilogue } from './book.js'
import { media, resolveMediaAsset } from './media.js'
import { languages, ui } from '../localization/ui.js'
import { timeline, sources } from './reference.js'
import { chapterVisuals } from './chapterVisuals.js'

const codes = languages.map(({ code }) => code)

test('UI translations cover exactly EN, BG and IT', () => {
  assert.deepEqual(codes, ['en', 'bg', 'it'])
  assert.deepEqual(Object.keys(ui).sort(), [...codes].sort())
  for (const code of codes) assert.ok(ui[code])
})

test('V12 FINAL IT LOCK structure is complete and ordered', () => {
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

test('final lock contains no VERIFICA markers in reader blocks or editorial notes', () => {
  for (const item of readingItems) {
    const renderedText = (item.contentIt ?? []).flatMap((block) => block.items ?? [block.text ?? '']).join('\n')
    assert.equal(renderedText.includes('[VERIFICA'), false)
    assert.equal((item.editorialNotes ?? []).some((note) => note.includes('[VERIFICA')), false)
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
  if (media[0]) for (const code of codes) assert.equal(resolveMediaAsset(media[0], code), media[0].original)
})

test('PASS D timeline and source registry are populated and linked', () => {
  assert.ok(timeline.length >= 8)
  assert.ok(sources.length >= 7)
  const sourceIds = new Set(sources.map((source) => source.id))
  assert.equal(sourceIds.size, sources.length)

  for (const entry of timeline) {
    assert.ok(entry.id)
    assert.ok(entry.date)
    assert.ok(entry.translations.it?.title)
    assert.ok(entry.translations.it?.body)
    assert.ok(entry.translations.bg?.title)
    assert.ok(entry.translations.bg?.body)
    for (const sourceId of entry.sourceIds) assert.ok(sourceIds.has(sourceId))
  }

  assert.ok(timeline.some((entry) => entry.id === 'fci-standard-2023'))
})

test('V12 PASS E2 southern historical editorial status stays metadata', () => {
  const selected = chapters.filter((chapter) => [10, 12, 14, 15, 16, 18, 19].includes(chapter.number))
  assert.equal(selected.length, 7)
  const forbidden = ['[FONTE CHIUSA', '[RESTARE ATTRIBUITA', '[PARZIALMENTE CHIUSA', '[RESTARE COME TRADIZIONE', '[VERIFICA']
  for (const chapter of selected) {
    const renderedText = chapter.contentIt.flatMap((block) => block.items ?? [block.text ?? '']).join('\n')
    for (const token of forbidden) assert.equal(renderedText.includes(token), false)
  }
})

test('V12 PASS E3 twentieth-century documentary status stays metadata', () => {
  const selected = chapters.filter((chapter) => [26, 27, 28, 30].includes(chapter.number))
  assert.equal(selected.length, 4)

  const forbidden = [
    '[FONTE CHIUSA',
    '[RESTARE ATTRIBUITA',
    '[PARZIALMENTE CHIUSA',
    '[RESTARE COME TRADIZIONE',
    '[VERIFICA'
  ]

  for (const chapter of selected) {
    const renderedText = chapter.contentIt
      .flatMap((block) => block.items ?? [block.text ?? ''])
      .join('\n')

    for (const token of forbidden) {
      assert.equal(renderedText.includes(token), false)
    }
  }
})

test('V12 PASS E4 scientific and veterinary editorial status stays metadata', () => {
  const selected = chapters.filter((chapter) => [24, 34, 36, 40, 43, 44, 45, 46].includes(chapter.number))
  assert.equal(selected.length, 8)

  const forbidden = [
    '[FONTE CHIUSA',
    '[RESTARE ATTRIBUITA',
    '[PARZIALMENTE CHIUSA',
    '[RESTARE COME TRADIZIONE',
    '[VERIFICA'
  ]

  for (const chapter of selected) {
    const renderedText = chapter.contentIt
      .flatMap((block) => block.items ?? [block.text ?? ''])
      .join('\n')

    for (const token of forbidden) {
      assert.equal(renderedText.includes(token), false)
    }
  }
})

test('V12 FINAL IT LOCK has no editorial markers in reader content', () => {
  const forbidden = [
    '[VERIFICA',
    '[FONTE CHIUSA',
    '[RESTARE ATTRIBUITA',
    '[PARZIALMENTE CHIUSA',
    '[RESTARE COME TRADIZIONE'
  ]

  for (const chapter of chapters) {
    const renderedText = chapter.contentIt
      .flatMap((block) => block.items ?? [block.text ?? ''])
      .join('\n')

    for (const token of forbidden) {
      assert.equal(renderedText.includes(token), false)
    }
  }
})

test('V12 FINAL IT LOCK is ready to become the BG translation source', () => {
  assert.equal(chapters.length, 49)
  assert.equal(readingItems.length, 52)
  assert.equal(epilogue.slug, 'la-staffetta')
})

test('chapter 11 has its locked masseria hero visual', () => {
  assert.equal(chapterVisuals[11].chapter, 11)
  assert.equal(chapterVisuals[11].slug, 'la-masseria')
  assert.equal(chapterVisuals[11].src, '/book/chapters/cap11-masseria-hero.png')
})

test('chapter 6 has its locked Rome hero visual', () => {
  assert.equal(chapterVisuals[6].chapter, 6)
  assert.equal(chapterVisuals[6].slug, 'roma')
  assert.equal(chapterVisuals[6].src, '/book/chapters/cap06-roma-hero.png')
})

test('chapter 5 has its locked Pugnax hero visual', () => {
  assert.equal(chapterVisuals[5].chapter, 5)
  assert.equal(chapterVisuals[5].slug, 'il-pugnax')
  assert.equal(chapterVisuals[5].src, '/book/chapters/cap05-pugnax-hero.png')
})

test('chapter 9 has its locked Renaissance hero visual', () => {
  assert.equal(chapterVisuals[9].chapter, 9)
  assert.equal(chapterVisuals[9].slug, 'il-rinascimento')
  assert.equal(chapterVisuals[9].src, '/book/chapters/cap09-rinascimento-hero.png')
})

test('chapter 1 has its locked Prima della razza hero visual', () => {
  assert.equal(chapterVisuals[1].chapter, 1)
  assert.equal(chapterVisuals[1].slug, 'prima-della-razza')
  assert.equal(chapterVisuals[1].src, '/book/chapters/cap01-prima-della-razza-hero.png')
})

test('chapter 3 has its locked Il problema del Molosso hero visual', () => {
  assert.equal(chapterVisuals[3].chapter, 3)
  assert.equal(chapterVisuals[3].slug, 'problema-del-molosso')
  assert.equal(chapterVisuals[3].src, '/book/chapters/cap03-problema-molosso-hero.png')
})

test('chapter 7 has its locked Dopo Roma hero visual', () => {
  assert.equal(chapterVisuals[7].chapter, 7)
  assert.equal(chapterVisuals[7].slug, 'dopo-roma')
  assert.equal(chapterVisuals[7].src, '/book/chapters/cap07-dopo-roma-hero.png')
})
