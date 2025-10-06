document.addEventListener("DOMContentLoaded", () => {

// Hämta element från DOM
const form = document.querySelector("#contact-form");
const messageDiv = document.querySelector("#form-message");

// HOF-exempel: lista med fält som ska valideras
const fields = [
  { name: "name", type: "text", error: "Ange ditt namn" },
  { name: "nummer", type: "text", error: "Ange giltigt mobilnummer" },
  { name: "email", type: "email", error: "Ange giltig email" },
  { name: "message", type: "text", error: "Ange ett meddelande" }
];


// Arrow function för att validera ett fält
const validateField = field => {
  const input = form[field.name];
  let valid = true;

  // Enkel validering baserat på typ
  if (field.type === "text" && input.value.trim() === "") {
    valid = false;
  }
  if (field.type === "email" && !input.value.includes("@")) {
    valid = false;
  }
  if (field.name === "nummer" && !/^\d{7,15}$/.test(input.value.trim())) {
    valid = false;
  }

  return { field, valid };
};

// Event listener för formuläret
form.addEventListener("submit", e => {
  e.preventDefault(); // Stoppar sidan från att ladda om

  // HOF: forEach validerar alla fält
  const results = fields.map(validateField);

  // Töm tidigare meddelande
  messageDiv.innerHTML = "";

  // Kontrollera om alla fält är giltiga
  let allValid = true;
  results.forEach(result => {
    if (!result.valid) {
      allValid = false;
      // Visa felmeddelande
      const errorP = document.createElement("p");
      errorP.style.color = "red";
      errorP.textContent = result.field.error;
      messageDiv.appendChild(errorP);
      // Markera fältet visuellt
      form[result.field.name].classList.add("error");
    } else {
      form[result.field.name].classList.remove("error");
    }
  });

  // Om allt är korrekt
  if (allValid) {
    messageDiv.style.color = "green";
    messageDiv.textContent = "Tack! Ditt meddelande har skickats.";
    form.reset();
  }
});

});