const express = require("express");
require("dotenv").config();
const weatherRoutes = require("./routes/weatherRoutes");
const cacheRouter = require("./routes/cacheRoutes");
const setupSwagger = require("./config/swagger");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", weatherRoutes);
app.use("/api", cacheRouter);

setupSwagger(app);

const start = async () => {
  try {
    await app.listen(PORT);
    console.log(`Сервер запущен на порту ${PORT}`);
  } catch (error) {
    console.log(error);
  }
};

start();
