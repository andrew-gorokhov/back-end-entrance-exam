const axios = require("axios");
const WEATHER_URL = process.env.WEATHER_URL;

class CacheService {
  constructor(size) {
    this.cache = new Map();
    this.size = size;
  }

  get(key) {
    return this.cache.get(key);
  }

  set(key, value) {
    if (this.cache.size >= this.size) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }

  has(key) {
    return this.cache.has(key);
  }

  clear() {
    this.cache.clear();
  }

  setSize(newSize) {
    this.size = newSize;
    while (this.cache.size > newSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
  }

  getSize() {
    return this.size;
  }

  getCount() {
    return this.cache.size;
  }

  getAll() {
    return Array.from(this.cache.entries());
  }

  async update(key) {
    try {
      const response = await axios.get(`${WEATHER_URL}${key}`);
      const fulldata = response.data;
      const data = {
        temperature: fulldata.temperature,
        wind: fulldata.wind,
        description: fulldata.description,
      };
      this.cache.set(key, data);
    } catch (error) {
      console.error("Ошибка обновления записи города:", error);
    }
  }

  async updateAll() {
    const entries = Array.from(this.cache.keys());
    const updateEntries = entries.map(async (key) => {
      try {
        const response = await axios.get(`${WEATHER_URL}${key}`);
        const fulldata = response.data;
        const data = {
          temperature: fulldata.temperature,
          wind: fulldata.wind,
          description: fulldata.description,
        };
        this.cache.set(key, data);
      } catch (error) {
        console.error(`Ошибка обновления записи города: ${key}`, error);
      }
    });
    await Promise.all(updateEntries);
  }
}

module.exports = CacheService;
