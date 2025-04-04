const express = require("express");
const cors = require("cors");
require("dotenv").config();

const nasaRoutes = require("./routes/nasaRoutes");
const cryptoRoutes = require("./routes/cryptoRoutes");
const weatherRoutes = require("./routes/weatherRoutes");
const resumeRoutes = require("./routes/resumeRoutes");


const app = express();
const helmet = require("helmet");
const limiter = require("./middleware/routesMiddleware");

app.use(helmet()); //security headers to prevent XSS, clickjacking
app.use(limiter);//Prevents abuse of your endpoints
app.use(cors());
app.use(express.json());

// protected routes
app.use("/api/nasa", nasaRoutes);

// public routes
app.use("/api/crypto", cryptoRoutes);
app.use("/api/resume", resumeRoutes);

app.use("/api/weather", weatherRoutes);

module.exports = app;
