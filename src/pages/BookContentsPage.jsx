import { Link } from 'react-router-dom'
import { chapters, epilogue, parts, readingItems } from '../data/book'
import { useBookLanguage } from '../localization/useBookLanguage'

export function BookContentsPage() {
  const { language, t } = useBookLanguage()
  const frontMatter = readingItems.filter((item) => item.kind === 'front')
  const frontMatterLabel = language === 'bg' ? 'Встъпление' : language === 'it' ? 'Apertura' : 'Opening'
  const bookEyebrowLabel = language === 'bg' ? 'ПРЕДИ И СЛЕД CANE CORSO' : language === 'it' ? 'PRIMA E DOPO IL CANE CORSO' : 'BEFORE AND AFTER CANE CORSO'
  const epilogueLabel = language === 'bg' ? 'Епилог' : language === 'it' ? 'Epilogo' : 'Epilogue'
  const epilogueTitle = epilogue.translations[language]?.title ?? epilogue.translations.it.title

  return (
    <article className="inner-page contents-page">
      <header className="page-heading">
        <p className="eyebrow">{t.reading}</p><h1>{t.contents}</h1>
        <p className="intro">{t.contentsIntro}</p>
      </header>

      <section className="contents-part" aria-labelledby="front-matter">
        <p className="eyebrow">{bookEyebrowLabel}</p>
        <h2 id="front-matter">{frontMatterLabel}</h2>
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
        <p className="eyebrow">{epilogueLabel}</p>
        <h2 id="epilogue">{epilogueTitle}</h2>
        <ol className="contents-list">
          <li>
            <Link to={`/chapter/${epilogue.slug}`}>
              <span><strong>{epilogueTitle}</strong></span>
              <span className="contents-arrow" aria-hidden="true">↗</span>
            </Link>
          </li>
        </ol>
      </section>
    </article>
  )
}
