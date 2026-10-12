import { Link, useParams } from 'react-router-dom'
import { book, getChapter, parts } from '../data/book'
import { media } from '../data/media'
import { useBookLanguage } from '../localization/useBookLanguage'
import { BookImagePlate } from '../components/BookImagePlate'
import { BookQuote } from '../components/BookQuote'
import { BookProgress } from '../components/BookProgress'
import { BookOrnament } from '../components/BookOrnament'
import { BookNotFoundPage } from './BookReferencePage'

export function BookChapterPage() {
  const { slug } = useParams()
  const chapter = getChapter(slug)
  return chapter ? <ChapterReader key={chapter.id} chapter={chapter} /> : <BookNotFoundPage />
}

function ChapterReader({ chapter }) {
  const { language, t } = useBookLanguage()
  const translated = chapter.translations[language]
  const part = parts.find((part) => part.id === chapter.partId)
  const next = getChapter(chapter.nextSlug)
  const previous = getChapter(chapter.previousSlug)
  return (
    <article className={`inner-page chapter-page${chapter.status === 'planned' ? ' planned-chapter' : ''}`}>
      <header className="chapter-heading">
        <p className="eyebrow">{t.part} {part.number} <span aria-hidden="true">—</span> {part.translations[language].title}</p>
        <BookOrnament className="chapter-rule" />
        <h1>{translated.title}</h1>
        <p className="intro">{translated.intro}</p>
      </header>
      {chapter.status === 'planned' ? (
        <section className="reference-placeholder">
          <BookOrnament />
          <h2>{t.inPreparation}</h2><p>{t.nextNote}</p>
        </section>
      ) : <>
        {chapter.mediaIds.map((id, index) => (
          <BookImagePlate key={id} media={media.find((item) => item.id === id)} number={index + 1} />
        ))}
        <BookOrnament className="caption-rule" />
        <BookQuote text={translated.quote} attribution={translated.quoteAttribution} />
      </>}
      <BookProgress part={part.number} position={chapter.number} total={book.plannedChapters}
        next={next && { slug: next.slug, title: next.translations[language].title }} />
      <div className="chapter-notes">
        <Link className="text-link" to={previous ? `/chapter/${previous.slug}` : '/contents'}>
          <span aria-hidden="true">←</span> {t.previous} · {previous ? previous.translations[language].title : t.contents}
        </Link>
        {chapter.status === 'demo' && <details className="edition-notes">
          <summary>{t.sampleEdition} · {t.editionNotes}</summary>
          <div className="reading-text">
            <p>{t.demoNote} {t.demoPosition}</p>
            <h2>{translated.sectionTitle}</h2>
            {translated.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
        </details>}
      </div>
    </article>
  )
}
