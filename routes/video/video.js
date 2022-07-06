var express = require('express');
var router = express.Router();
var video = require('../../controller/videoController')
/* GET home page. */
router.get('/api/getAllVideo',video.getAllVideo);
router.get('/api/getVideo',video.getVideo);
module.exports = router;