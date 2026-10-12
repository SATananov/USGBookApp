import { BookOrnament } from './BookOrnament'

export function BookQuote({ text, attribution }) {
  return (
    <figure className="book-quote">
      <span aria-hidden="true" className="quote-mark">“</span>
      <blockquote><p>{text}</p></blockquote>
      <figcaption>{attribution}</figcaption>
      <BookOrnament />
    </figure>
  )
}
