let randomNumber;
let score = 0;
let gameOver = true;

function startGame() {
    score = 0;
    gameOver = false;

    randomNumber = Math.floor(Math.random() * 10) + 1;

    document.getElementById("score").innerText = score;
    document.getElementById("guessInput").disabled = false;

    document.getElementById("message").innerText =
        "🔥 Game Started! Guess 1–10";
}

function checkGuess() {
    if (gameOver) return;

    let guess = Number(document.getElementById("guessInput").value);

    if (guess === randomNumber) {
        score++;
        document.getElementById("message").innerText = "🎉 Correct!";
        document.getElementById("score").innerText = score;

        randomNumber = Math.floor(Math.random() * 10) + 1;
    } else if (guess > randomNumber) {
        document.getElementById("message").innerText = "📉 Too high!";
    } else {
        document.getElementById("message").innerText = "📈 Too low!";
    }

    document.getElementById("guessInput").value = "";

    if (score >= 10) {
        document.getElementById("message").innerText = "🏆 YOU WIN!";
        gameOver = true;
        document.getElementById("guessInput").disabled = true;
    }
}

function restartGame() {
    startGame();
}
