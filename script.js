// Secret Fact:

const secretFact = document.getElementById('secret-fact');

secretFact.addEventListener('click', () => {
    secretFact.innerHTML === "Click here for a secret fact..." ? secretFact.innerHTML = "✔️ I love classical music!  Click me to hide me again!" : secretFact.innerHTML = "Click here for a secret fact...";

    secretFact.style.fontWeight === '400' ? secretFact.style.fontWeight = '700' : secretFact.style.fontWeight = '400';
    secretFact.style.color === 'black' ? secretFact.style.color = 'crimson' : secretFact.style.color = 'black';
})

// Date for footer

let date = new Date();
let year = date.getFullYear();

const dateText = document.getElementById('current-date');
dateText.innerHTML = year;