import { getChapterVisual } from '../data/chapterVisuals.js'
import './ChapterHero.css'

export default function ChapterHero({ chapter }) {
  const visual = getChapterVisual(chapter)

  if (!visual) {
    return null
  }

  return (
    <figure className="book-chapter-hero" data-chapter-visual={visual.chapter}>
      <img
        className="book-chapter-hero__image"
        src={visual.src}
        alt={visual.alt}
        loading="eager"
        decoding="async"
      />
    </figure>
  )
}
