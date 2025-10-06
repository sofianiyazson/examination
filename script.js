// Hitta element i DOM:en
const toggleButton = document.querySelector("#theme-toggle");
const body = document.querySelector("body");

// ES6 Arrow function för att växla tema
const toggleTheme = () => {
  body.classList.toggle("dark-mode"); // växla klass på body

  // Villkorssats: ändra knappens text beroende på läget
  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "Byt till Light Mode";
  } else {
    toggleButton.textContent = "Byt till Dark Mode";
  }
};

// Lägg till eventlyssnare (interaktivitet)
toggleButton.addEventListener("click", toggleTheme);

// Exempel på array och HOF (forEach)
const colors = ["#121212", "#f4f4f4"];
colors.forEach(color => console.log("Tema-färg:", color));
