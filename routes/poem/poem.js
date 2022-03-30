var express = require('express');
var router = express.Router();
var poem = require('../../controller/poemController')
router.get('/api/getDetail',poem.getDetail);
router.get('/api/getCategory',poem.getCategory);
router.get('/api/getPage',poem.getPage);


module.exports = router;
