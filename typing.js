const typingEl = document.querySelector("#typing");

// Array med fraser och färger
const phrases = [
  { text: "Välkommen till min portfolio!", color: "rgba(255, 255, 255, 1)" },
  { text: "Jag heter Sofia!", color: "rgba(109, 200, 223, 1)" },
  { text: "Min specialitet är webbsidor", color: "rgba(114, 235, 205, 1)" },
  { text: "HTML, CSS & JavaScript är mina verktyg", color: "rgba(246, 163, 218, 1)" }
];

// HOF: skapa array med bara texten (map)
const texts = phrases.map(phrase => phrase.text);

// HOF: skapa array med bara färger (map)
const phraseColors = phrases.map(phrase => phrase.color);

let phraseIndex = 0; // Index för aktuell fras
let charIndex = 0; // Index för aktuell karaktär

// Funktion för att skriva text
const type = () => { // Arrow function
  const currentText = texts[phraseIndex]; // Hämta aktuell fras
  typingEl.textContent = currentText.slice(0, charIndex + 1);
  typingEl.style.color = phraseColors[phraseIndex]; // sätt färg från HOF-array
  charIndex++; // Gå till nästa karaktär

  if(charIndex === currentText.length){ // Om hela frasen är skriven
    setTimeout(() => erase(), 1500); // Vänta 1.5 sekunder innan radering
  } else {
    setTimeout(type, 150); // Fortsätt skriva nästa karaktär efter 150ms
  }
};

// Funktion för att radera text
const erase = () => {
  const currentText = texts[phraseIndex];
  typingEl.textContent = currentText.slice(0, charIndex - 1);
  charIndex--;

  if(charIndex === 0){ // Om hela frasen är raderad
    phraseIndex = (phraseIndex + 1) % texts.length; // loopar fraser
    setTimeout(type, 500);
  } else {
    setTimeout(erase, 100);
  }
};

// Starta effekten
type();
