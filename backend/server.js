const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const details = card.querySelector(".details");
      details.classList.toggle("hidden");
    });
  });

const skills = [
  { title: 'Restaurant', category: 'Programming', price: 20 },
  { title: 'Osaka', category: 'Music', price: 15 },
  { title: 'Kyoto', category: 'Career', price: 0 },
  { title: 'Yokohama', category: 'Programming', price: 25 }
];