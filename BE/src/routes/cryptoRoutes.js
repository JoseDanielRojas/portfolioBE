const express = require("express");
const { getTopCryptos, getCryptoDetails } = require("../controllers/cryptoController");
const router = express.Router();

router.get("/top", getTopCryptos);
router.get("/:id", getCryptoDetails);

module.exports = router;
