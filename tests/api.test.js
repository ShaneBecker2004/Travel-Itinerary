const request = require("supertest");
const app = require("../backend/server");

test("GET /api/attractions returns attractions", async () => {
    const response = await request(app).get("/api/attractions");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
});

test("invalid endpoint returns 404", async () => {
    const response = await request(app).get("/api/invalid");

    expect(response.statusCode).toBe(404);
});