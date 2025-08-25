/* Reset semplice */
body, h1, h2, p, ul {
  margin: 0;
  padding: 0;
}
body {
  font-family: sans-serif;
  line-height: 1.6;
}

/* Titolo sopra la navbar */
.site-title {
  text-align: center;
  font-size: 2rem;
  padding: 15px;
  font-weight: bold;
}

/* Barra di navigazione */
.site-header {
  background-color: d9c4a8; /* beige/marroncino chiaro */
  position: sticky;
  top: 0;
  z-index: 1000;
}
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: auto;
  padding: 10px 20px;
}
.nav-links {
  display: flex;
  gap: 25px;
  list-style: none;
}
.nav-links a {
  text-decoration: none;
  color: 333;
  font-weight: 600;
  transition: color 0.3s ease;
}
.nav-links a:hover {
  color: 000;
}

/* Bottone toggle (hamburger) per mobile */
.nav-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: 333;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    background-color: d9c4a8;
    position: absolute;
    top: 60px;
    right: 0;
    width: 100%;
    padding: 20px;
  }
  .nav-links.open {
    display: flex;
  }
  .nav-toggle {
    display: block;
    margin-left: auto;
  }
}

/* Sezioni contenuto */
main section {
  padding: 80px 20px;
  max-width: 800px;
  margin: auto;
}
main section:nth-child(even) {
  background-color: f9f9f9;
}