document.addEventListener("DOMContentLoaded", function() {
    setInterval(generateBinary, 2000); // Call the function every 2 seconds

    function generateBinary() {
        const words = ['Python', 'JS', 'Amor', 'HTML', 'PHP'];
        const binaryContainer = document.querySelector('.binary-container');

        words.forEach(word => {
            const binaryWord = word.split('').map(char => {
                return char.charCodeAt(0).toString(2).padStart(8, '0');
            }).join(' ');

            for (let i = 0; i < binaryWord.length; i++) {
                const binary = document.createElement('span');
                binary.classList.add('binary');
                binary.textContent = binaryWord[i];
                binary.style.left = `${Math.random() * 100}vw`; // Randomize horizontal position
                binary.style.top = `${Math.random() * 100}vh`; // Randomize vertical position
                binary.style.animationDuration = `${Math.random() * 5 + 2}s`;
                binaryContainer.appendChild(binary);
                setTimeout(() => binary.classList.add('fade-out'), 3000); // Add class to fade out after 3 seconds
                setTimeout(() => binary.remove(), 5000); // Remove after 5 seconds
            }
        });
    }
});
