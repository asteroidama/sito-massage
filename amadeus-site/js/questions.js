// Tutti i kit disponibili
const kits = [
  "family",
  "home",
  "aromatouch",
  "kids",
  "restoreVeg",
  "restore",
  "all",
  "allVeg"
];

// Domande principali
const questions = [
  {
    question: "Per quale motivo vuoi acquistare un kit?",
    answers: [
      { text: "Mi avvicino per la prima volta agli Oli Essenziali", kits: ["family", "aromatouch"] },
      { text: "Voglio provare gli Oli Essenziali dōTERRA", kits: ["home", "aromatouch", "all"] },
      { text: "Mi incuriosisce il massaggio con gli Oli Essenziali", kits: ["aromatouch"] },
      { text: "Voglio diventare anche io un Consulente Benessere dōTERRA", kits: ["home", "all", "restore"] }
    ]
  },
  {
    question: "Quale obiettivo vorresti raggiungere con gli oli essenziali?",
    answers: [
      { text: "Benessere quotidiano per tutta la famiglia", kits: ["family", "home", "kids", "restore"] },
      { text: "Equilibrio emotivo personale", kits: ["family", "aromatouch"] },
      { text: "Stato generale di relax", kits: ["home", "aromatouch"] },
      { text: "Benessere fisico ed energia costante", kits: ["restore"] }
    ]
  },
  {
    question: "Come pensi di usare più spesso gli Oli Essenziali?",
    answers: [
      { text: "Tramite un diffusore ad ultrasuoni in casa", kits: ["home", "aromatouch"] },
      { text: "Uso topico e cura personale", kits: ["aromatouch"] },
      { text: "Supporto quotidiano per assunzione interna", kits: ["restore", "family"] },
      { text: "In tutti i modi possibili", kits: ["home", "all", "kids"] }
    ]
  },
  {
    question: "Quanto è importante la varietà degli Oli nel tuo kit?",
    answers: [
      { text: "Il minimo per cominciare", kits: ["family", "aromatouch", "kids"] },
      { text: "Una buona varietà equilibrata", kits: ["home"] },
      { text: "È importante che sia incluso il diffusore", kits: ["home", "aromatouch"] },
      { text: "La massima completezza", kits: ["all"] }
    ]
  },
  {
    question: "Preferisci un kit da usare solo per te o da condividere?",
    answers: [
      { text: "Solo per me", kits: ["family", "aromatouch", "restore"] },
      { text: "Da condividere con la mia famiglia", kits: ["kids", "all"] },
      { text: "Lo userò anche con i colleghi", kits: ["home", "all"] },
      { text: "Voglio condividerlo con amici e conoscenti", kits: ["home", "aromatouch", "all"] }
    ]
  },
  {
    question: "Quanto vuoi investire inizialmente?",
    answers: [
      { text: "Ho un budget contenuto", kits: ["family"] },
      { text: "Mi interessa avere un buon prodotto", kits: ["home", "aromatouch", "kids", "restore"] },
      { text: "Disponibile a un investimento importante", kits: ["all"] },
      { text: "Voglio il massimo", kits: ["all"] }
    ]
  }
];

// Domanda spareggio
const tiebreaker = {
    question: "Preferisci un kit compatto o uno più grande?",
    answers: [
      { text: "Compatto e pratico", kits: ["family"] },
      { text: "Equiibrato e completo", kits: ["home"] },
      { text: "Grande e versatile", kits: ["all"] },
      { text: "Molto ampio", kits: ["all"] }
    ]
};

