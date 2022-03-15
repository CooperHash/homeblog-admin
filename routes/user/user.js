var express = require('express');
var router = express.Router();
var user = require('../../controller/userController')
/* GET home page. */
router.post('/api/saveUser',user.saveUser);
module.exports = router;