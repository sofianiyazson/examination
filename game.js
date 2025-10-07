

const choices = ["sten", "påse", "sax"]; // Array med valmöjligheter

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)]; // Datorns val
    let result = "";

    if (playerChoice === computerChoice) {
        result = "Oavgjort!";
    } else {
        switch (playerChoice) {
            case "sten":
                result = (computerChoice === "sax") ? "Du vann!" : "Datorn vann!";
                break;
            case "påse":
                result = (computerChoice === "sten") ? "Du vann!" : "Datorn vann!";
                break;
            case "sax":
                result = (computerChoice === "påse") ? "Du vann!" : "Datorn vann!";
                break;
        }
    }

    // Uppdatera visningen
    playerDisplay.textContent = `Du valde: ${playerChoice}`; // Använd backticks för template literals
    computerDisplay.textContent = `Datorn valde: ${computerChoice}`;
    resultDisplay.textContent = result;
}