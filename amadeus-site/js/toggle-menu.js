// toggle-menu.js
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (!toggleBtn || !navLinks) {
    console.warn("nav-toggle o toggle-links non trovati nell'HTML");
    return;
  }

  // Apri/chiudi menu
  toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active"); // attiva X
    navLinks.classList.toggle("open");    // mostra menu
  });

  // Chiudi menu quando clicchi un link
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      toggleBtn.classList.remove("active");
    });
  });
});
