const redis = require("redis");

const redisClient = redis.createClient();
module.exports.redisConnect = async () => {
  try {

    redisClient.on("error", (error) => console.error(`Error : ${error}`));

    await redisClient.connect();
    console.log("redis is connected...");
  } catch (error) {
    console.log("error while connecting redis", error);
  }
};


module.exports.redisClientGet =async(key)=>{
  return redisClient.get(key)
}
module.exports.redisClientSet =async(key,value)=>{
  return redisClient.set(key,value)
}