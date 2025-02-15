// Initialiser Swiper
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});

// Tableau contenant les descriptions personnalisées
const descriptions = {
  "Gogeta.jpg": "Gogeta Blue, la fusion ultime de Goku et Vegeta.",
  "Gohan Super Saiyan Dragon Ball Legends.jpg": "Gohan Super Saiyan, l'un des guerriers les plus puissants.",
  "trunks.jpg": "Trunks Ikari, enragé après la perte de son maître.",
  "Legends Limited Goku Ultra Instinct Mastered Dragon Ball Legends.jpg": "Goku Ultra Instinct, l'état de combat ultime.",
  "cell.jpg": "Cell Parfait, le monstre biologique créé par le Dr. Gero.",
  "orange piccolo.jpg": "Orange Piccolo, la nouvelle transformation de Piccolo.",
  "Legends Limited Goku (Youth) Dragon Ball Legends.jpg": "Goku enfant, lors de ses aventures initiales.",
  "gillot.jpg": "Gillot, un personnage mystérieux avec un grand potentiel.",
  "téléchargement (1).jpg": "Gohan Beast, réveillant sa puissance cachée.",
  "ulti gohan.jpg": "Gohan Ultime, la pleine puissance de Gohan sans transformation."
};

// Sélectionner toutes les slides
document.querySelectorAll(".swiper-slide img").forEach((img) => {
  img.addEventListener("click", function () {
    afficherCarteDetails(this);
  });
});

// Fonction pour afficher les détails de la carte
function afficherCarteDetails(image) {
  // Vérifie si le conteneur existe déjà
  if (document.querySelector(".card-details")) return;

  // Créer la div du menu détaillé
  let detailsContainer = document.createElement("div");
  detailsContainer.classList.add("card-details");

  // Ajouter l'image de la carte cliquée
  let cardImage = document.createElement("img");
  cardImage.src = image.src;
  cardImage.classList.add("card-image");

  // Extraire uniquement le nom du fichier sans le chemin complet
  let imageName = image.src.split('/').pop().split('?')[0]; // Gère les URL avec paramètres

  // Récupérer la description correspondante ou afficher un message par défaut
  let description = descriptions[imageName] || "Description non disponible";

  // Ajouter le texte descriptif
  let cardText = document.createElement("div");
  cardText.classList.add("card-text");
  cardText.innerHTML = `
    <h2>${image.alt}</h2>
    <p>${description}</p>
  `;

  // Ajouter une croix pour fermer
  let closeButton = document.createElement("span");
  closeButton.innerHTML = "&#10006;";
  closeButton.classList.add("close-btn");
  closeButton.addEventListener("click", function () {
    detailsContainer.remove();
  });

  // Ajouter les éléments au conteneur
  detailsContainer.appendChild(closeButton);
  detailsContainer.appendChild(cardImage);
  detailsContainer.appendChild(cardText);

  // Ajouter à la page
  document.body.appendChild(detailsContainer);
}