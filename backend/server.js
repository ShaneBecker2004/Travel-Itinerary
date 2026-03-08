// const cards = document.querySelectorAll(".card");

//   cards.forEach(card => {
//     card.addEventListener("click", () => {
//       const details = card.querySelector(".details");
//       details.classList.toggle("hidden");
//     });
//   });

// const skills = [
//   { title: 'Restaurant', category: 'Programming', price: 20 },
//   { title: 'Osaka', category: 'Music', price: 15 },
//   { title: 'Kyoto', category: 'Career', price: 0 },
//   { title: 'Yokohama', category: 'Programming', price: 25 }
// ];

const express = require("express");
const app = express();
const port = 3000;

const attractionsRoute = require("./routes/attractions");

app.use(express.json());
app.use("/api", attractionsRoute);

if (process.env.NODE_ENV !== "test") {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

module.exports = app;