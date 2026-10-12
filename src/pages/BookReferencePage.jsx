import { Link } from 'react-router-dom'
import { useBookLanguage } from '../localization/useBookLanguage'

export function BookReferencePage({ section }) {
  const { t } = useBookLanguage()
  return (
    <article className="inner-page reference-page">
      <header className="page-heading">
        <p className="eyebrow">{t.reference}</p><h1>{t[section]}</h1>
        <p className="intro">{t[`${section}Intro`]}</p>
      </header>
      <div className="reference-placeholder">
        <div className="ornament" aria-hidden="true">◆</div>
        <p className="eyebrow">{t.inPreparation}</p>
        <p>{t[`${section}Note`]}</p>
      </div>
      {section === 'sources' && <p className="editorial-note">{t.sourcePolicy}</p>}
      <Link className="text-link" to="/contents">← {t.backContents}</Link>
    </article>
  )
}

export function BookNotFoundPage() {
  const { t } = useBookLanguage()
  return (
    <article className="inner-page reference-page">
      <p className="eyebrow">404</p><h1>{t.notFound}</h1>
      <p className="intro">{t.notFoundNote}</p>
      <Link className="button-link" to="/contents">{t.backContents}<span aria-hidden="true">→</span></Link>
    </article>
  )
}
