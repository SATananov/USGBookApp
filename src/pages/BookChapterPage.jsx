import { Link, useParams } from 'react-router-dom'
import { book, getChapter, parts } from '../data/book'
import { useBookLanguage } from '../localization/useBookLanguage'
import { BookQuote } from '../components/BookQuote'
import { BookProgress } from '../components/BookProgress'
import { BookOrnament } from '../components/BookOrnament'
import { BookNotFoundPage } from './BookReferencePage'
import ChapterHero from '../components/ChapterHero.jsx'

function InlineText({ text }) {
  const chunks = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean)
  return chunks.map((chunk, index) => {
    if (chunk.startsWith('**') && chunk.endsWith('**')) return <strong key={index}>{chunk.slice(2, -2)}</strong>
    if (chunk.startsWith('*') && chunk.endsWith('*')) return <em key={index}>{chunk.slice(1, -1)}</em>
    return <span key={index}>{chunk}</span>
  })
}

function ReadingBlocks({ blocks }) {
  return (
    <div className="reading-text">
      {blocks.map((block, index) => {
        if (block.type === 'heading') return <h2 key={index}><InlineText text={block.text} /></h2>
        if (block.type === 'question') return <p key={index} className="book-question"><strong><InlineText text={block.text} /></strong></p>
        if (block.type === 'quote') return <BookQuote key={index} text={block.text.replaceAll('**', '')} attribution={block.attribution} />
        if (block.type === 'list') {
          const Tag = block.ordered ? 'ol' : 'ul'
          return <Tag key={index}>{block.items.map((item, itemIndex) => <li key={itemIndex}><InlineText text={item} /></li>)}</Tag>
        }
        return <p key={index}><InlineText text={block.text} /></p>
      })}
    </div>
  )
}

export function BookChapterPage() {
  const { slug } = useParams()
  const item = getChapter(slug)
  return item ? <ChapterReader key={item.id} item={item} /> : <BookNotFoundPage />
}

function ChapterReader({ item }) {
  const { language, t } = useBookLanguage()
  const translated = item.translations[language] ?? item.translations.it
  const previous = getChapter(item.previousSlug)
  const next = getChapter(item.nextSlug)
  const part = item.kind === 'chapter' ? parts.find((candidate) => candidate.id === item.partId) : null
  const localizedBlocks = language === 'en' && item.contentEn?.length
    ? item.contentEn
    : language === 'bg' && item.contentBg?.length
      ? item.contentBg
      : item.contentIt
  const hasLocalizedBody = language === 'it'
    || (language === 'en' && item.contentEn?.length)
    || (language === 'bg' && item.contentBg?.length)
  const fallbackNote = language === 'bg'
    ? 'Италиански master текст · българският превод на тази част предстои.'
    : language === 'en'
      ? 'Italian original · the English translation of this section is forthcoming.'
      : `Testo master italiano · traduzione ${language.toUpperCase()} dopo il lock editoriale.`

  const structuralEyebrow = item.kind === 'epilogue'
    ? (language === 'en' ? 'Epilogue' : 'Epilogo')
    : (language === 'en' ? 'BEFORE AND AFTER THE CANE CORSO' : 'PRIMA E DOPO IL CANE CORSO')

  return (
    <article className="inner-page chapter-page">
      <header className="chapter-heading">
        {part ? (
          <p className="eyebrow">{t.part} {part.number} <span aria-hidden="true">—</span> {part.translations[language].title}</p>
        ) : (
          <p className="eyebrow">{structuralEyebrow}</p>
        )}
        <BookOrnament className="chapter-rule" />
        <h1>{translated.title}</h1>
        {!hasLocalizedBody && <p className="intro">{fallbackNote}</p>}
      </header>
      <ChapterHero chapter={item} />
      <ReadingBlocks blocks={localizedBlocks} />

      {item.kind === 'chapter' && (
        <BookProgress
          part={part.number}
          position={item.number}
          total={book.plannedChapters}
          next={next && { slug: next.slug, title: next.translations[language]?.title ?? next.translations.it.title }}
        />
      )}
      <div className="chapter-notes">
        <Link className="text-link" to={previous ? `/chapter/${previous.slug}` : '/contents'}>
          <span aria-hidden="true">←</span> {t.previous} · {previous ? previous.translations[language]?.title ?? previous.translations.it.title : t.contents}
        </Link>
        {item.kind !== 'chapter' && next && (
          <Link className="text-link" to={`/chapter/${next.slug}`}>
            {t.next} · {next.translations[language]?.title ?? next.translations.it.title} <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </article>
  )
}
