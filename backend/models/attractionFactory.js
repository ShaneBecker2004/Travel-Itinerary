class AttractionFactory {
    static createAttraction(name, description, category, location) {
        return {
            name,
            description,
            category,
            location
        };
    }
}

module.exports = AttractionFactory;