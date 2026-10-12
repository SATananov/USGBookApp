# USG Book App — Foundation 01

Standalone React/Vite heritage reader, using the supplied screenshot as the visual reference. Local demo data only; no Supabase, authentication, external imagery, or published book transcription.

## Run

- `npm install`
- `npm run dev`
- `npm run lint`
- `npm run test` — translation coverage, chapter relations, and media selection contracts
- `npm run build`
- `npm run preview`

The screenshot composition is at `/chapter/masseria`. The root route is the book cover.

## Routes and components

| Route | Page |
| --- | --- |
| `/` | Localized book cover |
| `/contents` | Demo chapter and planned next chapter |
| `/chapter/masseria` | Reference-inspired demonstration reader |
| `/chapter/shepherds-flocks-mastino-abruzzese` | Clearly labelled in-preparation preview; no chapter prose |
| `/timeline`, `/glossary`, `/sources` | Localized editorial placeholders |
| Unknown routes or chapter slugs | Localized not-found page |

React Router uses browser history. Production hosting must rewrite non-asset routes to `index.html`; no deployment is configured.

`BookLayout` provides one shared header, sidebar, framed reading canvas, route focus/scroll handling, and localized metadata. Page components compose `BookImagePlate`, `BookQuote`, and `BookProgress`. `BookIcon`, `BookOrnament`, and `BookCorners` provide reusable decorations. Generic components receive editorial content through props and data.

## Visual foundation

The dark binding, full-width heritage header, 250px desktop sidebar, warm paper, bronze rules, centered chapter, wide image plate, italic quotation, and compact progress footer follow the supplied reference. Local SVG drawings are deliberately placeholders for the final illustrations. They are neither historical engravings nor archival evidence.

- `public/art/masseria-study.svg`: text-free scenic placeholder, also used decoratively in the shell.
- `public/art/corso-engraving.svg`: stylized dog mark and sidebar placeholder.
- `public/art/paper-grain.svg`: subtle repeating paper texture.

Below 800px, navigation collapses into a keyboard-accessible disclosure. At 480px and below, the language selector and footer stack. System serif fonts support Latin and Cyrillic without external font requests.

## Localization

Exactly EN, BG, IT. A first visit defaults to English. A valid preference persists in `localStorage` under `usg-book-language`; storage failure does not prevent language switching.

`src/localization/ui.js` contains interface translations. `src/data/book.js` holds stable IDs, relations, chapter status, demonstration numbering, and translated editorial fields. `BookLanguageProvider` serves the same component tree in all three languages. Page titles, prose, captions, credits, quotes, navigation, pagination, HTML language, and description metadata update together. The header keeps the original Italian book title and the USG Heritage brand as requested.

The introduction and quotation use the user's supplied reference, with BG/IT demonstration translations. Additional sample body text is in the expandable edition notes. It is not approved book content. Timeline, glossary, and source collections remain empty.

## Media localization

`src/data/media.js` separates media identity and assets from translated captions, titles, alt text, and attribution. Assets have `{ src, width, height }`; translation records hold nullable asset overrides.

- Archive media always resolves to the untouched `original`, regardless of language or embedded text.
- Non-archival media with embedded text requires the exact selected-language asset. Missing variants show a localized reserved-image placeholder, never another language's artwork.
- Text-free non-archival media may share an original or use an explicit language override. The local scenic SVG uses this mode; all surrounding text remains localized.

The required Flavio Bruno illustration attribution is present verbatim in EN, BG, and IT.

## Progress and accessibility

The footer shows the reference's demonstration book position: Part III, chapter 11 of 50 (22%). It is chapter position, not scroll tracking or saved completion. The next preview is numbered 12. Edition notes and the accessible progress description explain that this numbering does not imply 50 loaded chapters. Next and previous are real routes.

The app includes semantic landmarks, a skip link, focus transfer on navigation, visible keyboard focus, pressed language buttons, meaningful localized alt text, native disclosure controls, and native progress. Decorative drawings have empty alt text or are hidden from assistive technology.

## Verification and deferred work

See `FOUNDATION_01_REPORT.md` for the implementation inventory and validation results.

Deferred: approved book text, translation review, final realistic imagery and branding, archival assets, verified reference collections, real chapter catalogue, saved reading positions, backend/authentication, and production hosting.
