// scripts/seedData.js
const Token = require('../core/models/tokenModel');

const seedTokens = () => {
    const tokens = [
        new Token('Dogecoin', 500000000, 'Shibetoshi Nakamoto'),
        new Token('Shiba Inu', 250000000, 'Ryoshi'),
        new Token('Floki', 100000000, 'Vikings')
    ];

    tokens.forEach(token => token.save());
    console.log('Seeding complete.');
};

seedTokens();
