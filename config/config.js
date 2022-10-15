require("dotenv").config();
module.exports = {
  PORT: process.env.PORT || 5000,
  DB_URL: process.env.DB_URL
    ? process.env.DB_URL
    : "mongodb://localhost:27017/redisProject",
  NODE_ENV: process.env.NODE_ENV,
};
