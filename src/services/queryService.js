const mockDB = require("../utils/mockDatabase");

const processQuery = (query) => {
    if (query.toLowerCase().includes("total sales")) {
        return { sql: "SELECT SUM(total) FROM orders", result: 100 };
    }
    return { sql: "UNKNOWN QUERY", result: null };
};

const explainQuery = (query) => {
    return { explanation: "Breaks query into intent, filters, and conditions." };
};

const validateQuery = (query) => {
    return query.toLowerCase().includes("total sales") ? { valid: true } : { valid: false };
};

module.exports = { processQuery, explainQuery, validateQuery };
