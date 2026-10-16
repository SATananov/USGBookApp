export const chapterVisuals = Object.freeze({
  3: Object.freeze({
    chapter: 3,
    slug: 'problema-del-molosso',
    src: '/book/chapters/cap03-problema-molosso-hero.png',
    alt: 'Ricostruzione visiva evocativa di diversi grandi tipi canini del Mediterraneo antico in contesti di guardia, pastorizia, conduzione del bestiame e caccia; immagine concettuale, non genealogia dimostrata.',
  }),
  1: Object.freeze({
    chapter: 1,
    slug: 'prima-della-razza',
    src: '/book/chapters/cap01-prima-della-razza-hero.png',
    alt: 'Ricostruzione visiva evocativa di una comunità preistorica con uomini e cani primitivi accanto al fuoco; immagine di contesto, non ricostruzione di una razza moderna.',
  }),
  9: Object.freeze({
    chapter: 9,
    slug: 'il-rinascimento',
    src: '/book/chapters/cap09-rinascimento-hero.png',
    alt: 'Ricostruzione visiva evocativa del Rinascimento italiano con cani da caccia e presa in un paesaggio rurale; immagine di contesto, non identificazione certa di razza.',
  }),
  5: Object.freeze({
    chapter: 5,
    slug: 'il-pugnax',
    src: '/book/chapters/cap05-pugnax-hero.png',
    alt: 'Ricostruzione visiva evocativa del tema Pugnax in ambiente romano; non rappresenta una prova di razza antica definita né di discendenza diretta del Cane Corso moderno.',
  }),
  6: Object.freeze({
    chapter: 6,
    slug: 'roma',
    src: '/book/chapters/cap06-roma-hero.png',
    alt: 'Ricostruzione visiva della Roma antica con cane funzionale e contesto urbano romano; immagine evocativa, non prova di discendenza diretta del Cane Corso.',
  }),
  11: Object.freeze({
    chapter: 11,
    slug: 'la-masseria',
    src: '/book/chapters/cap11-masseria-hero.png',
    alt: 'La masseria del Sud Italia con Cane Corso da lavoro, bestiame e uomo di campagna al tramonto.',
  }),
})

export function getChapterVisual(chapter) {
  const number = Number(
    chapter?.number ??
    chapter?.chapterNumber ??
    String(chapter?.id ?? '').match(/(\d+)/)?.[1]
  )

  return chapterVisuals[number] ?? null
}
