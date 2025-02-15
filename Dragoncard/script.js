function toggleMenu() {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("open");
}

/* slider carte */

const cards = [
    { name: "SHALLOT CURSED", image: "images/shallot.jpg", price: 695, lastSale: 1086 },
    { name: "MAJIN BUU & MR. SATAN", image: "images/buu.jpg", price: 450, lastSale: 900 },
    { name: "TRUNKS SUPER SAIYAN", image: "images/trunks.jpg", price: 520, lastSale: 780 }
];

let currentIndex = 0;

// Ca va prendre les éléments HTML des cartes
const currentCardImg = document.getElementById("currentCard");
const prevCardImg = document.getElementById("prevCardImage");
const nextCardImg = document.getElementById("nextCardImage");

// Ca va recupérer les boutons
document.getElementById("prevCard").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCard();
});

document.getElementById("nextCard").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCard();

});



function updateCard() {
    // Calcul des indices des cartes
    let prevIndex = (currentIndex - 1 + cards.length) % cards.length;
    let nextIndex = (currentIndex + 1) % cards.length;

    // Mise à jour des images
    currentCardImg.src = cards[currentIndex].image;
    prevCardImg.src = cards[prevIndex].image;
    nextCardImg.src = cards[nextIndex].image;

    // Mise à jour des informations
    document.getElementById("cardName").textContent = cards[currentIndex].name;
    document.getElementById("cardPrice").textContent = cards[currentIndex].price + "$";
    document.getElementById("lastSale").textContent = cards[currentIndex].lastSale + "$";

    
}
