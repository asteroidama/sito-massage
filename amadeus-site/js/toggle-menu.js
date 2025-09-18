console.log('🚀 Toggle menu con animazione vortex caricato');

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    let isMenuOpen = false;
    
    console.log('📱 Elementi DOM trovati:', { navToggle, navLinks });

    navToggle.addEventListener('click', function() {
        console.log(`🔄 Toggle cliccato - Stato precedente: ${isMenuOpen ? 'aperto' : 'chiuso'}`);
        
        // Rimuovi tutte le classi di animazione
        navToggle.classList.remove('active', 'reverse');
        
        // Forza il reflow per riavviare la transizione
        void navToggle.offsetWidth;
        
        if (!isMenuOpen) {
            // APERTURA: Animazione antioraria
            console.log('🌪️ Avvio animazione apertura (antioraria)');
            navToggle.classList.add('active');
            navLinks.classList.add('active');
            navToggle.setAttribute('aria-label', 'Chiudi menù');
            isMenuOpen = true;
        } else {
            // CHIUSURA: Animazione oraria
            console.log('🌪️ Avvio animazione chiusura (oraria)');
            navToggle.classList.add('reverse');
            navLinks.classList.remove('active');
            navToggle.setAttribute('aria-label', 'Apri menù');
            isMenuOpen = false;
        }
        
        console.log(`✅ Toggle completato - Nuovo stato: ${isMenuOpen ? 'aperto' : 'chiuso'}`);
    });

    // Chiusura automatica quando si clicca sui link
    const linkElements = navLinks.querySelectorAll('a');
    linkElements.forEach(function(link) {
        link.addEventListener('click', function() {
            console.log(`🔗 Link cliccato: ${this.textContent}`);
            
            if (isMenuOpen) {
                console.log('🌪️ Chiusura automatica menu dopo click su link');
                
                navToggle.classList.remove('active', 'reverse');
                void navToggle.offsetWidth;
                
                navToggle.classList.add('reverse');
                navLinks.classList.remove('active');
                navToggle.setAttribute('aria-label', 'Apri menù');
                isMenuOpen = false;
                
                console.log('✅ Menu chiuso automaticamente');
            }
        });
    });

    console.log('🎯 Toggle menu inizializzato correttamente');
});