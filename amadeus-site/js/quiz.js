// --- SEZIONE QUIZ ---
// ==============================
// script.js - Quiz Kit Selector
// ==============================

// ==============================
// Riferimenti DOM
// ==============================
const startBtn = document.getElementById('start-btn');
const quizContainer = document.getElementById('quiz-container');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const backBtn = document.getElementById('back-btn');
const nextBtn = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');

// ==============================
// Variabili di stato
// ==============================
let currentQuestionIndex = 0; // indice domanda attuale
let selectedAnswers = [];     // traccia risposte selezionate
let remainingKits = [...kits]; // copia di tutti i kit per i filtri
let kitScores = {};           // punteggi kit per le domande a punti

// Inizializza punteggi a zero
kits.forEach(kit => {
  kitScores[kit.id] = 0;
});

// ==============================
// Funzione per mostrare una domanda
// ==============================
function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionText.textContent = question.question;

  // Pulisce le opzioni precedenti
  optionsContainer.innerHTML = '';

  // Disabilita Avanti finché non si seleziona risposta
  nextBtn.disabled = true;

  // Mostra o nasconde Indietro
  backBtn.disabled = currentQuestionIndex === 0;

  // Crea radio button per ogni risposta
  question.answers.forEach((option, index) => {
    const label = document.createElement('label');
    label.style.display = 'block';
    label.style.margin = '5px 0';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'quiz-option';
    input.value = index;

    // Se c'è già una risposta selezionata, la mostra
    if (selectedAnswers[currentQuestionIndex] === index) {
      input.checked = true;
      nextBtn.disabled = false;
    }

    // Quando l'utente seleziona una risposta
    input.addEventListener('change', () => {
      nextBtn.disabled = false;
    });

    label.appendChild(input);
    label.appendChild(document.createTextNode(' ' + option.text));
    optionsContainer.appendChild(label);
  });

  console.log(`Domanda #${currentQuestionIndex + 1}: "${question.question}" mostrata`);
}

// ==============================
// Funzione per processare la risposta selezionata
// ==============================
function processAnswer() {
  const question = questions[currentQuestionIndex];
  const selectedIndex = parseInt(document.querySelector('input[name="quiz-option"]:checked').value);
  const selectedOption = question.answers[selectedIndex];

  // Salva la risposta selezionata
  selectedAnswers[currentQuestionIndex] = selectedIndex;

  if (question.type === 'filter') {
    // Filtra i kit in base alla funzione definita
    remainingKits = remainingKits.filter(selectedOption.filter);
    console.log('Kit rimanenti dopo filtro:', remainingKits.map(k => k.name));
  } else if (question.type === 'points') {
    // Assegna punti ai kit selezionati
    selectedOption.kits.forEach(kitId => {
      if (kitScores[kitId] !== undefined) {
        kitScores[kitId] += 1;
      }
    });
    console.log('Punteggi aggiornati:', kitScores);
  }
}

// ==============================
// Funzione per mostrare i risultati
// ==============================
function showResults() {
  quizContainer.style.display = 'none';
  resultContainer.style.display = 'block';
  resultContainer.innerHTML = '';

  let finalKits = [];

  if (remainingKits.length === 0) {
    resultContainer.innerHTML = '<p>Nessun kit corrisponde ai filtri selezionati.</p>';
    return;
  }

  // Trova punteggio massimo
  let maxScore = Math.max(...remainingKits.map(k => kitScores[k.id]));
  finalKits = remainingKits.filter(k => kitScores[k.id] === maxScore);

  console.log('Kit finali:', finalKits.map(k => k.name));

  finalKits.forEach(kit => {
    const kitDiv = document.createElement('div');
    kitDiv.style.marginBottom = '15px';
    kitDiv.innerHTML = `
      <h3>${kit.name}</h3>
      <p>Prezzo: €${kit.price}</p>
      <p>Tipologia: ${kit.type.join(', ')}</p>
      <p>Altri dettagli del kit in futuro...</p>
    `;
    resultContainer.appendChild(kitDiv);
  });
}

// ==============================
// Event listener pulsante Start
// ==============================
startBtn.addEventListener('click', () => {
  startBtn.style.display = 'none';
  quizContainer.style.display = 'block';
  showQuestion();
});

// ==============================
// Event listener pulsante Next
// ==============================
nextBtn.addEventListener('click', () => {
  processAnswer();

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    showResults();
  }
});

// ==============================
// Event listener pulsante Back
// ==============================
backBtn.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
});

// ==============================
// Debug iniziale
// ==============================
console.log('Quiz pronto! Numero totale domande:', questions.length);
console.log('Kit disponibili iniziali:', remainingKits.map(k => k.name));
