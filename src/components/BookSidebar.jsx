import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useBookLanguage } from '../localization/useBookLanguage'
import { BookIcon } from './BookIcon'
import { BookOrnament } from './BookOrnament'

const sections = ['contents', 'timeline', 'glossary', 'sources']

export function BookSidebar() {
  const { pathname } = useLocation()
  const { t } = useBookLanguage()
  const [expanded, setExpanded] = useState(false)
  const selected = sections.find((section) => pathname === `/${section}`) ?? 'contents'
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
              <NavLink to={`/${section}`} onClick={() => setExpanded(false)}
                className={({ isActive }) => isActive || (section === 'contents' && pathname.startsWith('/chapter/')) ? 'active' : ''}>
                <BookIcon name={section} /><span>{t[section]}</span>
                <span className="nav-chevron" aria-hidden="true">›</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-art" aria-hidden="true">
        <img className="sidebar-dog" src="/art/corso-sidebar.png" alt="" width="400" height="690" />
        <img className="sidebar-landscape" src="/art/masseria-study.svg" alt="" width="1400" height="520" />
      </div>
      <div className="sidebar-signature">
        <BookOrnament />
        <p>{t.heritage.split(' · ').map((word) => <span key={word}>{word}</span>)}<span>{t.sharedHistory}</span></p>
        <BookOrnament />
      </div>
    </aside>
  )
}
