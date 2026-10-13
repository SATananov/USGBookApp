import { Link } from 'react-router-dom'
import { chapters, epilogue, parts, readingItems } from '../data/book'
import { useBookLanguage } from '../localization/useBookLanguage'

export function BookContentsPage() {
  const { language, t } = useBookLanguage()
  const frontMatter = readingItems.filter((item) => item.kind === 'front')

  return (
    <article className="inner-page contents-page">
      <header className="page-heading">
        <p className="eyebrow">{t.reading}</p><h1>{t.contents}</h1>
        <p className="intro">{t.contentsIntro}</p>
      </header>

      <section className="contents-part" aria-labelledby="front-matter">
        <p className="eyebrow">PRIMA E DOPO IL CANE CORSO</p>
        <h2 id="front-matter">Apertura</h2>
        <ol className="contents-list">
          {frontMatter.map((item) => (
            <li key={item.id}>
              <Link to={`/chapter/${item.slug}`}>
                <span><strong>{item.translations[language]?.title ?? item.translations.it.title}</strong></span>
                <span className="contents-arrow" aria-hidden="true">↗</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {parts.map((part) => (
        <section key={part.id} className="contents-part" aria-labelledby={`part-${part.id}`}>
          <p className="eyebrow">{t.part} {part.number}</p>
          <h2 id={`part-${part.id}`}>{part.translations[language].title}</h2>
          <ol className="contents-list">
            {chapters.filter((chapter) => chapter.partId === part.id).map((chapter) => (
              <li key={chapter.id}>
                <Link to={`/chapter/${chapter.slug}`}>
                  <span>
                    <span className="eyebrow">{t.chapter} {chapter.number}</span>
                    <strong>{chapter.translations[language].title}</strong>
                  </span>
                  <span className="contents-arrow" aria-hidden="true">↗</span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      ))}

      <section className="contents-part" aria-labelledby="epilogue">
        <p className="eyebrow">Epilogo</p>
        <h2 id="epilogue">{epilogue.title}</h2>
        <ol className="contents-list">
          <li>
            <Link to={`/chapter/${epilogue.slug}`}>
              <span><strong>{epilogue.title}</strong></span>
              <span className="contents-arrow" aria-hidden="true">↗</span>
            </Link>
          </li>
        </ol>
      </section>
    </article>
  )
}
