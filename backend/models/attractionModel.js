const AttractionFactory = require("./attractionFactory");

function getAttractions() {
    return [
        AttractionFactory.createAttraction(
            "Fushimi Inari Shrine",
            "Famous shrine with thousands of red torii gates.",
            "Attraction",
            "Kyoto"
        ),
        AttractionFactory.createAttraction(
            "Shibuya Crossing",
            "One of the busiest pedestrian crossings in the world.",
            "Attraction",
            "Tokyo"
        ),
        AttractionFactory.createAttraction(
            "Ichiran Ramen",
            "Popular ramen restaurant known for tonkotsu broth.",
            "Restaurant",
            "Tokyo"
        ),
        AttractionFactory.createAttraction(
            "Dotonbori Street Food",
            "Famous Osaka street food district.",
            "Restaurant",
            "Osaka"
        ),
        AttractionFactory.createAttraction(
            "Sapporo Snow Festival",
            "Winter festival with giant snow sculptures.",
            "Attraction",
            "Hokkaido"
        ),
        AttractionFactory.createAttraction(
            "Yokohama Strawberry Festival",
            "Strawberry Festival with many food stalls of various strawberry dishes.",
            "Event",
            "Yokohama"
        )
    ];
}

module.exports = { getAttractions };