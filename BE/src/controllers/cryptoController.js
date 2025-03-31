const axios = require("axios");

const getTopCryptos = async (req, res) => {
  try {
    const { search } = req.query;
    const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 10,
        page: 1,
        sparkline: false,
      },
    });

    let data = response.data;
    if (search) {
      data = data.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo criptomonedas" });
  }
};

const getCryptoDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo detalles de la criptomoneda" });
  }
};

module.exports = { getTopCryptos, getCryptoDetails };
