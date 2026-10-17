import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useBookLanguage } from '../localization/useBookLanguage'
import { BookIcon } from './BookIcon'
import { BookOrnament } from './BookOrnament'

const sections = ['contents', 'timeline', 'glossary', 'sources']
const companionLinks = [
  { key: 'flavioBruno', path: '/flavio-bruno' },
  { key: 'usg', path: '/usg' },
]

function CompanionLinks({ t, onNavigate, className }) {
  return (
    <ul className={className}>
      {companionLinks.map(({ key, path }) => (
        <li key={key}>
          <NavLink to={path} onClick={onNavigate} className={({ isActive }) => isActive ? 'active' : ''}>
            <BookIcon name={key} />
            <span>{t[key]}</span>
            <span className="nav-chevron" aria-hidden="true">›</span>
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export function BookSidebar() {
  const { pathname } = useLocation()
  const { t } = useBookLanguage()
  const [expanded, setExpanded] = useState(false)

  const companionSelection = companionLinks.find(({ path }) => pathname === path)?.key
  const selected = sections.find((section) => pathname === `/${section}`)
    ?? companionSelection
    ?? 'contents'

  const closeMenu = () => setExpanded(false)

  return (
    <aside className="book-sidebar">
      <button className="mobile-menu" type="button" aria-expanded={expanded}
        aria-controls="book-navigation" onClick={() => setExpanded(!expanded)}>
        <BookIcon name={selected} /><span>{t[selected]}</span>
        <span className="menu-label">{t.navigation}</span><span aria-hidden="true">{expanded ? '−' : '+'}</span>
      </button>

      <nav id="book-navigation" className={expanded ? 'is-expanded' : ''} aria-label={t.navigation}>
        <ul className="section-links">
          {sections.map((section) => (
            <li key={section}>
              <NavLink to={`/${section}`} onClick={closeMenu}
                className={({ isActive }) => isActive || (section === 'contents' && pathname.startsWith('/chapter/')) ? 'active' : ''}>
                <BookIcon name={section} /><span>{t[section]}</span>
                <span className="nav-chevron" aria-hidden="true">›</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mobile-companion-nav">
          <p>{t.peopleProject}</p>
          <CompanionLinks t={t} onNavigate={closeMenu} className="mobile-companion-links" />
        </div>
      </nav>

      <div className="sidebar-art" aria-hidden="true">
        <img className="sidebar-dog" src="/art/corso-sidebar.png" alt="" width="400" height="690" />
        <img className="sidebar-landscape" src="/art/masseria-study.svg" alt="" width="1400" height="520" />
      </div>

      <div className="sidebar-companion">
        <p className="sidebar-companion-label">{t.peopleProject}</p>
        <CompanionLinks t={t} onNavigate={closeMenu} className="sidebar-feature-links" />
      </div>

      <div className="sidebar-signature">
        <BookOrnament />
        <p>{t.heritage.split(' · ').map((word) => <span key={word}>{word}</span>)}<span>{t.sharedHistory}</span></p>
        <BookOrnament />
      </div>
    </aside>
  )
}
