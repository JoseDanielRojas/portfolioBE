const axios = require("axios");

const getApod = async (req, res) => {
  try {
    // Check if NASA_API_KEY is available
    if (!process.env.NASA_API_KEY) {
      return res.status(500).json({ error: "API Key for NASA is missing" });
    }

    const { date } = req.query;
    const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}${date ? `&date=${date}` : ""}`;

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error obteniendo la imagen del día" });
  }
};

const getMarsPhotos = async (req, res) => {
  try {
    // Check if NASA_API_KEY is available
    if (!process.env.NASA_API_KEY) {
      return res.status(500).json({ error: "API Key for NASA is missing" });
    }

    const { sol = 1000, camera = "" } = req.query;
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camera}&api_key=${process.env.NASA_API_KEY}`;

    const response = await axios.get(url);
    res.json(response.data.photos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error obteniendo fotos de Marte" });
  }
};

module.exports = { getApod, getMarsPhotos };
