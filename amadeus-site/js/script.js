// Toggle menu mobile
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    navToggle.classList.toggle("active");
  });
}

// --- SEZIONE QUIZ ---
document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startQuizBtn");
  const quizContainer = document.getElementById("quizContainer");

  let currentQuestionIndex = 0;
  let scores = {};
  kits.forEach(kit => scores[kit] = 0);

  function showQuestion(index) {
    const q = (index < questions.length) ? questions[index] : tiebreaker;
    quizContainer.innerHTML = `
      <div class="quiz-question fade-in">
        <h3>${q.question}</h3>
        <form id="quizForm" class="quiz-form">
          ${q.answers.map((a, i) =>
            `<label class="quiz-option">
               <input type="radio" name="answer" value='${JSON.stringify(a.kits)}'>
               ${a.text}
             </label>`
          ).join("")}
        </form>
        <div class="quiz-controls">
          <button id="backBtn" class="btn-quiz">Indietro</button>
          <button id="nextBtn" class="btn-quiz">${index < questions.length - 1 ? "Avanti" : "Risultato"}</button>
        </div>
      </div>
    `;

    const backBtn = document.getElementById("backBtn");
    const nextBtn = document.getElementById("nextBtn");

    // Stato iniziale dei bottoni
    backBtn.disabled = (index === 0); 
    nextBtn.disabled = true; 

    // Attiva "Avanti" al click su una risposta
    document.querySelectorAll("input[name='answer']").forEach(input => {
      input.addEventListener("change", () => {
        nextBtn.disabled = false;
      });
    });

    // Funzione avanti
    nextBtn.addEventListener("click", (e) => {
      e.preventDefault(); // evita refresh form
      const selected = document.querySelector("input[name='answer']:checked");
      if (selected) {
        const kits = JSON.parse(selected.value);
        kits.forEach(kit => scores[kit]++);
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          showQuestion(currentQuestionIndex);
        } else {
          showResult();
        }
      }
    });

    // Funzione indietro
    backBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
      }
    });
  }

  // Funzione Risultato
  function showResult() {
    console.log("Punteggi finali:", scores); // stampa i punteggi
    const maxScore = Math.max(...Object.values(scores));
    let winners = Object.keys(scores).filter(kit => scores[kit] === maxScore);

    if (winners.length > 1) {
      showQuestion(questions.length); // spareggio
      return;
    }

    const bestKit = winners[0];
    quizContainer.innerHTML = `
      <div class="quiz-result fade-in">
        <h3>Il kit più adatto a te è:</h3>
        <p>${bestKit}</p>
        <!-- Qui in futuro: immagine, scheda tecnica, link -->
      </div>
    `;
  }

  // Avvio quiz al click del pulsante iniziale
  startBtn.addEventListener("click", () => {
    startBtn.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    showQuestion(currentQuestionIndex);
  });
});
