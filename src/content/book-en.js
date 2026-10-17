// English translation overlay for the locked Italian master.
// PASS 01: front matter + part titles.
// PASS 02: Chapters 1–10.
// PASS 03: Chapters 11–20.
// PASS 04: Chapters 21–30.
// PASS 05: Chapters 31–40.
// PASS 06: Chapters 41–49 + Epilogue. English body translation complete.

import { englishChapters01to10 } from './book-en-chapters-01-10.js'
import { englishChapters11to20 } from './book-en-chapters-11-20.js'
import { englishChapters21to30 } from './book-en-chapters-21-30.js'
import { englishChapters31to40 } from './book-en-chapters-31-40.js'
import { englishChapters41to49, englishEpilogue } from './book-en-chapters-41-49.js'
// Source: V12 FINAL IT LOCK commit f62fce7f4de9c8a1bab661484f7109ee076b6ca0

export const englishTranslation = {
  "language": "en",
  "sourceLanguage": "it",
  "sourceCommit": "f62fce7f4de9c8a1bab661484f7109ee076b6ca0",
  "parts": {
    "parte-i": "BEFORE THE CANE CORSO",
    "parte-ii": "THE CANE CORSO THROUGH THE CENTURIES",
    "parte-iii": "THE DOG OF THE SOUTH",
    "parte-iv": "THE NINETEENTH CENTURY",
    "parte-v": "LIVING MEMORY",
    "parte-vi": "THE TWENTIETH CENTURY",
    "parte-vii": "AFTER THE CANE CORSO",
    "parte-viii": "FUNCTION SHAPES TYPE",
    "parte-ix": "BREEDING TO PRESERVE",
    "parte-x": "WHAT HAVE WE PRESERVED?"
  },
  "frontMatter": {
    "idea-del-libro": {
      "title": "The Idea Behind the Book",
      "blocks": [
        {
          "type": "paragraph",
          "text": "This book was not born to add yet another definition of the Cane Corso to the many that already exist. It was born from an encounter and, above all, from a method of inquiry that emerged within that encounter."
        },
        {
          "type": "paragraph",
          "text": "Dott. Flavio Bruno points out a direction. Stefano asks questions, listens, returns to the answers, compares them with his own experience, and writes. The result is meant to be neither a transcript of conversations nor an academic monograph. It is a narrative woven from history, memory, experience, interpretation, rural culture, and cynology."
        },
        {
          "type": "paragraph",
          "text": "In the deepest sense, the direction belongs to Dott. Flavio Bruno: he continually brings the discussion back from the name to the function, from the image to the work, from the modern breed to the need that came before it. Stefano does not copy that voice. He follows it, questions it, and turns it into a narrative journey."
        },
        {
          "type": "paragraph",
          "text": "Different levels of knowledge coexist in this book, and we do not want to confuse them."
        },
        {
          "type": "paragraph",
          "text": "There is **what is documented**: a source, a date, an artifact, a text, a document, a verifiable scientific datum."
        },
        {
          "type": "paragraph",
          "text": "There is **testimony**: what Dott. Flavio Bruno has seen, remembers, or received through the memory of the people and places he has known."
        },
        {
          "type": "paragraph",
          "text": "There is **direct experience**: the veterinary and cynological experience of Dott. Flavio Bruno, and Stefano’s lived experience with his own Cane and the generations he has personally observed."
        },
        {
          "type": "paragraph",
          "text": "There is **interpretation**: the way a fact, a testimony, or an experience is read and connected to something else."
        },
        {
          "type": "paragraph",
          "text": "And finally there is **hypothesis**: a possibility that may have logic behind it, but cannot be turned into certainty simply because it is compelling or plausible."
        },
        {
          "type": "paragraph",
          "text": "Beneath these distinctions, however, runs an even simpler structure. At the beginning, the question is the one almost everyone asks:"
        },
        {
          "type": "question",
          "text": "Where does the Cane Corso come from?"
        },
        {
          "type": "paragraph",
          "text": "Then, following Dott. Flavio Bruno, the question changes:"
        },
        {
          "type": "question",
          "text": "Why was it built that way? Why did it behave that way?"
        },
        {
          "type": "paragraph",
          "text": "And when we arrive at the contemporary Cane Corso, the question inevitably becomes more difficult:"
        },
        {
          "type": "question",
          "text": "Is it still that dog?"
        },
        {
          "type": "paragraph",
          "text": "These are not three separate chapters. They are three stages of the same journey. The reader begins by looking for an origin, discovers that origin alone does not explain type, and is finally compelled to look at the present."
        },
        {
          "type": "paragraph",
          "text": "These distinctions are not meant to cool the book down. They are meant to set it free. A memory can remain a memory without being diminished. An experience can be valuable without becoming a universal law. A hypothesis can be told without disguising itself as fact."
        },
        {
          "type": "paragraph",
          "text": "When a specific historical, archaeological, criminological, veterinary, genetic, or bibliographic claim requires stronger evidence, the book presents it cautiously and distinguishes documented fact from testimony, interpretation, and hypothesis."
        },
        {
          "type": "paragraph",
          "text": "Oral accounts are not automatically turned into documents. Ancient images do not become pedigrees. Modern words are not projected backward in time without caution. But caution must not drain the life from history. On the contrary, it should allow memory to remain memory, experience to remain experience, and history to remain history."
        },
        {
          "type": "paragraph",
          "text": "The thread running through all of this is simple:"
        },
        {
          "type": "question",
          "text": "Before the name comes the need; before the standard comes the work; generation after generation, function shapes type."
        },
        {
          "type": "paragraph",
          "text": "This is therefore not a “documentary” book in the narrow sense of the word. It does not seek merely to line up proven facts, nor to pretend that oral memory can be treated like a notarized record. It is a hybrid book because the path that produced it was hybrid. Dott. Flavio Bruno brings memory, veterinary training, reading, encounters, and his own historical interpretation. Stefano brings the questions, the experience of living with his own Cane, the comparison with generations he has observed directly, and the need to turn that dialogue into a narrative that can be understood."
        },
        {
          "type": "paragraph",
          "text": "For that reason, the narrative voice must not erase the differences. When Dott. Flavio Bruno speaks, we want to hear him. His way of naming things, his formulas, even the sharpness of some of his opinions belong to the history of the project. When Stefano speaks, it must be equally clear that we are reading a personal understanding: a man who listens, sometimes asks for confirmation, sometimes recognizes something he had already sensed through his own Cane, sometimes forms a hypothesis and accepts that it may need to be corrected or abandoned."
        },
        {
          "type": "paragraph",
          "text": "The book is not built to prove that Dott. Flavio Bruno “is right about everything.” That would betray his own invitation to observe. It is built so that a heritage of ideas and memory is not lost, and so that it can enter into dialogue with historical verification, contemporary science, and the author’s experience."
        },
        {
          "type": "paragraph",
          "text": "That freedom allows us to do something important: let a story remain a story. *Spezzaferro* does not have to become a statistic in order to be true as memory. *I sogni di un ragazzo* (*A Boy’s Dreams*) does not have to be dismantled into footnotes in order to have value. But when we move from a story to a date, a genetic datum, a diagnosis, or a criminological description, the rules of evidence change."
        },
        {
          "type": "paragraph",
          "text": "And when we push farther back — Mesopotamia, Anatolia, Epirus, Rome — we will sometimes enter the territory of hypothesis. We will not hide that. We will make it visible."
        },
        {
          "type": "paragraph",
          "text": "The reader will always know what kind of ground they are standing on."
        }
      ]
    },
    "le-voci-dietro-questo-libro": {
      "title": "The Voices Behind This Book",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Before entering the history of the Cane Corso, it is right to know the people from whose questions, memories, and experiences this book was born."
        },
        {
          "type": "paragraph",
          "text": "They are not presented as infallible authorities. They are the real voices of a dialogue: one voice remembers, interprets, and tells; the other asks, observes, and tries to understand."
        },
        {
          "type": "heading",
          "text": "Dott. Flavio Bruno — memory, experience, and inquiry"
        },
        {
          "type": "paragraph",
          "text": "Dott. Flavio Bruno is not presented in these pages as the guardian of an absolute truth, nor as the person who possesses the final word on the history of the Cane Corso. His value to this book comes from something different: memory, experience, listening, study, and direct contact with a world in which a dog was judged first of all by what it was capable of doing."
        },
        {
          "type": "paragraph",
          "text": "Veterinarians, massari (farmstead owners or managers), shepherds, hunters, butchers, landowners, families, and working-dog users return again and again in his stories. So do the South, the masserie (traditional rural estates), livestock fairs, cattle, and men who knew the dog because they needed it. Beside those memories stand his reading, his veterinary training, and his own historical-functional interpretation."
        },
        {
          "type": "paragraph",
          "text": "His way of reading the Cane Corso almost always returns to the same question: **what was this dog for?** From that question comes the principle that runs through the entire book: **Function shapes type.**"
        },
        {
          "type": "paragraph",
          "text": "Not all of his words have the same status. Some rest on documents; others are accounts received from others, personal memories, opinions, or hypotheses. The book does not want to erase those differences. It wants to make them recognizable without taking the life out of the voice that carries them."
        },
        {
          "type": "paragraph",
          "text": "Dott. Flavio Bruno has not kept this interest confined to private conversation. Over time he has also **promoted and organized meetings and events**, creating occasions for discussion around the Cane Corso, the functional dog, tradition, animals, and rural culture. For him, memory is not something to be shut away in a drawer: it must be told, discussed, and passed on to those who come after us."
        },
        {
          "type": "paragraph",
          "text": "Part of this work has also taken shape in writing. Among the volumes Dott. Flavio Bruno shared with Stefano are **Il Cane Corso** and **Brevi annotazioni sul Cane Corso, nel tempo, nelle diverse condizioni geografiche, ambientali e sociali**. His path also intersects with **Il Contado del Molise** and the **Centro Cinofilo Razze Meridionali di Santa Croce di Magliano**, within a broader interest in southern Italian dogs and breeds, recognized and unrecognized. This list is not included to lend authority to his words; it is part of the context from which the voice running through this book emerges."
        },
        {
          "type": "paragraph",
          "text": "He was born on **27 April**. In telling his personal story, he has also spoken of the bond he feels with the name Flavio, with San Flaviano, and with a culture in which land, tradition, and animals continue to intertwine. These details only appear small. They help us see the man behind the words."
        },
        {
          "type": "heading",
          "text": "Maria Alfieri — the presence beside the journey"
        },
        {
          "type": "paragraph",
          "text": "Beside Dott. Flavio Bruno is **Maria Alfieri**. This book does not pretend to turn her presence into a biography that is not ours to write. It does, however, want to acknowledge the person at his side, who shares the human and family dimension within which animals, memories, meetings, and initiatives have found a place over the years."
        },
        {
          "type": "paragraph",
          "text": "Some people do not need to stand at the center of the stage to be an essential part of a story. Maria also belongs to the everyday life lived beside the Cane: in the images and memories shared with Stefano, we see her with them, within that concrete form of care made of presence, responsibility, and continuity. Her name belongs in these pages as recognition of that presence and support."
        },
        {
          "type": "heading",
          "text": "Stefano De Tanini — the one who searches"
        },
        {
          "type": "paragraph",
          "text": "Stefano De Tanini does not present himself as a historian, cynologist, or expert. He is simply a man who encountered the Cane Corso and, from that moment, felt the need to understand it more and more deeply."
        },
        {
          "type": "paragraph",
          "text": "First came the Cane. Then came the questions: where does it really come from? What was it before the modern standard? What remains of the functional dog? And what do we risk losing when a breed born from work is viewed only through pedigree, show ring, and image?"
        },
        {
          "type": "paragraph",
          "text": "With the limited experience he himself acknowledges, Stefano has lived beside his own Cane and followed the birth and growth of **about ninety-six puppies**. Not with the idea of building a trade or a breeding operation as an economic activity: those puppies were **placed with families free of charge**, with the desire, in his own small way, to contribute to the responsible spread of the breed and to the continuity of the Cane Corso he recognizes as functional."
        },
        {
          "type": "paragraph",
          "text": "For Stefano, a puppy is not merchandise. Placing one means choosing the people, trying to understand where it will go, staying in contact, and remaining willing to take it back if that ever becomes necessary. Responsibility does not end when the Cane leaves home."
        },
        {
          "type": "paragraph",
          "text": "His aim is not to proclaim that he has found the “true Cane Corso” once and for all. It is to keep searching for it and, as far as he can, **not lose the Cane within the breed**: character, balance, ability, relationship with people, substance, and function."
        },
        {
          "type": "paragraph",
          "text": "It is this search that leads him to Dott. Flavio Bruno. Not to find someone who will confirm what he already wants to believe, but to encounter a voice capable of answering with memories, experience, stories, doubts, and interpretations that open further questions."
        },
        {
          "type": "paragraph",
          "text": "**Stefano asks. Dott. Flavio Bruno remembers, answers, interprets, and tells.** Sometimes the answers produce agreement; at other times they require caution or verification. That is precisely why the journey remains real."
        },
        {
          "type": "paragraph",
          "text": "This book is not born from the claim that it possesses the truth. **It is born from the need to search for it.**"
        }
      ]
    },
    "introduzione": {
      "title": "Introduction",
      "blocks": [
        {
          "type": "paragraph",
          "text": "I had not decided to write a book."
        },
        {
          "type": "paragraph",
          "text": "I had decided to understand."
        },
        {
          "type": "paragraph",
          "text": "The Cane Corso had already entered my life long before I tried to reconstruct its history. I lived with my Cane, watched them grow, change, react, protect, and learn. I saw differences between dogs from the same family and similarities that returned from one generation to the next. Some of what I read seemed to correspond perfectly to what stood before me. Other things, instead, left more questions open than they answered."
        },
        {
          "type": "paragraph",
          "text": "Where did this Cane really come from?"
        },
        {
          "type": "paragraph",
          "text": "What did it mean to say that it was a “molosser”?"
        },
        {
          "type": "paragraph",
          "text": "What relationship did it have with Rome, with the *pugnax*, with the dogs of Epirus, with the ancient peoples of the Mediterranean?"
        },
        {
          "type": "paragraph",
          "text": "Why did descriptions of the past repeatedly return to the masseria (a traditional southern Italian rural estate), the butcher, livestock, presa (grip and hold), and guarding?"
        },
        {
          "type": "paragraph",
          "text": "And above all: how much of the Cane Corso before me still belonged to that world?"
        },
        {
          "type": "paragraph",
          "text": "I began to read. The more I read, the less the easy answers convinced me. The linear story was compelling: an ancient dog, Rome, the Middle Ages, the South, the modern recupero (recovery). But every time I tried to look at it closely, gaps appeared, names were used with different meanings, images were interpreted as though they were pedigrees, and hypotheses repeated for so long began to look like facts."
        },
        {
          "type": "paragraph",
          "text": "The modern story also seemed simple until I began to question it. I had been told, as countless enthusiasts are told, that the Cane Corso had come close to disappearing and that a few men had found the last remaining dogs in the South, rebuilding from that small nucleus the breed we know today. It was a powerful story. It had protagonists, a loss, a search, and a rebirth. Precisely for that reason, it seemed complete."
        },
        {
          "type": "paragraph",
          "text": "Later I would discover that Dott. Flavio Bruno had something different to tell me about this as well."
        },
        {
          "type": "paragraph",
          "text": "And that difference would change one of the central questions of the book: **was the Cane Corso itself recovered, or was it instead the breed’s recognition by official cynology that was recovered?**"
        },
        {
          "type": "paragraph",
          "text": "It was during that phase that I sought out **Dott. Flavio Bruno**."
        },
        {
          "type": "paragraph",
          "text": "I was not looking for an authority to tell me what to think. I was looking for someone who knew a world that I could only try to reconstruct."
        },
        {
          "type": "paragraph",
          "text": "In Dott. Flavio Bruno I found memory, experience, strong opinions, stories received from other men, veterinary training, a desire to organize gatherings and keep that memory alive — and above all a willingness to discuss, even when his answer made my question more difficult."
        },
        {
          "type": "paragraph",
          "text": "At first I was not looking for a co-author. I was looking for someone to whom I could put the questions I could no longer resolve on my own."
        },
        {
          "type": "paragraph",
          "text": "I asked."
        },
        {
          "type": "paragraph",
          "text": "Dott. Flavio Bruno answered."
        },
        {
          "type": "paragraph",
          "text": "Sometimes he confirmed a direction. At other times he overturned it completely. On some occasions I came to him with pages I had read, connections that seemed logical to me, a theory almost ready. He invited me, at least for a moment, to set aside what I had accumulated and return to the simplest question: **what was that dog for?**"
        },
        {
          "type": "paragraph",
          "text": "It was a change of perspective."
        },
        {
          "type": "paragraph",
          "text": "Do not start from the name in order to search for the dog, but from the human need."
        },
        {
          "type": "paragraph",
          "text": "Do not immediately ask whether an animal depicted two thousand years ago was “already a Cane Corso,” but ask what work it performed, in what environment, and in what relationship with people and other animals."
        },
        {
          "type": "paragraph",
          "text": "Do not use form as definitive proof of genealogy, but read it as a possible consequence of function."
        },
        {
          "type": "paragraph",
          "text": "From those conversations, the principle that runs through this book slowly emerged:"
        },
        {
          "type": "quote",
          "text": "“Function shapes type.”",
          "attribution": "Dott. Flavio Bruno"
        },
        {
          "type": "paragraph",
          "text": "It is not a decorative slogan. It is the method through which Dott. Flavio Bruno taught me to question the history of the dog."
        },
        {
          "type": "paragraph",
          "text": "This does not mean that every answer in the pages that follow should be accepted as definitive truth. That would contradict the very path that produced the book. Dott. Flavio Bruno brings his own experience, the memory received from men who belonged to a world that has now largely disappeared, his veterinary training, his reading, and his own historical interpretation. I bring my questions, what I have read, what I have observed while living with my Cane, and the way those explanations have changed my view."
        },
        {
          "type": "paragraph",
          "text": "For that reason, our voices must not merge completely."
        },
        {
          "type": "paragraph",
          "text": "When Dott. Flavio Bruno tells a story, the story remains his."
        },
        {
          "type": "paragraph",
          "text": "When he offers an interpretation of his own, we present it as such."
        },
        {
          "type": "paragraph",
          "text": "When I connect his words to my own experience, the responsibility for that reading is mine."
        },
        {
          "type": "paragraph",
          "text": "And when we enter territory in which history, archaeology, genetics, veterinary medicine, or criminology requires specific evidence, we look for it. Where the evidence is insufficient, we do not turn hypothesis into certainty."
        },
        {
          "type": "paragraph",
          "text": "This is especially true for the most ancient part of our journey. Mesopotamia, Anatolia, Epirus, the Greek world, and Rome belong to a history far broader than that of the modern Cane Corso. The existence in those civilizations of powerful dogs used for guarding, hunting, or confronting difficult animals is something that can be studied. Constructing a continuous genealogical line from them to the contemporary Cane Corso is something else and requires a different degree of caution."
        },
        {
          "type": "paragraph",
          "text": "To that caution, Dott. Flavio Bruno adds an interpretation of his own: the Cane Corso should not simply be imagined as a dog that one day “arrived” in Italy from outside. In his reading, a functional tradition was already rooted in the canine populations of the peninsula; the Roman world would later have organized, employed, and differentiated those dogs according to different needs. One direction was more mobile, closer to people, more operational; another was heavier, more closely tied to waiting and guarding. We do not present this reading as a proven genealogical tree. We present it for what it is: a historical-functional key consistent with the principle that guides the entire book."
        },
        {
          "type": "paragraph",
          "text": "Over the course of our conversations I understood something else as well. The more I searched for “the origin,” the more Dott. Flavio Bruno brought me back to concrete life."
        },
        {
          "type": "paragraph",
          "text": "The masseria."
        },
        {
          "type": "paragraph",
          "text": "The flock."
        },
        {
          "type": "paragraph",
          "text": "The difficult bovine that had to be contained."
        },
        {
          "type": "paragraph",
          "text": "The butcher who had to travel with money and livestock."
        },
        {
          "type": "paragraph",
          "text": "The guard."
        },
        {
          "type": "paragraph",
          "text": "The shepherd."
        },
        {
          "type": "paragraph",
          "text": "The dog that waited."
        },
        {
          "type": "paragraph",
          "text": "The dog that intervened."
        },
        {
          "type": "paragraph",
          "text": "History began to stop being a succession of names and became a succession of needs."
        },
        {
          "type": "paragraph",
          "text": "This is where *Before and After the Cane Corso* begins."
        },
        {
          "type": "paragraph",
          "text": "“Before” does not mean only before the breed’s official recognition. It means before the name, before the standard, before modern cynology: the long period in which people selected a dog because they needed it."
        },
        {
          "type": "paragraph",
          "text": "“After” does not mean that the Cane Corso is over. It means asking what happens when that dog enters the world of the recognized breed, pedigree, the show ring, aesthetic selection, and the international market."
        },
        {
          "type": "paragraph",
          "text": "What have we preserved?"
        },
        {
          "type": "paragraph",
          "text": "What have we changed?"
        },
        {
          "type": "paragraph",
          "text": "What might we have lost?"
        },
        {
          "type": "paragraph",
          "text": "And what can we still save?"
        },
        {
          "type": "paragraph",
          "text": "I am not writing these pages to prove that I possess the definitive answer. I am writing them because the questions that led me to Dott. Flavio Bruno deserved not to be lost."
        },
        {
          "type": "paragraph",
          "text": "This book exists because, before I wanted to write, I wanted to understand."
        },
        {
          "type": "paragraph",
          "text": "And because, once I began to understand, I realized that the most important question was no longer only where the Cane Corso came from."
        },
        {
          "type": "paragraph",
          "text": "It had become another question:"
        },
        {
          "type": "question",
          "text": "What must we preserve for it to continue to be Cane Corso?"
        }
      ]
    }
  },
  "chapters": {
    ...englishChapters01to10,
    ...englishChapters11to20,
    ...englishChapters21to30,
    ...englishChapters31to40,
    ...englishChapters41to49,
  },
  "epilogue": englishEpilogue
}
