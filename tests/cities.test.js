const { getCities } = require("../backend/models/cityModel");

test("cities list should not be empty", () => {
    const cities = getCities();
    expect(cities.length).toBeGreaterThan(0);
});

test("cities should contain Tokyo", () => {
    const cities = getCities();
    const names = cities.map(city => city.name);

    expect(names).toContain("Tokyo");
});