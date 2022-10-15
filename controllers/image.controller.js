const axios = require("axios");
const Image = require("../modal/Image.modal");
const { redisClientSet } = require("../config/redisConnect");


module.exports.insertImages = async (req, res) => {
  try {
    const apiData = await axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/photos",
    });
    const insertImage = await Image.insertMany(apiData["data"]);
    res.status(200).json({ response: insertImage });
  } catch (error) {
    console.log(error);
  }
};

module.exports.getImages = async (req, res) => {
  try {
    const getImage = await Image.find();
    if (getImage.length === 0) {
      return res.status(404).json({ response: "there is no data in db" });
    }
    await redisClientSet("imgData", JSON.stringify(getImage));
    return res.status(200).json({ fromCache: false, response: getImage });
  } catch (error) {
    console.log(error);
  }
};
