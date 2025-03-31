const express = require("express");
const cors = require("cors");
require("dotenv").config();

const nasaRoutes = require("./routes/nasaRoutes");
const cryptoRoutes = require("./routes/cryptoRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/nasa", nasaRoutes);
app.use("/api/crypto", cryptoRoutes);

module.exports = app;
