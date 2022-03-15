var express = require('express');
var router = express.Router();
var recent = require('../../controller/recentController')
/* GET home page. */
router.get('/api/getRecent',recent.getRecent);
router.get('/api/getAllRecent', recent.getAllRecent);
router.get('/api/count',recent.count);
router.get('/api/countAll',recent.countAll);
router.post('/api/saveRecent', recent.saveRecent);
module.exports = router;