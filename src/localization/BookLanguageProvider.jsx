import { useEffect, useState } from 'react'
import { BookLanguageContext } from './useBookLanguage'
import { languages, ui } from './ui'

const storageKey = 'usg-book-language'

function initialLanguage() {
  try {
    const saved = localStorage.getItem(storageKey)
    return languages.some(({ code }) => code === saved) ? saved : 'en'
  } catch {
    return 'en'
  }
}

export function BookLanguageProvider({ children }) {
  const [language, setLanguage] = useState(initialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    try {
      localStorage.setItem(storageKey, language)
    } catch {
      // Reading and language switching also work when storage is unavailable.
    }
  }, [language])

  return (
    <BookLanguageContext.Provider value={{ language, setLanguage, t: ui[language] }}>
      {children}
    </BookLanguageContext.Provider>
  )
}
