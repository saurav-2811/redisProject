const express = require('express');
const { insertImages, getImages } = require('../controllers/image.controller');
const { imageCacheData } = require('../middleware/imageCacheData');
const Router=express.Router();

Router.route('/image').post(insertImages).get(imageCacheData,getImages)

module.exports=Router;