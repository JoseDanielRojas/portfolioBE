const express = require("express");
const { getApod, getMarsPhotos } = require("../controllers/nasaController");
const router = express.Router();

router.get("/apod", getApod);
router.get("/mars", getMarsPhotos);

module.exports = router;
