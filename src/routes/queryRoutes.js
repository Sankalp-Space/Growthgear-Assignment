const express = require("express");
const { handleQuery, handleExplain, handleValidate } = require("../controllers/queryController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/query", authMiddleware, handleQuery);
router.post("/explain", authMiddleware, handleExplain);
router.post("/validate", authMiddleware, handleValidate);

module.exports = router;
