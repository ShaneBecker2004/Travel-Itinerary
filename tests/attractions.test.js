const { getAttractions } = require("../backend/models/attractionModel");

test("attractions list should not be empty", () => {
    const attractions = getAttractions();
    expect(attractions.length).toBeGreaterThan(0);
});

test("attractions should contain Tokyo", () => {
    const attractions = getAttractions();
    const restaurants = attractions.filter(a => a.category === "Restaurant");

    expect(restaurants.length).toBeGreaterThan(0);
});