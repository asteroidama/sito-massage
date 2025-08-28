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
      { text: "Mi avvicino per la prima volta agli Oli Essenziali", kits: ["family", "aromaTouch"] },
      { text: "Voglio provare gli Oli Essenziali dōTERRA", kits: ["home", "aromatouch", "all", "allVeg"] },
      { text: "Mi incuriosisce il massaggio con gli Oli Essenziali", kits: ["aromatouch"] },
      { text: "Voglio diventare anche io un Consulente Benessere dōTERRA", kits: ["home", "all", "allVeg", "restore", "restoreVeg"] }
    ]
  },
  {
    question: "Quale obiettivo vorresti raggiungere con gli oli essenziali?",
    answers: [
      { text: "Benessere quotidiano per tutta la famiglia", kits: ["family", "home", "kids", "restore", "restoreVeg"] },
      { text: "Equilibrio emotivo personale", kits: ["family", "aromatouch"] },
      { text: "Stato generale di relax", kits: ["home", "aromaTouch"] },
      { text: "Benessere fisico ed energia costante", kits: ["restore", "restoreVeg"] }
    ]
  },
  {
    question: "Come pensi di usare più spesso gli Oli Essenziali?",
    answers: [
      { text: "Tramite un diffusore ad ultrasuoni in casa", kits: ["home", "aromatouch"] },
      { text: "Uso topico e cura personale", kits: ["aromaTouch"] },
      { text: "Supporto quotidiano per assunzione interna", kits: ["restore", "restoreVeg", "family"] },
      { text: "Supporto per tutta la mia famiglia", kits: ["home", "all", "allVeg", "kids"] }
    ]
  },
  {
    question: "Quanto è importante la varietà degli Oli nel tuo kit?",
    answers: [
      { text: "Il minimo per cominciare", kits: ["family", "aromaTouch", "kids"] },
      { text: "Una buona varietà equilibrata", kits: ["homeEssentials", "healthyHabits"] },
      { text: "È importante che sia incluso il diffusore", kits: ["home", "aromatouch"] },
      { text: "La massima completezza", kits: ["all", "allVeg"] }
    ]
  },
  {
    question: "Preferisci un kit da usare solo per te o da condividere?",
    answers: [
      { text: "Solo per me", kits: ["family", "aromatouch", "restore", "restoreVeg"] },
      { text: "Da condividere con la mia famiglia", kits: ["home", "kids", "all", "allVeg"] },
      { text: "Lo userò anche con i colleghi", kits: ["home", "all", "allVeg"] },
      { text: "Voglio condividerlo con amici e conoscenti", kits: ["home", "aromatouch", "all", "allVeg"] }
    ]
  },
  {
    question: "Quanto vuoi investire inizialmente?",
    answers: [
      { text: "Ho un budget contenuto", kits: ["family"] },
      { text: "Mi interessa avere un buon prodotto", kits: ["home", "aromatouch", "kids", "restore", "restoreVeg"] },
      { text: "Disponibile a un investimento importante", kits: ["all", "allVeg"] },
      { text: "Voglio il massimo", kits: ["all", "allVeg"] }
    ]
  }
];

// Domanda spareggio
const tiebreaker = {
    question: "Preferisci un kit compatto o uno più grande?",
    answers: [
      { text: "Compatto e pratico", kits: ["family"] },
      { text: "Equiibrato e completo", kits: ["home"] },
      { text: "Grande e versatile", kits: ["all", "allVeg"] },
      { text: "Molto ampio", kits: ["all", "allVeg"] }
    ]
};