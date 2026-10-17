import { italianMaster } from '../content/book-it.js'
import { englishTranslation } from '../content/book-en.js'
import { bulgarianTranslation } from '../content/book-bg.js'

const localizedTitle = (title, enTitle = title, bgTitle = title) => ({
  en: { title: enTitle },
  bg: { title: bgTitle },
  it: { title },
})

const getEnFront = (id) => englishTranslation.frontMatter[id] ?? null
const getEnChapter = (id) => englishTranslation.chapters[id] ?? null
const getBgFront = (id) => bulgarianTranslation.frontMatter[id] ?? null
const getBgChapter = (id) => bulgarianTranslation.chapters[id] ?? null

export const book = {
  id: 'prima-e-dopo',
  title: 'Prima e Dopo il Cane Corso',
  originalLanguage: 'it',
  plannedChapters: 49,
  authors: ['Dott. Flavio Bruno', 'Stefano De Tanini'],
  translations: {
    en: {
      titleLead: 'BEFORE AND AFTER', titleSubject: 'THE CANE CORSO',
      subtitle: 'Before and After the Cane Corso',
      coverAuthors: 'Dott. Flavio Bruno / Stefano De Tanini',
      coverSubtitle: 'Italy and Bulgaria in the historical continuity of the Cane Corso',
      introduction: 'The English edition is translated from the final locked Italian original.',
      description: 'BEFORE AND AFTER THE CANE CORSO — English translation from the locked Italian original.',
    },
    bg: {
      titleLead: 'ПРЕДИ И СЛЕД', titleSubject: 'CANE CORSO',
      subtitle: 'Преди и след Cane Corso',
      coverAuthors: 'Д-р Флавио Бруно / Стефано Де Танини',
      coverSubtitle: 'Италия и България в историческата приемственост на Cane Corso',
      introduction: 'Българското издание е преведено от окончателно заключения италиански оригинал.',
      description: 'ПРЕДИ И СЛЕД CANE CORSO — български превод от заключения италиански оригинал.',
    },
    it: {
      titleLead: 'PRIMA E DOPO', titleSubject: 'IL CANE CORSO',
      subtitle: 'Prima e dopo il Cane Corso',
      coverAuthors: 'Dott. Flavio Bruno / Stefano De Tanini',
      coverSubtitle: 'Italia e Bulgaria nella continuità storica del Cane Corso',
      introduction: 'Un viaggio nato dalle domande di Stefano e guidato dal pensiero del Dott. Flavio Bruno.',
      description: 'PRIMA E DOPO IL CANE CORSO — edizione master italiana.',
    },
  },
}

export const parts = [
  { id: 'parte-i', bookId: 'prima-e-dopo', number: 'I', title: 'PRIMA DEL CANE CORSO' },
  { id: 'parte-ii', bookId: 'prima-e-dopo', number: 'II', title: 'IL CANE CORSO ATTRAVERSO I SECOLI' },
  { id: 'parte-iii', bookId: 'prima-e-dopo', number: 'III', title: 'IL CANE DEL SUD' },
  { id: 'parte-iv', bookId: 'prima-e-dopo', number: 'IV', title: 'L’OTTOCENTO' },
  { id: 'parte-v', bookId: 'prima-e-dopo', number: 'V', title: 'LA MEMORIA VIVENTE' },
  { id: 'parte-vi', bookId: 'prima-e-dopo', number: 'VI', title: 'IL NOVECENTO' },
  { id: 'parte-vii', bookId: 'prima-e-dopo', number: 'VII', title: 'DOPO IL CANE CORSO' },
  { id: 'parte-viii', bookId: 'prima-e-dopo', number: 'VIII', title: 'LA FUNZIONE FA IL TIPO' },
  { id: 'parte-ix', bookId: 'prima-e-dopo', number: 'IX', title: 'ALLEVARE PER CONSERVARE' },
  { id: 'parte-x', bookId: 'prima-e-dopo', number: 'X', title: 'COSA ABBIAMO CONSERVATO?' },
].map((part) => ({
  ...part,
  translations: localizedTitle(
    part.title,
    englishTranslation.parts[part.id] ?? part.title,
    bulgarianTranslation.parts[part.id] ?? part.title,
  ),
}))

const contentByChapterId = new Map(italianMaster.chapters.map((chapter) => [chapter.id, chapter]))

export const chapters = italianMaster.chapters.map((source, index, all) => {
  const previous = all[index - 1]
  const next = all[index + 1]
  const firstParagraph = source.blocks.find((block) => block.type === 'paragraph')?.text ?? source.title
  const en = getEnChapter(source.id)
  const bg = getBgChapter(source.id)
  const enFirstParagraph = en?.blocks?.find((block) => block.type === 'paragraph')?.text ?? firstParagraph
  const bgFirstParagraph = bg?.blocks?.find((block) => block.type === 'paragraph')?.text ?? firstParagraph

  return {
    id: source.id,
    bookId: book.id,
    partId: source.partId,
    slug: source.slug,
    order: source.number,
    number: source.number,
    status: 'master',
    mediaIds: [],
    previousSlug: previous?.slug ?? 'introduzione',
    nextSlug: next?.slug ?? 'la-staffetta',
    translations: {
      en: { title: en?.title ?? source.title, intro: enFirstParagraph, description: enFirstParagraph },
      bg: { title: bg?.title ?? source.title, intro: bgFirstParagraph, description: bgFirstParagraph },
      it: { title: source.title, intro: firstParagraph, description: firstParagraph },
    },
    contentIt: contentByChapterId.get(source.id).blocks,
    contentEn: en?.blocks ?? null,
    contentBg: bg?.blocks ?? null,
    editorialNotes: contentByChapterId.get(source.id).editorialNotes,
  }
})

const frontMatter = italianMaster.frontMatter.map((source, index, all) => {
  const en = getEnFront(source.id)
  const bg = getBgFront(source.id)
  return {
    ...source,
    kind: 'front',
    bookId: book.id,
    status: 'master',
    previousSlug: index === 0 ? null : all[index - 1].slug,
    nextSlug: index === all.length - 1 ? chapters[0].slug : all[index + 1].slug,
    translations: localizedTitle(source.title, en?.title ?? source.title, bg?.title ?? source.title),
    contentIt: source.blocks,
    contentEn: en?.blocks ?? null,
    contentBg: bg?.blocks ?? null,
  }
})

export const epilogue = {
  ...italianMaster.epilogue,
  kind: 'epilogue',
  bookId: book.id,
  status: 'master',
  previousSlug: chapters.at(-1).slug,
  nextSlug: null,
  translations: localizedTitle(
    italianMaster.epilogue.title,
    englishTranslation.epilogue?.title ?? italianMaster.epilogue.title,
    bulgarianTranslation.epilogue?.title ?? italianMaster.epilogue.title,
  ),
  contentIt: italianMaster.epilogue.blocks,
  contentEn: englishTranslation.epilogue?.blocks ?? null,
  contentBg: bulgarianTranslation.epilogue?.blocks ?? null,
}

export const readingItems = [...frontMatter, ...chapters.map((chapter) => ({ ...chapter, kind: 'chapter' })), epilogue]

export function getChapter(slug) {
  return readingItems.find((item) => item.slug === slug)
}
