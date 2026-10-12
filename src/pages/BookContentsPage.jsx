import { Link } from 'react-router-dom'
import { chapters, parts } from '../data/book'
import { useBookLanguage } from '../localization/useBookLanguage'

export function BookContentsPage() {
  const { language, t } = useBookLanguage()
  return (
    <article className="inner-page contents-page">
      <header className="page-heading">
        <p className="eyebrow">{t.reading}</p><h1>{t.contents}</h1>
        <p className="intro">{t.contentsIntro}</p>
      </header>
      {parts.map((part) => (
        <section key={part.id} className="contents-part" aria-labelledby={`part-${part.id}`}>
          <p className="eyebrow">{t.part} {part.number}</p>
          <h2 id={`part-${part.id}`}>{part.translations[language].title}</h2>
          <ol className="contents-list">
            {chapters.filter((chapter) => chapter.partId === part.id).map((chapter) => (
              <li key={chapter.id}>
                <Link to={`/chapter/${chapter.slug}`}>
                  <span><span className="eyebrow">{t.chapter} {chapter.number} · {chapter.status === 'demo' ? t.demo : t.inPreparation}</span><strong>{chapter.translations[language].title}</strong><span className="contents-status">{chapter.status === 'demo' ? t.available : t.comingSoon}</span></span>
                  <span className="contents-arrow" aria-hidden="true">↗</span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      ))}
      <aside className="editorial-note"><h2>{t.forthcoming}</h2><p>{t.contentsNote}</p></aside>
    </article>
  )
}
