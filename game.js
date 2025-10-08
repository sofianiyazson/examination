

const choices = ["🪨", "📄", "✂️"]; // Array med valmöjligheter

// Hämta element från DOM
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice) { // Funktion som körs när spelaren gör ett val
    const computerChoice = choices[Math.floor(Math.random() * 3)]; // Datorns val (0, 1 eller 2)
    let result = "";

    if (playerChoice === computerChoice) {
        result = "Oavgjort 😭";
    } else {
        switch (playerChoice) { // Switch-sats för att avgöra vinnaren
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