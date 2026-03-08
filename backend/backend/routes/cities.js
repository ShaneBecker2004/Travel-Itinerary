const express = require("express");
const router = express.Router();

const cityModel = require("../backend/models/cityModel");

router.get("/cities", (req, res) => {
    try {
        const cities = cityModel.getCities();
        res.json(cities);
    } catch (error) {
        res.status(500).json({error:"Unable to retrieve cities"});
    }
});

module.exports = router;