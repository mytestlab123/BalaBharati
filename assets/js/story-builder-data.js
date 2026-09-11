/* Curated, child-friendly retellings. Sources and adaptation notes: README.md. */
(function (root, factory) {
  const stories = factory();
  if (typeof module === 'object' && module.exports) module.exports = stories;
  else root.RamayanaStories = stories;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  return [
    {
      id: 'hanuman', title: "Hanuman's mission", subtitle: 'Help a brave messenger bring good news.',
      theme: 'Courage', takeaway: 'Courage + wise action + seva.',
      summary: 'Hanuman meets Rama, crosses the ocean, enters Lanka, finds Sita, and returns to Rama with her message.',
      prompt: 'Tell the story together. Each person gets one picture.',
      sources: ['Kishkindha Kanda 3-4', 'Sundara Kanda 1-2, 15, 65'],
      scenes: [
        { id: 'meeting', label: 'Meets Rama', art: 'hanuman-meeting', alt: 'Hanuman greets Rama and Lakshmana in the forest.', hint: 'A mission begins by meeting the person you will help.' },
        { id: 'ocean', label: 'Crosses the ocean', art: 'hanuman-ocean', alt: 'Hanuman leaps across blue ocean waves toward a distant island.', hint: 'Hanuman must cross the water before exploring the island.' },
        { id: 'lanka', label: 'Enters Lanka', art: 'hanuman-lanka', alt: 'Hanuman enters the golden city of Lanka under the moon.', hint: 'Look for the city where Hanuman will search.' },
        { id: 'sita', label: 'Finds Sita', art: 'hanuman-sita', alt: 'Hanuman finds Sita beneath a tree in a garden.', hint: 'Inside Lanka, Hanuman finds the person he is looking for.' },
        { id: 'news', label: 'Brings Rama news', art: 'hanuman-news', alt: 'Hanuman returns to Rama with Sita\'s message and jewel.', hint: 'After finding Sita, Hanuman takes her message back.' }
      ]
    },
    {
      id: 'rama', title: "Rama's journey", subtitle: 'Rebuild a journey of friendship and homecoming.',
      theme: 'Teamwork', takeaway: 'Big journeys need good friends.',
      summary: 'Rama leaves Ayodhya with Sita and Lakshmana. Later, he meets Hanuman, his allies build a bridge to Lanka, he is reunited with Sita, and they return to Ayodhya.',
      prompt: 'Point to a picture where someone helps another person.',
      sources: ['Bala Kanda 1 (overview)', 'Yuddha Kanda 22, 118-119, 127-128'],
      scenes: [
        { id: 'forest', label: 'Leaves Ayodhya', art: 'rama-forest', alt: 'Rama, Sita and Lakshmana leave the palace for the forest.', hint: 'This journey begins when Rama leaves his home.' },
        { id: 'friend', label: 'Meets Hanuman', art: 'rama-friend', alt: 'Rama and Hanuman greet one another in the forest.', hint: 'Rama meets a helpful friend before the journey to Lanka.' },
        { id: 'bridge', label: 'Allies build a bridge', art: 'rama-bridge', alt: 'Rama watches his vanara allies place stones to build a bridge across the sea.', hint: 'The team needs a way across the sea before the reunion.' },
        { id: 'reunion', label: 'Reunites with Sita', art: 'rama-reunion', alt: 'Rama and Sita stand together again after the events in Lanka.', hint: 'Rama and Sita meet again before going home.' },
        { id: 'home', label: 'Returns to Ayodhya', art: 'rama-home', alt: 'Rama and Sita are welcomed home with flowers at Ayodhya.', hint: 'The journey ends back at home.' }
      ]
    },
    {
      id: 'bharata', title: "Bharata's promise", subtitle: 'Discover how a brother keeps his trust.',
      theme: 'Responsibility', takeaway: 'Keep your word. Care for others.',
      summary: 'Bharata returns to Ayodhya and learns that Rama is in exile. He visits Rama, receives his sandals as a sign of his authority, and governs on Rama\'s behalf while awaiting his return.',
      prompt: 'What is one promise you can keep this week?',
      sources: ['Ayodhya Kanda 71-72, 99-100, 112, 115'],
      scenes: [
        { id: 'return', label: 'Returns to Ayodhya', art: 'bharata-return', alt: 'Bharata arrives outside the quiet gates of Ayodhya.', hint: 'Bharata first comes home from his visit away.' },
        { id: 'learn', label: 'Learns Rama has left', art: 'bharata-learn', alt: 'Bharata listens to his mother Kaikeyi inside the palace.', hint: 'At the palace, Bharata learns what happened while he was away.' },
        { id: 'visit', label: 'Visits Rama', art: 'bharata-visit', alt: 'Bharata meets Rama beside a forest hut.', hint: 'After hearing the news, Bharata goes to see his brother.' },
        { id: 'sandals', label: 'Receives the sandals', art: 'bharata-sandals', alt: 'Rama gives his sandals to Bharata as a sign of his authority.', hint: 'Bharata receives a reminder of Rama before returning to serve.' },
        { id: 'serve', label: 'Serves for Rama', art: 'bharata-serve', alt: 'Bharata attends to the people at Nandigrama with Rama\'s sandals on a raised seat.', hint: 'Bharata keeps his promise by caring for the kingdom on Rama\'s behalf.' }
      ]
    },
    {
      id: 'ganesha-race', title: "Ganesha's clever race", subtitle: 'Can wisdom beat speed?',
      theme: 'Wisdom', takeaway: 'Think deeply before you rush.',
      summary: 'Narada brings a special mango. Shiva and Parvati announce a race around the world. Kartikeya speeds away on his peacock. Ganesha circles his parents three times and explains that they are his world. Pleased by his wisdom, they give him the mango.',
      prompt: 'When can thinking carefully be better than rushing?',
      sources: ['Artisans Crest: A Race Around the World — Ganesh and Karthik'],
      scenes: [
        { id: 'mango', label: 'Narada brings a mango', art: 'ganesha-race-mango', alt: 'Narada brings a special mango to Shiva, Parvati, Ganesha and Kartikeya.', hint: 'The story starts when a special prize arrives.' },
        { id: 'challenge', label: 'A race is announced', art: 'ganesha-race-challenge', alt: 'Shiva and Parvati announce a race around the world for Ganesha and Kartikeya.', hint: 'Before anyone can race, the challenge must be explained.' },
        { id: 'kartikeya', label: 'Kartikeya speeds away', art: 'ganesha-race-kartikeya', alt: 'Kartikeya rides his peacock quickly around the world.', hint: 'One brother chooses speed and begins travelling.' },
        { id: 'parents', label: 'Ganesha circles his parents', art: 'ganesha-race-parents', alt: 'Ganesha walks around Shiva and Parvati instead of travelling around the earth.', hint: 'Ganesha chooses a different way to think about the world.' },
        { id: 'wisdom', label: 'Ganesha explains his idea', art: 'ganesha-race-wisdom', alt: 'Ganesha explains his reasoning and receives the special mango.', hint: 'The final scene reveals why Ganesha made his unusual choice.' }
      ]
    },
    {
      id: 'ganesha-scribe', title: 'Ganesha the scribe', subtitle: 'A traditional story about focus and understanding.',
      theme: 'Focus', takeaway: 'Good work needs focus, understanding and commitment.',
      summary: 'In a popular tradition, Vyasa asks Ganesha to write the Mahabharata. They agree that Vyasa will keep dictating and Ganesha will understand each verse before writing. A popular retelling says Ganesha uses his tusk when his writing tool fails.',
      prompt: 'What helps you stay focused when a task is difficult?',
      sources: ['Traditional Mahabharata scribe story; versions differ'],
      scenes: [
        { id: 'vyasa', label: 'Vyasa plans the epic', art: 'ganesha-scribe-vyasa', alt: 'Vyasa sits with a manuscript and plans the great epic.', hint: 'First, the great work must be planned.' },
        { id: 'ask', label: 'Vyasa asks Ganesha', art: 'ganesha-scribe-ask', alt: 'Vyasa asks Ganesha to write as he dictates.', hint: 'Vyasa needs the right person to write.' },
        { id: 'conditions', label: 'They agree on conditions', art: 'ganesha-scribe-conditions', alt: 'Vyasa and Ganesha agree on how they will work together.', hint: 'They agree how they will work before starting.' },
        { id: 'write', label: 'Ganesha writes for Vyasa', art: 'ganesha-scribe-write', alt: 'Ganesha writes on a manuscript while Vyasa dictates.', hint: 'Now the long work can begin.' },
        { id: 'tusk', label: 'Ganesha keeps writing', art: 'ganesha-scribe-tusk', alt: 'Ganesha continues writing with determination in a popular retelling.', hint: 'The last picture shows determination when a writing tool fails.' }
      ]
    }
  ];
});
