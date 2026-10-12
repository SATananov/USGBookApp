import { useId } from 'react'
import { Link } from 'react-router-dom'
import { useBookLanguage } from '../localization/useBookLanguage'

export function BookProgress({ part, position, total, next }) {
  const { t } = useBookLanguage()
  const id = useId()
  const label = `${t.part} ${part} · ${t.chapter} ${position} ${t.of} ${total}`
  return (
    <footer className="book-progress">
      <label htmlFor={id}>{label}</label>
      <progress id={id} max={total} value={position} aria-valuetext={`${label} · ${t.demoPosition}`} />
      {next && <Link className="next-chapter" to={`/chapter/${next.slug}`}>
        <span>{t.next} <span aria-hidden="true">·</span> {next.title}</span><span className="next-arrow" aria-hidden="true">›</span>
      </Link>}
    </footer>
  )
}
