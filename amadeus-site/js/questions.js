const questions = [
    // --- FILTRO 1: OLI vs INTEGRATORI vs ENTRAMBI ---
  {
    id: "typeFilter",
    type: "filter",
    question: "Hai intenzione di usare di più Oli Essenziali, Integratori, o entrambi?",
    answers: [
      { text: "Oli Essenziali", filter: kit => kit.type.includes("oli") },
      { text: "Integratori", filter: kit => kit.type.includes("integratori") },
      { text: "Entrambi", filter: kit => kit.type.includes("oli") || kit.type.includes("integratori") } // non elimina nulla
    ]
  },
  // --- FILTRO 2: PREZZO ---
  {
    id: "budgetFilter",
    type: "filter",
    question: "Qual è il budget che hai in mente?",
    answers: [
      { text: "Contenuto", filter: kit => kit.price <= 200 },
      { text: "Mi interessa avere un buon prodotto", filter: kit => kit.price > 200 && kit.price <= 400 },
      { text: "Non ho particolari limiti ma non vorrei spendere molto", filter: kit => kit.price > 200 && kit.price <= 400  },
      { text: "Voglio un kit premium completo di tutto", filter: kit => kit.price > 400 }
    ]
  },
 // --- DOMANDE A PUNTI ---
  {
    id: "destinated",
    type: "points",
    question: "Chi userà principalmente i prodotti?",
    answers: [
      { text: "Solo io", kits: ["aromatouchdiff", "aromatrain", "essetouch", "family", "home", "mood", "yoga", "esse", "together", "natural", "naturalveg", "season", "tummy", "women", "llv", "llvveg", "restore", "restoreveg"] },
      { text: "Tutta la famiglia", kits: ["aromatouchdiff", "aromatrain", "essetouch", "family", "home", "esse", "together", "natural", "naturalveg"] },
      { text: "Bambini", kits: ["kids", "kids", "kids", "kids", "kids", "kids", "kids", "kids", "kids", "kids"] },
      { text: "Sportivi", kits: ["athlete"] }
    ]
  },
  {
    id: "goal",
    type: "points",
    question: "Cosa ti interessa di più?",
    answers: [
      { text: "Energia e vitalità", kits: ["athlete","llv","llvveg","natural","naturalveg","together"] },
      { text: "Relax", kits: ["aromatouchdiff","aromatouchtrain", "essetouch", ""] },
      { text: "Equilibrio del sonno", kits: ["llv", "llvveg", "aromatouchdiff", "aromatrain"]},
      { text: "Supporto alle difese immunitarie", kits: ["season","home","family","natural","naturalveg","together"] },
      { text: "Equilibrio emotivo", kits: ["mood","yoga"] },
      { text: "Equilibrio interno del corpo", kits: ["llv","llvveg","restore","restoreveg","tummy"]}
    ]
  },
  {
    id: "focus",
    type: "points",
    question: "Quanto vuoi spaziare negli utilizzi?",
    answers: [
      { text: "Solo Aromaterapia", kits: ["aromatouchdiff","home","together","natural","naturalveg"] },
      { text: "Solo uso topico e massaggi", kits: ["aromatouchdiff","aromatrain","essetouch"] },
      { text: "Preferisco assumere Oli e Integratori per via interna", kits: ["together","natural","naturalveg", "season","tummy","women","llv","llvveg","restore","restoreveg"] },
      { text: "Userò gli Oli in tutti i modi", kits: ["aromatouchdiff","aromatrain","essetouch","family","home","mood","yoga","esse","kids","athlete","together","natural","naturalveg", "season"] }
    ]
  },
  {
    id: "semplicity",
    type: "points",
    question: "Che livello di completezza cerchi?",
    answers: [
      { text: "Solo Oli Essenziali/Integratori di base", kits: ["kids","family","llv","llvveg"] },
      { text: "Un kit equilibrato per cominciare bene", kits: ["home","esse","aromatouchdiff","aromatrain","essetouch","restore","restoreveg"] },
      { text: "L'importante è che sia incluso il diffusore", kits: ["aromatouchdiff","home","together","natural","naturalveg"] },
      { text: "Soluzione completa premium", kits: ["together","natural","naturalveg"] }
    ]
  },
];
