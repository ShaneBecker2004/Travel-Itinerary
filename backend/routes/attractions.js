const express = require("express");
const router = express.Router();

const { getAttractions } = require("../models/attractionModel");

router.get("/attractions", (req, res) => {
    try {
        const attractions = getAttractions();

        if (!attractions || attractions.length === 0) {
            return res.status(404).json({ error: "No attractions found" });
        }

        res.json(attractions);

    } catch (error) {
        res.status(500).json({ error: "Server error retrieving attractions" });
    }
});

module.exports = router;