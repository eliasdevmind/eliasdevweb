document.addEventListener("DOMContentLoaded", function() {
    const words = ['Python', 'JS', 'Amor', 'HTML', 'PHP'];
    const binaryContainer = document.querySelector('.binary-container'); // Seleciona o contêiner de binários
    let binaryCount = 0; // Contador para controlar o número de elementos binários

    setInterval(generateBinary, 400); // Chama a função de geração a cada 400 milissegundos (0,4 segundos)

    function generateBinary() {
        // Verifica se o número de elementos binários é menor que o limite
        if (binaryCount < 35) { // Aumenta o limite para permitir um pouco mais de elementos
            // Seleciona uma palavra aleatória da lista
            const randomWord = words[Math.floor(Math.random() * words.length)];

            // Converte a palavra em binário
            const binaryWord = randomWord.split('').map(char => {
                return char.charCodeAt(0).toString(2).padStart(8, '0');
            }).join(' ');

            // Cria elementos binários apenas para os caracteres da palavra
            for (let i = 0; i < binaryWord.length && binaryCount < 35; i++) { // Ajusta o limite aqui também
                const binary = document.createElement('span');
                binary.classList.add('binary');
                binary.textContent = binaryWord[i];
                binary.style.left = `${Math.random() * 100}vw`; // Posição aleatória horizontal
                binary.style.top = `${Math.random() * 100}vh`; // Posição aleatória vertical
                binary.style.animationDuration = `${Math.random() * 5 + 2}s`; // Duração aleatória da animação
                binaryContainer.appendChild(binary);
                binaryCount++; // Incrementa o contador
                setTimeout(() => removeBinary(binary), 5000); // Remove após 5 segundos
            }
        }
    }

    // Função para remover elementos binários
    function removeBinary(binary) {
        binary.remove();
        binaryCount--; // Decrementa o contador
    }
});
