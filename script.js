// Secret Fact:

const secretFact = document.getElementById("secret-fact");

secretFact.addEventListener("click", () => {
  secretFact.innerHTML === "Click here for a secret fact..."
    ? (secretFact.innerHTML =
        "✔️ I love classical music!  Click me to hide me again!")
    : (secretFact.innerHTML = "Click here for a secret fact...");

  secretFact.style.fontWeight === "400"
    ? (secretFact.style.fontWeight = "700")
    : (secretFact.style.fontWeight = "400");
  secretFact.style.color === "black"
    ? (secretFact.style.color = "crimson")
    : (secretFact.style.color = "black");
});

// Date for footer

let date = new Date();
let year = date.getFullYear();

const dateText = document.getElementById("current-date");
dateText.innerHTML = year;

// Menu functionality

// Variable for menu icon

const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById('mobile-nav');

menuIcon.addEventListener("click", () => {
  menuIcon.innerHTML === 'menu' ? menuIcon.innerHTML = 'close' : menuIcon.innerHTML = 'menu';
  mobileMenu.style.display === 'flex' ? mobileMenu.style.display = 'none' : mobileMenu.style.display = 'flex';
});
