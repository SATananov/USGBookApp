export const chapterVisuals = Object.freeze({
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
