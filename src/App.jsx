import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BookLanguageProvider } from './localization/BookLanguageProvider'
import { BookLayout } from './components/BookLayout'
import { BookCoverPage } from './pages/BookCoverPage'
import { BookContentsPage } from './pages/BookContentsPage'
import { BookChapterPage } from './pages/BookChapterPage'
import { BookReferencePage, BookNotFoundPage } from './pages/BookReferencePage'
import './App.css'

export default function App() {
  return (
    <BookLanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<BookLayout />}>
            <Route index element={<BookCoverPage />} />
            <Route path="contents" element={<BookContentsPage />} />
            <Route path="chapter/:slug" element={<BookChapterPage />} />
            <Route path="timeline" element={<BookReferencePage section="timeline" />} />
            <Route path="glossary" element={<BookReferencePage section="glossary" />} />
            <Route path="sources" element={<BookReferencePage section="sources" />} />
            <Route path="*" element={<BookNotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BookLanguageProvider>
  )
}
