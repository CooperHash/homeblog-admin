var express = require('express')
var router = express.Router();
var books = require('../../controller/bookController');

router.get('/api/getBook', books.getBook);
router.post('/api/saveBookDetail',books.saveBookDetail)
router.get('/api/countBook', books.countBook);
router.get('/api/getBookByPage', books.getBookByPage);
router.get('/api/getEnjoy', books.getEnjoy);
router.get('/api/getBookDetailById', books.getBookDetailById);
router.get('/api/getBookInfoById', books.getBookInfoById);
router.get('/api/getBookDetailByName', books.getBookDetailByName);
module.exports = router
