document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    let currentIndex = 0;

    function updateCards() {
        cards.forEach((card, index) => {
            card.classList.remove("active");
            if (index === currentIndex) {
                card.classList.add("active");
            }
        });
    }

    nextBtn.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCards();
    });

    prevBtn.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCards();
    });

    updateCards();
});
