import { createContext, useContext } from 'react'

export const BookLanguageContext = createContext(null)

export function useBookLanguage() {
  const context = useContext(BookLanguageContext)
  if (!context) throw new Error('BookLanguageProvider is required')
  return context
}
