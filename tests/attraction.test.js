const { getAttractions } = require("../backend/models/attractionModel");

test("should return attractions list", () => {
    const attractions = getAttractions();

    expect(attractions.length).toBeGreaterThan(0);
});

test("should contain restaurants", () => {
    const attractions = getAttractions();

    const restaurants = attractions.filter(a => a.category === "Restaurant");

    expect(restaurants.length).toBeGreaterThan(0);
});