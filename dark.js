// Hitta element i DOM:en
const toggleButton = document.querySelector("#theme-toggle");
const body = document.querySelector("body");

// Kolla om användaren har redan valt ett tema i localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleButton.textContent = "☀️";
}

// ES6 Arrow function för att växla tema
const toggleTheme = () => {
  body.classList.toggle("dark-mode"); // växla klass på body

  // Villkorssats: ändra knappens text beroende på läget
  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️";
    localStorage.setItem("theme", "dark"); // spara valet i localStorage
  } else {
    toggleButton.textContent = "🌘";
    localStorage.setItem("theme", "light"); // spara valet i localStorage
  }
};

// Lägg till eventlyssnare (interaktivitet)
toggleButton.addEventListener("click", toggleTheme);

// Exempel på array och HOF (forEach)
const colors = ["#121212", "#f4f4f4"]; 
colors.forEach(color => console.log("Tema-färg:", color));