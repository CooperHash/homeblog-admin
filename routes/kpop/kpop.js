var express = require('express');
var router = express.Router();
var kpop = require('../../controller/kpopController')
router.get('/api/getAllSong',kpop.getAllSong);


module.exports = router;
