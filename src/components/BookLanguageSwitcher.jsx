import { languages } from '../localization/ui'
import { useBookLanguage } from '../localization/useBookLanguage'

export function BookLanguageSwitcher() {
  const { language, setLanguage, t } = useBookLanguage()
  return (
    <div className="language-switcher" role="group" aria-label={t.language}>
      {languages.map(({ code, label, name }) => (
        <button key={code} type="button" lang={code} aria-label={name}
          aria-pressed={language === code} onClick={() => setLanguage(code)}>
          {label}
        </button>
      ))}
    </div>
  )
}
