

const choices = ["🪨", "📄", "✂️"]; // Array med valmöjligheter

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)]; // Datorns val (0, 1 eller 2)
    let result = "";

    if (playerChoice === computerChoice) {
        result = "Oavgjort 😭";
    } else {
        switch (playerChoice) {
            case "🪨":
                result = (computerChoice === "✂️") ? "Du vann 🎉" : "Datorn vann 🥲";
                break;
            case "📄":
                result = (computerChoice === "🪨") ? "Du vann 👏" : "Datorn vann 🫠";
                break;
            case "✂️":
                result = (computerChoice === "📄") ? "Du vann 🥳" : "Datorn vann🥲";
                break;
        }
    }

    // Uppdatera visningen
    playerDisplay.textContent = `Du valde: ${playerChoice}`; // Använd backticks för template literals
    computerDisplay.textContent = `Datorn valde: ${computerChoice}`;
    resultDisplay.textContent = result;
}