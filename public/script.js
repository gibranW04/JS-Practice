
const form = document.getElementById('guessForm');
const input = document.getElementById('guessInput');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const restartButton = document.getElementById('restartButton');
const guessButton = document.getElementById('guessButton');

async function newGame() {
    const response = await fetch('/api/new-game');
    const data = await response.json();

    message.textContent = data.message;
    attemptsDisplay.textContent = 0;

    input.value = '';
    input.disabled = false;
    guessButton.disabled = false;
    input.focus();
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const guess = Number(input.value);

    if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
        message.textContent = 'Masukkan angka 1 sampai 100!';
        return;
    }

    try {
        const response = await fetch('/api/guess', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ guess })
        });

        const data = await response.json();

        message.textContent = data.message;

        if (data.attempts !== undefined) {
            attemptsDisplay.textContent = data.attempts;
        }

        if (data.result === 'win') {
            message.textContent = '🎉 ' + data.message;
            input.disabled = true;
            guessButton.disabled = true;
        }

        input.value = '';

    } catch (error) {
        message.textContent = 'Terjadi kesalahan pada server!';
    }
});

restartButton.addEventListener('click', newGame);

newGame();
