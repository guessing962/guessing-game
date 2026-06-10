
    let input = Number(document.getElementById("guessInput").value);

    if (input === randomNumber) {
        score++;
        document.getElementById("winSound").play();

        showMessage("🎉 Correct!");

        generateNumber();
    } else {
        document.getElementById("wrongSound").play();
        shake();
        showMessage("❌ Wrong!");
    }

    document.getElementById("guessInput").value = "";

    document.getElementById("score").innerText = score;

    // 🏆 WIN
    if (score >= 10) {
        showMessage("🏆 YOU WIN PRO MAX!");
        endGame();
        return;
    }

    // 🔥 LEVEL UP
    if (score > 0 && score % 3 === 0) {let randomNumber;
let score = 0;
let level = 1;
let maxNumber = 10;
let gameOver = true;

function startGame() {
    score = 0;
    level = 1;
    maxNumber = 10;
    gameOver = false;

    document.getElementById("guessInput").disabled = false;
    document.getElementById("score").innerText = score;

    generateNumber();
    showMessage("🔥 Game Started! Guess 1–10");
}

function generateNumber() {
    randomNumber = Math.floor(Math.random() * maxNumber) + 1;
}

function checkGuess() {
    if (gameOver) return;

        level++;
        maxNumber += 10;
        generateNumber();
        showMessage("🔥 Level Up! Now 1–" + maxNumber);
    }
}

function showMessage(msg) {
    document.getElementById("message").innerText = msg;
}

function shake() {
    let box = document.querySelector(".game-box");
    box.classList.add("shake");
    setTimeout(() => box.classList.remove("shake"), 300);
}

function endGame() {
    gameOver = true;
    document.getElementById("guessInput").disabled = true;
}

function restartGame() {
    startGame();
}
