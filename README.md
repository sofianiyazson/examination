# 🌟 Mitt Portfolio

> En modern och responsiv portfolio byggd med HTML, CSS och JavaScript.

🔗 **Live Demo:** [https://sofiassportfolio.netlify.app/](https://sofiassportfolio.netlify.app/)

---

## 💡 Om projektet
Detta är mitt personliga portfolio där jag visar upp mina webbprojekt, designidéer och kontaktinformation.  
Målet var att skapa en **ren och professionell design** som fungerar bra på både mobil och desktop.

---

## 🧰 Tekniker som använts
- HTML5  
- CSS3 (Flexbox, Grid, Animationer)  
- JavaScript (interaktivitet och menyhantering)  
- Git & GitHub  

---

## 📱 Responsiv design
Portfolion är helt responsiv och anpassad för:

- 📱 **Mobil** (375 px (Devtools iPhone SE)
- 💻 **Surfplatta** (768 px (DevTools iPad Mini)
- 🖥️ **Desktop** (1024 px (Devtools iPad Pro)

---

## 🧠 Källor och verktyg 


-  
- https://youtu.be/3uKdQx-SZ5A?si=yQKn7Segt9cfiF_m - Sten Sax Påse spelet som är med i index.html
- https://cssgradient.io/ - styling av olika element
- https://html-css-js.com/css/generator/text-shadow/ - styla texter snyggt

---

## 🧰 Tekniker som använts

### 🧱 HTML
- Använt för att skapa en tydlig **semantisk struktur** med element som `<header>`, `<main>`, `<nav>`, `<section>` och `<footer>`.
- Fokus på **tillgänglighet** och korrekt hierarki för rubriker.
- Speficierat **alt-texter**.


### 🎨 CSS
- Ansvarar för **layout, färg och typografi**.
- Använder **Flexbox** och **CSS Grid** för att bygga en responsiv design som fungerar på både mobil, surfplatta och desktop.
- Inkluderar **hovereffekter** för att ge en mer dynamisk upplevelse.

## 🧭 Flexbox och gridspecifikationer

### 📄 index.html

| Typ | Antal | Var | Kolumner | Layout-beskrivning |
|------|--------|------|-----------|--------------------|
| **Flex** | 2 | Navbar + Languages | – | Horisontell justering och centrering |
| **Grid** | 4 | Showcase, Stats, Cloud, Footer | 2–3 | Delar upp sidan i sektioner med kolumner |
| **Totalt grid** | 4 | – | – | Grid används för huvudlayouten |

---

### 📘 experience.html

| Typ | Antal | Var | Kolumner | Layout-beskrivning |
|------|--------|------|-----------|--------------------|
| **Flex** | 1 | Navbar | – | Radlayout mellan logga & navigation |
| **Grid** | 3 | Head, Main, Footer | 2–3 | Delar sidan i sektioner med kolumner |
| **Totalt grid** | 3 | – | – | Enkel 2–3-kolumnslayout |




# ⚡ JavaScript

## 🎮 game.js – Sten, Sax, Påse-spelet
Ett interaktivt minispel där användaren kan välja mellan 🪨 sten, 📄 papper eller ✂️ sax.

När användaren klickar på ett val:  
- En JavaScript-funktion (`playGame`) körs.  
- Datorn väljer slumpmässigt ett alternativ med hjälp av `Math.random()`.  
- Resultatet (vinst, förlust eller oavgjort) visas direkt i webbläsaren genom att uppdatera DOM-element via `textContent`.  
- En HOF-funktion (`forEach`) används för att logga valen i konsolen.  

💡 **Syfte:** Träna användarinteraktion, villkorssatser (`if`, `switch`) och DOM-manipulation.

---
| **Kategori**       | **Krav**                       | **Hur det uppfylls i `game.js`**                       |
| ----------------- | ------------------------------ | ------------------------------------------------------ |
| Interaktivitet    | Funktion som körs vid klick     | `playGame(playerChoice)` kör spelet och uppdaterar DOM |
| ES6-syntax        | `const` / `let`                | `choices`, `playerDisplay`, `computerDisplay` → `const`; `result` → `let` |
|                   | Arrow function                 | `choices.forEach(choice => console.log(choice))`       |
| DOM-manipulation  | Hämta & uppdatera element      | `getElementById()` + `textContent`                    |
| Villkor & logik   | `if/else` och `switch`         | Kontrollerar oavgjort och vem som vinner              |
|                   | Operatorer                     | `===` för jämförelse, ternary `? :` för vinnare       |
| Loopar            | Loop genom array               | `forEach` går igenom alla val i `choices`            |


## 🌗 dark.js – Mörkt och ljust läge (Dark Mode)
- Hanterar växling mellan mörkt och ljust tema för hela sidan.  
- En knapp (`toggle`) med `addEventListener("click", ...)` lyssnar efter klick.  
- När man klickar, växlas en CSS-klass (`dark-mode`) på `<body>` för att ändra färger.  
- Användarens val sparas i `localStorage`, så att temat kommer ihåg vilket läge man valt även efter att man stängt webbläsaren.  

💡 **Syfte:** Skapa personlig och modern användarupplevelse med `classList.toggle()` och `localStorage`.

---

## ✍️ typing.js – Skrivmaskinseffekt i headern
- Skapar en typing-animation i rubriken där olika fraser skrivs ut bokstav för bokstav.  
- En array med fraser används.  
- En loop och `setTimeout()` gör att varje bokstav skrivs ut i sekvens, vilket ger illusionen av att texten “skrivs ut”.  
- En HOF-funktion (`map`) används för att bearbeta fraserna innan de visas (t.ex. för att slumpa ordning eller formatera text).  

💡 **Syfte:** Göra startsidan mer levande och visa upp JavaScript-kunskap med loopar, tidsstyrning och DOM-uppdatering.



---

## 🚧 Utmaningar & lösningar

### 🧩 Utmaning:
- Att få **layouten att fungera på alla skärmstorlekar** (mobil, surfplatta, desktop) och samtidigt behålla en snygg design.
- Att implementera **interaktiva funktioner Javscript** utan att CSS kraschade.
- Implementerade **darkmode.js** men hela CSS passade inte alls in 

**💡 Lösning:**

- Jag använde **media queries** tillsammans med **flex och grid** för att justera elementens storlek och position beroende på skärmens bredd.
- Försökte lägga in darkmode i navbaren men sidan bröts. Löste det genom att lägga in den som `<li>` och som `<button>`. Trodde man inte kunde göra det. Sedan fick jag lägga in class=**darkmode** och anpassa ta bort margin och padding så att navbaren inte kraschade. 

- Vissa av JS funktionerna "Kontaktformulär med validering" spenderade jag flera dagar på, även om det inte funkade som jag ville. Skrotade det och började om från början med en annan interaktivitet. 

- Löste **darkmode** problemet med att **.body.darkmode** classen fick hoppa in och rädda all CSS. 

---


## 🚀 Installation
Om du vill köra projektet lokalt:

```bash
# Klona repot
git clone https://github.com/sofianiyazson/examination

# Öppna mappen
cd portfolio

# Öppna i webbläsaren
open index.html