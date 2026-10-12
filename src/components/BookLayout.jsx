import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { book, getChapter } from '../data/book'
import { useBookLanguage } from '../localization/useBookLanguage'
import { BookHeader } from './BookHeader'
import { BookSidebar } from './BookSidebar'
import { BookFooter } from './BookFooter'
import { BookCorners } from './BookOrnament'

export function BookLayout() {
  const { pathname } = useLocation()
  const { language, t } = useBookLanguage()
  const mainRef = useRef(null)
  const normalizedPath = pathname.replace(/\/+$/, '') || '/'
  const chapter = normalizedPath.startsWith('/chapter/')
    ? getChapter(normalizedPath.slice('/chapter/'.length)) : null
  const section = normalizedPath.slice(1)
  const knownSection = ['contents', 'timeline', 'glossary', 'sources'].includes(section)
  const pageTitle = chapter?.translations[language].title
    ?? (normalizedPath === '/' ? t.cover : knownSection ? t[section] : t.notFound)
  const description = chapter?.translations[language].description
    ?? (knownSection ? t[`${section}Intro`] : normalizedPath === '/' ? book.translations[language].description : t.notFoundNote)

  useEffect(() => {
    document.title = `${pageTitle} | ${book.title} — USG Heritage`
    document.querySelector('meta[name="description"]').setAttribute('content', description)
  }, [pageTitle, description])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    mainRef.current?.focus({ preventScroll: true })
  }, [pathname])

  return (
    <div className="book-shell">
      <a className="skip-link" href="#book-main">{t.skip}</a>
      <BookHeader />
      <div className="book-workspace">
        <BookSidebar />
        <main id="book-main" ref={mainRef} tabIndex={-1} className="reader">
          <div className="book-page"><BookCorners /><Outlet /></div>
        </main>
      </div>
      <BookFooter />
    </div>
  )
}
