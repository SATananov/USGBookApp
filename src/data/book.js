// Stable IDs and relations are separate from language-specific editorial content.
export const book = {
  id: 'prima-e-dopo',
  title: 'Prima e Dopo il Cane Corso',
  originalLanguage: 'it',
  // Demonstration pagination from the reference, not a catalogue of loaded chapters.
  plannedChapters: 50,
  authors: ['Dott. Flavio Bruno', 'Stefano De Tanini'],
  translations: {
    en: {
      titleLead: 'Before and After', titleSubject: 'the Cane Corso',
      subtitle: 'Before and after the Cane Corso',
      introduction: 'A journey through the places, people, and shared memory of the Cane Corso. Open the volume and explore a first glimpse of the world around the dog.',
      description: 'An interactive heritage book about the Cane Corso. Temporary English reading edition.',
    },
    bg: {
      titleLead: 'Преди и след', titleSubject: 'Кане Корсо',
      subtitle: 'Преди и след Кане Корсо',
      introduction: 'Пътешествие през местата, хората и споделената памет за Кане Корсо. Отворете книгата и надникнете в света около кучето.',
      description: 'Интерактивна книга за наследството на Кане Корсо. Временно българско издание за преглед.',
    },
    it: {
      titleLead: 'Prima e Dopo', titleSubject: 'il Cane Corso',
      subtitle: 'Prima e dopo il Cane Corso',
      introduction: 'Un viaggio tra i luoghi, le persone e la memoria condivisa del Cane Corso. Aprite il volume per un primo sguardo sul mondo intorno al cane.',
      description: 'Un libro interattivo sul patrimonio del Cane Corso. Edizione italiana dimostrativa temporanea.',
    },
  },
}

export const parts = [{
  id: 'dog-of-the-south', bookId: book.id, number: 'III',
  translations: {
    en: { title: 'The dog of the South' },
    bg: { title: 'Кучето на Юга' },
    it: { title: 'Il cane del Sud' },
  },
}]

export const chapters = [{
  id: 'masseria', bookId: book.id, partId: 'dog-of-the-south', slug: 'masseria',
  order: 1, number: 11, status: 'demo', mediaIds: ['masseria-concept'],
  nextSlug: 'shepherds-flocks-mastino-abruzzese',
  translations: {
    en: {
      title: 'The Masseria',
      intro: 'The masseria was more than a farmhouse. It was a living system, where land, people, animals and work formed a single, interdependent reality. In this environment, the Cane Corso developed its role, its character and its unmistakable type.',
      description: 'The Masseria: a temporary sample chapter exploring place and the shared world of people and dogs.',
      sectionTitle: 'A place, a way of life',
      paragraphs: [
        'In this imagined scene, the masseria is more than a building. It is a meeting point between the house and the open country, between the rhythm of work and the stillness of evening. The dog belongs to that landscape, close to the people who give it life.',
        'Picture the courtyard at the end of the day. Footsteps cross the stone; a door opens; the fields fall quiet. Here, the story turns toward everyday companionship — the small gestures through which people, animals, and places become part of one another’s memory.',
        'This opening sketch invites us to look beyond a silhouette or a name. It asks us to notice the setting around the dog, and the relationships that make a shared history possible.',
      ],
      quote: 'Function is not something added to type after it is formed.\nFunction participates in the creation of type itself.',
      quoteAttribution: 'Key idea developed through the dialogue with Dott. Flavio Bruno',
    },
    bg: {
      title: 'Масерията',
      intro: 'Масерията е била повече от селска къща. Тя е била жива система, в която земята, хората, животните и трудът са образували единна, взаимосвързана реалност. В тази среда Кане Корсо е развило своята роля, характер и неповторим тип.',
      description: 'Масерията: временна примерна глава за мястото и споделения свят на хората и кучетата.',
      sectionTitle: 'Място и начин на живот',
      paragraphs: [
        'В тази въображаема сцена масерията е повече от сграда. Тя е място на среща между дома и откритото поле, между ритъма на труда и вечерната тишина. Кучето принадлежи на този пейзаж, близо до хората, които му вдъхват живот.',
        'Представете си двора в края на деня. Стъпки отекват по камъка; врата се отваря; полето притихва. Тук разказът се обръща към всекидневното общуване — малките жестове, чрез които хора, животни и места стават част от общата памет.',
        'Този начален очерк ни кани да погледнем отвъд силуета или името. Да забележим света около кучето и връзките, които правят възможна една споделена история.',
      ],
      quote: 'Функцията не е нещо, добавено към типа, след като той е оформен.\nФункцията участва в създаването на самия тип.',
      quoteAttribution: 'Основна идея, развита чрез диалога с д-р Флавио Бруно',
    },
    it: {
      title: 'La masseria',
      intro: 'La masseria era più di una casa rurale. Era un sistema vivente, in cui terra, persone, animali e lavoro formavano un’unica realtà interdipendente. In questo ambiente, il Cane Corso ha sviluppato il suo ruolo, il suo carattere e il suo tipo inconfondibile.',
      description: 'La masseria: un capitolo dimostrativo temporaneo sui luoghi e sul mondo condiviso di persone e cani.',
      sectionTitle: 'Un luogo, un modo di vivere',
      paragraphs: [
        'In questa scena immaginata, la masseria è più di un edificio. È un punto di incontro tra la casa e la campagna aperta, tra il ritmo del lavoro e la quiete della sera. Il cane appartiene a questo paesaggio, vicino alle persone che gli danno vita.',
        'Immaginate il cortile alla fine della giornata. I passi attraversano la pietra; una porta si apre; i campi tacciono. Qui il racconto si rivolge alla compagnia quotidiana: i piccoli gesti attraverso i quali persone, animali e luoghi entrano nella memoria gli uni degli altri.',
        'Questo primo abbozzo ci invita a guardare oltre una sagoma o un nome. Ci chiede di osservare il mondo intorno al cane e i legami che rendono possibile una storia condivisa.',
      ],
      quote: 'La funzione non è qualcosa che si aggiunge al tipo dopo che si è formato.\nLa funzione partecipa alla creazione del tipo stesso.',
      quoteAttribution: 'Idea chiave sviluppata attraverso il dialogo con il Dott. Flavio Bruno',
    },
  },
}]

// Navigation destination only: no second chapter prose is supplied.
chapters.push({
  id: 'shepherds', bookId: book.id, partId: 'dog-of-the-south',
  slug: 'shepherds-flocks-mastino-abruzzese', previousSlug: 'masseria',
  order: 2, number: 12, status: 'planned', mediaIds: [],
  translations: {
    en: {
      title: 'Shepherds, flocks and Mastino Abruzzese',
      intro: 'The next chapter of this shared history is in preparation.',
      description: 'A reserved chapter preview. Editorial content has not been added.',
    },
    bg: {
      title: 'Овчари, стада и Мастино Абруцезе',
      intro: 'Следващата глава от тази споделена история е в подготовка.',
      description: 'Място за бъдеща глава. Редакционният текст все още не е добавен.',
    },
    it: {
      title: 'Pastori, greggi e Mastino Abruzzese',
      intro: 'Il prossimo capitolo di questa storia condivisa è in preparazione.',
      description: 'Anteprima di un capitolo futuro. Il contenuto editoriale non è ancora disponibile.',
    },
  },
})

// Reserved collections: no invented historical records or bibliography.
export const timeline = []
export const glossary = []
export const sources = []

export function getChapter(slug) {
  return chapters.find((chapter) => chapter.slug === slug)
}
