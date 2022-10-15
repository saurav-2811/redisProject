const mongoose = require("mongoose");
const { DB_URL } = require("./config");

module.exports.connectDb = async () => {
  try {
    console.log("db is connecting...");
    await mongoose.connect(DB_URL);
    console.log("db is connected now");
  } catch (error) {
    console.log("error from db connection", error);
  }
};
