// Declaring variables
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    // Listens for clicks on each card
    card.addEventListener("click", () => {
        removeActiveClasses()
        card.classList.add("card__active")
    })
})

function removeActiveClasses() {
  cards.forEach((card) => {
    card.classList.remove("card__active");
  });
}



