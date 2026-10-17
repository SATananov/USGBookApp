import { Link } from 'react-router-dom'
import { getCompanionPage } from '../data/companion'
import { getFlavioProfile } from '../data/flavioProfile'
import { useBookLanguage } from '../localization/useBookLanguage'

function FlavioArchive({ language }) {
  const profile = getFlavioProfile(language)

  return (
    <>
      <section className="flavio-works" aria-labelledby="flavio-works-title">
        <header className="companion-section-heading">
          <p className="eyebrow">{profile.worksEyebrow}</p>
          <h2 id="flavio-works-title">{profile.worksTitle}</h2>
          <p>{profile.worksIntro}</p>
        </header>

        <div className="flavio-work-grid">
          {profile.works.map((work) => (
            <article className="flavio-work-card" key={work.id}>
              <div className="flavio-work-image">
                <img src={work.image} alt="" loading="lazy" />
              </div>
              <div className="flavio-work-copy">
                {work.year && <p className="flavio-work-year">{work.year}</p>}
                <h3>{work.title}</h3>
                <p>{work.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="flavio-context" aria-labelledby="flavio-context-title">
        <header className="companion-section-heading">
          <p className="eyebrow">{profile.contextEyebrow}</p>
          <h2 id="flavio-context-title">{profile.contextTitle}</h2>
          <p>{profile.contextIntro}</p>
        </header>

        <div className="flavio-context-grid">
          {profile.contextPanels.map((panel) => (
            <figure className={`flavio-context-card is-${panel.id}`} key={panel.id}>
              <div className="flavio-context-image">
                <img src={panel.image} alt="" loading="lazy" />
              </div>
              <figcaption>
                <h3>{panel.title}</h3>
                <p>{panel.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="flavio-archive-note">{profile.archiveNote}</p>
      </section>
    </>
  )
}

export function BookCompanionPage({ pageKey }) {
  const { language, t } = useBookLanguage()
  const page = getCompanionPage(pageKey, language)
  const isUsg = pageKey === 'usg'
  const isFlavio = pageKey === 'flavioBruno'
  const flavio = isFlavio ? getFlavioProfile(language) : null

  if (!page) return null

  return (
    <article className={`inner-page companion-page companion-page-${pageKey}`}>
      <header className="page-heading companion-heading">
        <p className="eyebrow">{t.peopleProject}</p>
        <h1>{page.title}</h1>
        <p className="intro">{page.subtitle}</p>
      </header>

      {isFlavio ? (
        <>
          <section className="flavio-identity-strip" aria-label={page.title}>
            <div className="flavio-identity-grid">
              <figure className="flavio-identity-card flavio-identity-crest" aria-hidden="true">
                <img src={flavio.crest} alt="" width="1254" height="1254" />
              </figure>

              <figure className="flavio-identity-card flavio-identity-portrait" aria-hidden="true">
                <img src={flavio.portrait} alt="" width="680" height="770" />
              </figure>
            </div>
          </section>

          <section className="companion-hero flavio-overview" aria-labelledby={`${pageKey}-overview`}>
            <div className="companion-hero-copy">
              <p className="eyebrow">{page.eyebrow}</p>
              <h2 id={`${pageKey}-overview`}>{page.subtitle}</h2>
              <p>{page.lead}</p>

              <div className="companion-status">
                <span>{page.statusLabel}</span>
                <strong>{page.statusValue}</strong>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="companion-hero" aria-labelledby={`${pageKey}-overview`}>
          <div className="companion-mark is-usg" aria-hidden="true">
            <img src="/brand/usg-crest-transparent.png" alt="" width="160" height="200" />
          </div>

          <div className="companion-hero-copy">
            <p className="eyebrow">{page.eyebrow}</p>
            <h2 id={`${pageKey}-overview`}>{page.subtitle}</h2>
            <p>{page.lead}</p>

            <div className="companion-status">
              <span>{page.statusLabel}</span>
              <strong>{page.statusValue}</strong>
            </div>
          </div>
        </section>
      )}

      <blockquote className="companion-statement">
        <p>{page.statement}</p>
        <cite>{page.statementCredit}</cite>
      </blockquote>

      <div className="companion-grid">
        {page.sections.map((section) => (
          <section key={section.title} className="companion-card">
            <p className="eyebrow">{t.reading}</p>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </div>

      {isFlavio && <FlavioArchive language={language} />}

      <aside className="companion-note">
        <p>{page.note}</p>
      </aside>

      <div className="companion-actions">
        {pageKey === 'flavioBruno' && (
          <Link className="text-link" to="/sources">{t.viewSources} →</Link>
        )}
        <Link className="text-link" to="/contents">← {t.backContents}</Link>
      </div>
    </article>
  )
}
