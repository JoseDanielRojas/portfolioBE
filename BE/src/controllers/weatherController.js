const axios = require("axios");

const getWeather = async (req, res) => {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
        return res.status(400).json({ error: "Latitude and longitude are required" });
    }

    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
        const response = await axios.get(url);

        const weatherData = response.data.current_weather;
        res.json({
            temperature: weatherData.temperature,
            windspeed: weatherData.windspeed,
            weathercode: weatherData.weathercode,
            time: weatherData.time
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
};

module.exports = { getWeather };
