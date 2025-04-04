const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const queryRoutes = require("./src/routes/queryRoutes");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", queryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
