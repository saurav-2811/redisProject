const redis = require("redis");
const { redisClientGet } = require("../config/redisConnect");

module.exports.imageCacheData = async (req, res, next) => {
  try {
    let cacheData;
    const data = await redisClientGet("imgData");
    cacheData = true;
    if (!JSON.parse(data) || JSON.parse(data)?.length === 0) {
      cacheData = false;
    return  next();
    }
    return res.status(200).json({ fromCache: cacheData, response: JSON.parse(data) });
  } catch (error) {
    console.log("err in middleware imagecachedata", error);
  }
};
