var express = require('express');
var router = express.Router();
var video = require('../../controller/videoController')
/* GET home page. */
router.post('/api/getAllVideo',video.getAllVideo);
module.exports = router;