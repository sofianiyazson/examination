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

let phraseIndex = 0;
let charIndex = 0;

// Funktion för att skriva text
const type = () => {
  const currentText = texts[phraseIndex];
  typingEl.textContent = currentText.slice(0, charIndex + 1);
  typingEl.style.color = phraseColors[phraseIndex]; // sätt färg från HOF-array
  charIndex++;

  if(charIndex === currentText.length){
    setTimeout(() => erase(), 1500);
  } else {
    setTimeout(type, 150);
  }
};

// Funktion för att radera text
const erase = () => {
  const currentText = texts[phraseIndex];
  typingEl.textContent = currentText.slice(0, charIndex - 1);
  charIndex--;

  if(charIndex === 0){
    phraseIndex = (phraseIndex + 1) % texts.length; // loopar fraser
    setTimeout(type, 500);
  } else {
    setTimeout(erase, 100);
  }
};

// Starta effekten
type();

// HOF: logga alla fraser + färger
phrases.forEach((p, i) => console.log(`Fras ${i+1}: ${p.text}, färg: ${p.color}`));
