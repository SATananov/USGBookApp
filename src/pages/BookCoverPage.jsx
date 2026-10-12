import { Link } from 'react-router-dom'
import { book, chapters } from '../data/book'
import { useBookLanguage } from '../localization/useBookLanguage'
import { BookOrnament } from '../components/BookOrnament'

export function BookCoverPage() {
  const { language, t } = useBookLanguage()
  const translated = book.translations[language]
  return (
    <article className="cover-page">
      <p className="eyebrow">{t.edition}</p>
      <div className="cover-emblem cover-crest" aria-hidden="true">
        <img src="/brand/usg-crest-transparent.png" alt="" width="180" height="226" />
      </div>
      <h1>{translated.titleLead}<br /><span>{translated.titleSubject}</span></h1>
      {language !== book.originalLanguage && <p className="cover-subtitle" lang={book.originalLanguage}>{book.title}</p>}
      <p className="authors" lang="it">{book.authors.join(' / ')}</p>
      <BookOrnament />
      <p className="cover-intro">{translated.introduction}</p>
      <Link className="button-link" to={`/chapter/${chapters[0].slug}`}>{t.openBook}<span aria-hidden="true">↗</span></Link>
      <Link className="text-link cover-contents" to="/contents">{t.exploreContents}</Link>
      <p className="cover-edition eyebrow">{t.sampleEdition} · I</p>
    </article>
  )
}
