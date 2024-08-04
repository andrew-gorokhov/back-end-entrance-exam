const express = require("express");
const router = express.Router();
const cacheController = require("../controllers/cacheController");

/**
 * @swagger
 * /api/cache/clear:
 *   post:
 *     summary: Очистка кэша
 *     tags:
 *       - Работа с кэшем
 *     responses:
 *       200:
 *         description: Кэш очищен
 */
router.post("/cache/clear", cacheController.clearCache);

/**
 * @swagger
 * /api/cache/size:
 *   post:
 *     summary: Установить размер кэша
 *     tags:
 *       - Работа с кэшем
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               size:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Размер кэша изменен
 */
router.post("/cache/size", cacheController.setCacheSize);

/**
 * @swagger
 * /api/cache/size:
 *   get:
 *     summary: Получить размер кэша
 *     tags:
 *       - Работа с кэшем
 *     responses:
 *       200:
 *         description: Размер кэша
 */
router.get("/cache/size", cacheController.getCacheSize);

/**
 * @swagger
 * /api/cache/count:
 *   get:
 *     summary: Получить количество записей в кэше
 *     tags:
 *       - Работа с кэшем
 *     responses:
 *       200:
 *         description: Количество записей в кэше
 */
router.get("/cache/count", cacheController.getCacheCount);

/**
 * @swagger
 * /api/cache/entries:
 *   get:
 *     summary: Получить все записи в кэше
 *     tags:
 *       - Работа с кэшем
 *     responses:
 *       200:
 *         description: Все записи кэша
 */
router.get("/cache/entries", cacheController.getAllCache);

/**
 * @swagger
 * /api/cache/entry:
 *   put:
 *     summary: Обновить запись в кэше
 *     tags:
 *       - Работа с кэшем
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               key:
 *                 type: string
 *     responses:
 *       200:
 *         description: Запись в кэше обновлена
 */
router.put("/cache/entry", cacheController.updateCacheEntry);

/**
 * @swagger
 * /api/cache/entries:
 *   put:
 *     summary: Обновить все данные в кэше
 *     tags:
 *       - Работа с кэшем
 *     responses:
 *       200:
 *         description: Кэш обновлен
 */
router.put("/cache/entries", cacheController.updateAllCache);

module.exports = router;
