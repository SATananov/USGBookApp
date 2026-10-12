import { useId } from 'react'
import { resolveMediaAsset } from '../data/media'
import { useBookLanguage } from '../localization/useBookLanguage'

export function BookImagePlate({ media, number }) {
  const { language, t } = useBookLanguage()
  const captionId = useId()
  const translated = media.translations[language]
  const asset = resolveMediaAsset(media, language)
  const category = media.kind === 'conceptual' ? t.conceptual : media.kind === 'archive' ? t.archive : t.illustration
  return (
    <figure className="image-plate" aria-labelledby={captionId}>
      <div className="plate-frame">{asset ? (
        <img src={asset.src} width={asset.width} height={asset.height}
          alt={translated.alt} loading="lazy" />
      ) : (
        <div className="plate-placeholder">
          <span className="plate-number eyebrow">{t.plate} {String(number).padStart(2, '0')}</span>
          <span className="plate-ornament" aria-hidden="true">◇</span>
          <p>{t.visualReserved}</p>
          <span className="plate-note">{t.visualNote}</span>
        </div>
      )}</div>
      <figcaption id={captionId}>
        <span className="eyebrow">{category}</span>
        <h2>{translated.title}</h2>
        {translated.caption && <p>{translated.caption}</p>}
        <p className="plate-attribution">{translated.attribution}</p>
      </figcaption>
    </figure>
  )
}
