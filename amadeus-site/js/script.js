// Seleziono bottone e menu
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

// Aggiungo evento di click
navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  navToggle.classList.toggle("active");
});
