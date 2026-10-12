// Asset shape: { src, width, height }. Archive originals must remain unchanged.
// Translations hold captions/alt/credits independently of the actual asset.
export const media = [{
  id: 'masseria-concept', chapterId: 'masseria',
  kind: 'conceptual', containsEmbeddedText: false,
  original: { src: '/art/masseria-hero.png', width: 1055, height: 394 },
  translations: {
    en: {
      asset: null,
      title: 'The Masseria as a living functional system',
      alt: 'Conceptual illustration of a southern Italian masseria at golden hour, with a Cane Corso, livestock and a shepherd. Not an archival image.',
      caption: null,
      attribution: 'Conceptual illustration inspired by the dialogue with Dott. Flavio Bruno',
    },
    bg: {
      asset: null,
      title: 'Масерията като жива функционална система',
      alt: 'Концептуална илюстрация на южноиталианска масерия по залез, с Cane Corso, стадо и пастир. Не е архивно изображение.',
      caption: null,
      attribution: 'Концептуална илюстрация, вдъхновена от диалога с д-р Флавио Бруно',
    },
    it: {
      asset: null,
      title: 'La masseria come sistema funzionale vivente',
      alt: 'Illustrazione concettuale di una masseria dell’Italia meridionale al tramonto, con Cane Corso, bestiame e pastore. Non è un’immagine d’archivio.',
      caption: null,
      attribution: 'Illustrazione concettuale ispirata al dialogo con il Dott. Flavio Bruno',
    },
  },
}]

export function resolveMediaAsset(item, language) {
  if (item.kind === 'archive') return item.original
  // Never substitute an EN/BG/IT visual with embedded text from another language.
  if (item.containsEmbeddedText) return item.translations[language]?.asset ?? null
  return item.translations[language]?.asset ?? item.original
}
