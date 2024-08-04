const axios = require("axios");
const WEATHER_URL = process.env.WEATHER_URL;
const cacheService = require("../services/cacheInstance");

const getWeather = async (req, res) => {
  const { city } = req.params;
  const cacheKey = city.toLowerCase();

  if (cacheService.has(cacheKey)) {
    return res.status(200).json(cacheService.get(cacheKey));
  }

  try {
    const response = await axios.get(WEATHER_URL + cacheKey);
    const fulldata = response.data;
    const data = {
      temperature: fulldata.temperature,
      wind: fulldata.wind,
      description: fulldata.description,
    };
    cacheService.set(cacheKey, data);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Ошибка получения данных по API" });
  }
};

module.exports = { getWeather };
