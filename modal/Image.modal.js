const mongoose = require("mongoose");

const ImagesSchema = new mongoose.Schema({
  id: {
    type: "string",
    required: true,
  },
  albumId: { type: "string", required: true },
  title: { type: "string", required: true},
  url: { type: "string", required: true},
  thumbnailUrl: { type: "string", required: true}
},
{timeStamps:true}
);

module.exports = mongoose.model("Images", ImagesSchema);