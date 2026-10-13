import { Link } from 'react-router-dom'
import { getReferenceTranslation, getSourceById, sources, timeline } from '../data/reference'
import { useBookLanguage } from '../localization/useBookLanguage'

function TimelineContent({ language, t }) {
  return (
    <>
      <ol className="reference-list timeline-list">
        {timeline.map((entry) => {
          const translated = getReferenceTranslation(entry, language)
          return (
            <li key={entry.id} className="reference-entry">
              <p className="eyebrow">{entry.date}</p>
              <h2>{translated.title}</h2>
              <p>{translated.body}</p>
              <div className="reference-sources">
                {entry.sourceIds.map((sourceId) => {
                  const source = getSourceById(sourceId)
                  return source?.url ? (
                    <a key={sourceId} href={source.url} target="_blank" rel="noreferrer">
                      {t.referenceSource}: {source.title}
                    </a>
                  ) : null
                })}
              </div>
            </li>
          )
        })}
      </ol>
      <p className="editorial-note">{t.timelinePolicy}</p>
    </>
  )
}

function SourcesContent({ language, t }) {
  return (
    <>
      <ul className="reference-list source-list">
        {sources.map((source) => {
          const translated = getReferenceTranslation(source, language)
          return (
            <li key={source.id} className="reference-entry">
              <p className="eyebrow">{t[`sourceCategory_${source.category}`] ?? source.category}</p>
              <h2>{source.title}</h2>
              <p>{translated.note}</p>
              {source.url && (
                <a href={source.url} target="_blank" rel="noreferrer">
                  {t.openSource}<span aria-hidden="true"> ↗</span>
                </a>
              )}
            </li>
          )
        })}
      </ul>
      <p className="editorial-note">{t.sourcePolicy}</p>
    </>
  )
}

export function BookReferencePage({ section }) {
  const { language, t } = useBookLanguage()
  const hasData = section === 'timeline' || section === 'sources'

  return (
    <article className="inner-page reference-page">
      <header className="page-heading">
        <p className="eyebrow">{t.reference}</p><h1>{t[section]}</h1>
        <p className="intro">{t[`${section}Intro`]}</p>
      </header>

      {section === 'timeline' && <TimelineContent language={language} t={t} />}
      {section === 'sources' && <SourcesContent language={language} t={t} />}

      {!hasData && (
        <div className="reference-placeholder">
          <div className="ornament" aria-hidden="true">◆</div>
          <p className="eyebrow">{t.inPreparation}</p>
          <p>{t[`${section}Note`]}</p>
        </div>
      )}

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
