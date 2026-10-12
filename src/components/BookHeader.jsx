import { Link } from 'react-router-dom'
import { book } from '../data/book'
import { useBookLanguage } from '../localization/useBookLanguage'
import { BookLanguageSwitcher } from './BookLanguageSwitcher'

export function BookHeader() {
  const { t } = useBookLanguage()
  return (
    <header className="book-header">
      <Link to="/" className="brand" aria-label={`USG Heritage · ${t.cover}`}>
        <img className="brand-seal" src="/art/corso-header.png" alt="" width="186" height="174" />
        <span className="brand-wordmark">
          <span className="brand-kicker">UNICO SUO GENERE™</span>
          <span className="brand-name">USG HERITAGE</span>
          <span className="header-title" lang={book.originalLanguage}>{book.title}</span>
        </span>
      </Link>

      <Link to="/" className="header-crest" aria-label={`USG Heritage · ${t.cover}`}>
        <img className="header-crest-image" src="/brand/usg-crest-transparent.png" alt="" width="120" height="151" />
      </Link>

      <BookLanguageSwitcher />
    </header>
  )
}
