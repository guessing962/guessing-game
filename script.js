let randomNumber = Math.floor(Math.random() * 10) + 1;
let score = 0;

function checkGuess() {
    let userGuess = document.getElementById("guessInput").value;
    userGuess = Number(userGuess);

    if (userGuess === randomNumber) {
        score++;
        document.getElementById("message").innerText = "🎉 Correct!";
        document.getElementById("score").innerText = score;

        randomNumber = Math.floor(Math.random() * 10) + 1;
    } 
    else if (userGuess > randomNumber) {
        document.getElementById("message").innerText = "📉 Too high!";
    } 
    else {
        document.getElementById("message").innerText = "📈 Too low!";
    }

    document.getElementById("guessInput").value = "";
}