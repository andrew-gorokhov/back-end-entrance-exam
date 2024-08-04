const express = require("express");
const router = express.Router();
const weatherController = require("../controllers/weatherController");

/**
 * @swagger
 * /api/weather/{city}:
 *   get:
 *     summary: Получение погодных данных в городе
 *     tags:
 *       - Получение погодных данных
 *     parameters:
 *       - in: path
 *         name: city
 *         schema:
 *           type: string
 *         required: true
 *         description: Название города
 *     responses:
 *       200:
 *         description: Погодные данные
 *       500:
 *         description: Ошибка при получении данных от API
 */
router.get("/weather/:city", weatherController.getWeather);

/**
 * @swagger
 * /api/:
 *   get:
 *     summary: Проверка работоспособности API
 *     responses:
 *       200:
 *         description: Возвращает сообщение о работоспособности API
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "API запущен. Приятного использования!"
 */
router.get("/", (req, res) => {
  res.json({ message: "API запущен. Приятного использования!" });
});

module.exports = router;
