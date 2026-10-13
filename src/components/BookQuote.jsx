import { BookOrnament } from './BookOrnament'

export function BookQuote({ text, attribution }) {
  // The decorative quote mark is supplied by the component.
  // Remove only outer quotation glyphs from presentation, never from source data.
  const displayText = text
    .trim()
    .replace(/^[«“”„"]+\s*/, '')
    .replace(/\s*[»“”„"]+$/, '')
  return (
    <figure className="book-quote">
      <span aria-hidden="true" className="quote-mark">“</span>
      <blockquote><p>{displayText}</p></blockquote>
      <figcaption>{attribution}</figcaption>
      <BookOrnament />
    </figure>
  )
}
