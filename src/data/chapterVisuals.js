export const chapterVisuals = Object.freeze({
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
