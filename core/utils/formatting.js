// core/utils/formatting.js
const formatCurrency = (amount) => {
    return `$${Number(amount).toLocaleString()}`;
};

const capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

module.exports = {
    formatCurrency,
    capitalize
};
