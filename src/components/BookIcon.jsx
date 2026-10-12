const paths = {
  contents: 'M15 7C10 3 5 3 2 5v22c5-2 9-1 13 2m0-22c5-4 10-4 13-2v22c-5-2-9-1-13 2V7M5 7v17c4-1 6 0 8 1M25 7v17c-4-1-6 0-8 1',
  timeline: 'M29 16a13 13 0 1 1-26 0 13 13 0 0 1 26 0ZM16 6v10l7 4M16 3v2M3 16h2M27 16h2M16 27v2',
  glossary: 'M7 3h20v23H8a3 3 0 0 0 0 6h19M7 3a3 3 0 0 0-3 3v23M10 3v20M8 29h18',
  sources: 'M27 7c0 3-5 5-11 5S5 10 5 7s5-5 11-5 11 2 11 5ZM5 7v18c0 3 5 5 11 5s11-2 11-5V7M5 13c0 3 5 5 11 5s11-2 11-5M5 19c0 3 5 5 11 5s11-2 11-5',
}

export function BookIcon({ name }) {
  return <svg className="book-icon" viewBox="0 0 32 34" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>
}
