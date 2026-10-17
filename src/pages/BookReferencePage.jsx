import { Link } from 'react-router-dom'
import { getReferenceTranslation, getSourceById, glossary, sources, timeline } from '../data/reference'
import { useBookLanguage } from '../localization/useBookLanguage'

function TimelineContent({ language, t }) {
  return (
    <>
      <ol className="reference-list timeline-list">
        {timeline.map((entry) => {
          const translated = getReferenceTranslation(entry, language)
          return (
            <li key={entry.id} className="reference-entry">
              <p className="eyebrow">{translated.date ?? entry.date}</p>
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

function GlossaryContent({ language, t }) {
  return (
    <>
      <ul className="reference-list glossary-list">
        {glossary.map((entry) => {
          const translated = getReferenceTranslation(entry, language)
          return (
            <li key={entry.id} className="reference-entry glossary-entry">
              <p className="eyebrow">{translated.category}</p>
              <h2>{translated.term}</h2>
              <p>{translated.body}</p>
            </li>
          )
        })}
      </ul>
      <p className="editorial-note">{t.glossaryPolicy}</p>
    </>
  )
}

function SourcesContent({ language, t }) {
  const sourceGroups = [
    'institutional',
    'historical',
    'science',
    'primary-authorial',
  ]

  return (
    <>
      <aside className="source-guide">
        <p className="eyebrow">{t.sourceGuideTitle}</p>
        <p>{t.sourceGuideText}</p>
      </aside>

      <div className="source-groups">
        {sourceGroups.map((category) => {
          const groupSources = sources.filter((source) => source.category === category)

          return (
            <section key={category} className="source-group">
              <header className="source-group-header">
                <div>
                  <p className="eyebrow">{t.sourceGroupLabel}</p>
                  <h2>{t[`sourceCategory_${category}`] ?? category}</h2>
                </div>
                <span className="source-group-count" aria-label={`${groupSources.length} ${t.sources}`}>
                  {groupSources.length}
                </span>
              </header>

              <p className="source-group-intro">
                {t[`sourceCategoryIntro_${category}`]}
              </p>

              <ul className="source-grid">
                {groupSources.map((source) => {
                  const translated = getReferenceTranslation(source, language)

                  return (
                    <li key={source.id} className="source-card">
                      <h3>{translated.title ?? source.title}</h3>
                      <p className="source-note">{translated.note}</p>

                      <div className="source-use">
                        <span>{t.sourceUseLabel}</span>
                        <p>{translated.use}</p>
                      </div>

                      {source.url ? (
                        <a className="source-action" href={source.url} target="_blank" rel="noreferrer">
                          {t.openSource}<span aria-hidden="true"> ↗</span>
                        </a>
                      ) : (
                        <span className="source-internal-label">{t.sourceInternalMaterial}</span>
                      )}
                    </li>
                  )
                })}
              </ul>
            </section>
          )
        })}
      </div>

      <p className="editorial-note source-policy-note">{t.sourcePolicy}</p>
    </>
  )
}

export function BookReferencePage({ section }) {
  const { language, t } = useBookLanguage()
  const hasData = section === 'timeline' || section === 'glossary' || section === 'sources'

  return (
    <article className="inner-page reference-page">
      <header className="page-heading">
        <p className="eyebrow">{t.reference}</p><h1>{t[section]}</h1>
        <p className="intro">{t[`${section}Intro`]}</p>
      </header>

      {section === 'timeline' && <TimelineContent language={language} t={t} />}
      {section === 'glossary' && <GlossaryContent language={language} t={t} />}
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
