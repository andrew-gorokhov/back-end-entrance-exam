const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const PORT = process.env.PORT || 3000;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "REST API для получения погодной информации",
      version: "1.0.0",
      description:
        "Пример REST API с CRUD-операциями для ресурса [weather-api](https://github.com/robertoduessmann/weather-api)",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: `Локальный сервер, использующий порт ${PORT}`,
      },
    ],
    tags: [
      {
        name: "Работа с кэшем",
        description: "API для работы с кэшем",
      },
      {
        name: "Получение погодных данных",
        description: "API для получения данных о погоде",
      },
    ],
  },
  // Добавляем все файлы маршрутов, которые должны быть задокументированы
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
