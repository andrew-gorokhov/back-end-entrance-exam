const cacheService = require("../services/cacheInstance");

const clearCache = (req, res) => {
  cacheService.clear();
  return res.status(200).json({ message: "Кэш очищен" });
};

const setCacheSize = (req, res) => {
  const { size } = req.body;
  cacheService.setSize(size);
  return res.status(200).json({ message: "Размер кэша изменен" });
};

const getCacheSize = (req, res) => {
  return res.status(200).json({ size: cacheService.getSize() });
};

const getCacheCount = (req, res) => {
  return res.status(200).json({ count: cacheService.getCount() });
};

const getAllCache = (req, res) => {
  return res.status(200).json({ entries: cacheService.getAll() });
};

const updateCacheEntry = async (req, res) => {
  const { key } = req.body;
  await cacheService.update(key.toLowerCase());
  return res.status(200).json({ message: `Кэш города ${key} обновлен` });
};

const updateAllCache = async (req, res) => {
  await cacheService.updateAll();
  return res.status(200).json({ message: "Кэш обновлен" });
};

module.exports = {
  clearCache,
  setCacheSize,
  getCacheSize,
  getCacheCount,
  getAllCache,
  updateCacheEntry,
  updateAllCache,
};
