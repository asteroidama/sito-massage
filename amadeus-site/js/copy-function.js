function copyPhoneNumber(event) {
    const phoneNumber = "3342474214";
    const button = event.currentTarget; // Salva il riferimento PRIMA
    const originalHTML = button.innerHTML;
    
    navigator.clipboard.writeText(phoneNumber).then(() => {
        button.innerHTML = '<span style="font-size: 18px;">✓</span>';
        
        setTimeout(() => {
            button.innerHTML = originalHTML;
        }, 2000);
    }).catch(err => {
        console.error('Errore nella copia:', err);
        alert('Impossibile copiare il numero');
    });
}

function copyEmailAddress(event) {
    const emailAddress = "amadmazza@gmail.com";
    const button = event.currentTarget; // Salva il riferimento PRIMA
    const originalHTML = button.innerHTML;
    
    navigator.clipboard.writeText(emailAddress).then(() => {
        button.innerHTML = '<span style="font-size: 18px;">✓</span>';
        
        setTimeout(() => {
            button.innerHTML = originalHTML;
        }, 2000);
    }).catch(err => {
        console.error('Errore nella copia:', err);
        alert('Impossibile copiare il numero');
    });
}