const { processQuery, explainQuery, validateQuery } = require("../services/queryService");

exports.handleQuery = (req, res) => {
    const { question } = req.body;
    if (!question) return res.status(400).json({ error: "Query required" });
    
    const response = processQuery(question);
    res.json(response);
};

exports.handleExplain = (req, res) => {
    const { question } = req.body;
    res.json(explainQuery(question));
};

exports.handleValidate = (req, res) => {
    const { question } = req.body;
    res.json(validateQuery(question));
};
