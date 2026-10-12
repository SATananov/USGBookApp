export function BookOrnament({ className = '' }) {
  return (
    <div className={`ornament ${className}`} aria-hidden="true">
      <svg viewBox="0 0 54 30" fill="none">
        <path d="m27 2 6 13-6 13-6-13Z M27 8v14 M24 15h6 M19 15c0-11-15-10-12-2 2 5 10 2 6-2 M35 15c0-11 15-10 12-2-2 5-10 2-6-2 M2 15c9 0 13 9 20 5 M52 15c-9 0-13 9-20 5" />
      </svg>
    </div>
  )
}

export function BookCorners() {
  return <div className="book-corners" aria-hidden="true">
    {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner) => (
      <svg key={corner} className={corner} viewBox="0 0 48 48" fill="none">
        <path d="M3 45V3h42 M8 35V8h27 M4 4l31 31 M10 10c13-8 3 17 16 13 9-3-4-14-9-6-4 7 14 10 15 17 M10 27 5 33l9 2-4-8ZM27 10l6-5 2 9-8-4Z M15 5l5 6 5-6 M5 15l6 5-6 5" />
      </svg>
    ))}
  </div>
}
