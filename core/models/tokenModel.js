// core/models/tokenModel.js
class Token {
    constructor(name, marketCap, creator) {
        this.name = name;
        this.marketCap = marketCap;
        this.creator = creator;
    }

    save() {
        // Placeholder for saving token data to a database
        console.log(`Saving token: ${this.name}`);
    }
}

module.exports = Token;
