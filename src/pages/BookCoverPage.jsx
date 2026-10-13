import { Link } from 'react-router-dom'
import { chapters } from '../data/book'
import { useBookLanguage } from '../localization/useBookLanguage'

const coverSources = {
  en: '/art/covers/cover-en.webp',
  bg: '/art/covers/cover-bg.webp',
  it: '/art/covers/cover-it.webp',
}

export function BookCoverPage() {
  const { language, t } = useBookLanguage()
  const coverAlt = `Prima e dopo il Cane Corso — ${language.toUpperCase()}`

  return (
    <article className="cover-page cover-language-page">
      <figure className="cover-language-frame">
        <img
          className="cover-language-art"
          src={coverSources[language] ?? coverSources.it}
          alt={coverAlt}
          width="1086"
          height="1448"
        />
      </figure>

      <div className="cover-master-actions" aria-label={t.cover}>
        <Link className="button-link" to={`/chapter/${chapters[0].slug}`}>
          {t.openBook}<span aria-hidden="true">↗</span>
        </Link>
        <Link className="button-link cover-secondary-action" to="/contents">
          {t.exploreContents}
        </Link>
      </div>
    </article>
  )
}
