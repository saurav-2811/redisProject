const express = require("express");
const { PORT } = require("./config/config");
const { connectDb } = require("./config/connectDb");
const { redisConnect } = require("./config/redisConnect");
const imagesRoute = require("./router/image.route");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", imagesRoute);
(async () => {
  try {
    await app.listen(PORT);
    console.log("Server is running on port:" + PORT);
    await connectDb();
    await redisConnect();
  } catch (error) {
    console.log("error in server connection:", error);
  }
})();
