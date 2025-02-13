function toggleMenu() {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("open");
}

/* slider carte */

const cards = [
    {
        name: "SHALLOT CURSED",
        image: "images/shallot.jpg",
        price: 695,
        lastSale: 1086
    },
    {
        name: "MAJIN BUU & MR. SATAN",
        image: "images/buu.jpg",
        price: 450,
        lastSale: 900
    },
    {
        name: "TRUNKS SUPER SAIYAN",
        image: "images/trunks.jpg",
        price: 520,
        lastSale: 780
    }
];

let currentIndex = 0;

const cardImage = document.getElementById("cardImage");
const cardName = document.getElementById("cardName");
const cardPrice = document.getElementById("cardPrice");
const lastSale = document.getElementById("lastSale");

document.getElementById("prevCard").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCard();
});

document.getElementById("nextCard").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCard();
});

document.getElementById("buy").addEventListener("click", () => {
    alert(`Vous avez acheté ${cards[currentIndex].name} pour ${cards[currentIndex].price}$ !`);
});

document.getElementById("sell").addEventListener("click", () => {
    alert(`Vous avez vendu ${cards[currentIndex].name} pour ${cards[currentIndex].lastSale}$ !`);
});

function updateCard() {
    cardImage.src = cards[currentIndex].image;
    cardName.textContent = cards[currentIndex].name;
    cardPrice.textContent = cards[currentIndex].price + "$";
    lastSale.textContent = cards[currentIndex].lastSale + "$";
}

updateCard(); // Initialisation
