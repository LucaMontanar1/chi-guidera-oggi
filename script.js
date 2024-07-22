document.addEventListener('DOMContentLoaded', () => {
    const wheel = document.getElementById('wheel');
    const result = document.getElementById('result');
    const spinButton = document.getElementById('spin-button');
    const confetti = document.getElementById('confetti');

    // Definisci i nomi delle opzioni
    const options = ['Luchino', 'Soraya', 'Luchino', 'Soraya']; // 4 opzioni

    const sectors = options.length; // Numero di sezioni nella ruota
    const sectorDegree = 360 / sectors;

    let rotation = 0;

    spinButton.addEventListener('click', () => {
        // Calcola una rotazione casuale
        const randomDegree = Math.floor(Math.random() * 360);
        rotation += randomDegree + 3600; // Aggiungi più rotazioni per renderlo più visibile

        wheel.style.transition = 'transform 4s ease-out';
        wheel.style.transform = `rotate(${rotation}deg)`;

        // Mostra l'effetto coriandoli
        confetti.style.display = 'block';
        createConfetti();

        setTimeout(() => {
            const actualDegree = rotation % 360;
            const selectedSector = Math.floor((actualDegree % 360) / sectorDegree); // Corretto per selezionare il settore giusto
            result.textContent = `Selezionato: ${options[selectedSector]}`;
            
            // Nascondi l'effetto coriandoli
            confetti.style.display = 'none';
        }, 4000); // Questo tempo deve corrispondere alla durata della transizione
    });

    function createConfetti() {
        const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99'];
        for (let i = 0; i < 100; i++) {
            const confetto = document.createElement('div');
            confetto.classList.add('confetto');
            confetto.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetto.style.width = `${Math.random() * 10 + 5}px`;
            confetto.style.height = confetto.style.width;
            confetto.style.left = `${Math.random() * 100}%`;
            confetto.style.top = `${Math.random() * 100}%`;
            confetto.style.transform = `translate(-50%, -50%)`;
            confetto.style.opacity = Math.random();
            confetti.appendChild(confetto);

            // Aggiungi animazione per i coriandoli
            setTimeout(() => {
                confetto.style.transform = `translate(-50%, -50%) scale(1.5)`;
                confetto.style.opacity = 0;
                setTimeout(() => confetto.remove(), 1000);
            }, Math.random() * 2000);
        }
    }
});
