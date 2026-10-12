import { Link } from 'react-router-dom'
import { book } from '../data/book'
import { useBookLanguage } from '../localization/useBookLanguage'

export function BookFooter() {
  const { t } = useBookLanguage()

  return (
    <footer className="heritage-footer">
      <div className="heritage-footer-side heritage-footer-left">
        <span className="heritage-footer-kicker">UNICO SUO GENERE</span>
        <strong>USG Cane Corso Heritage</strong>
        <span>{t.heritage} · {t.sharedHistory}</span>
      </div>

      <Link to="/" className="heritage-footer-crest" aria-label={`USG Heritage · ${t.cover}`}>
        <img src="/brand/usg-crest-transparent.png" alt="" width="96" height="121" />
      </Link>

      <nav className="heritage-footer-side heritage-footer-links" aria-label={t.navigation}>
        <Link to="/contents">{t.contents}</Link>
        <Link to="/timeline">{t.timeline}</Link>
        <Link to="/glossary">{t.glossary}</Link>
        <Link to="/sources">{t.sources}</Link>
        <small lang={book.originalLanguage}>{book.title}</small>
      </nav>
    </footer>
  )
}
