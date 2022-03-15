var express = require('express');
var router = express.Router();
var blogs = require('../../controller/blogController')


/* GET home page. */
router.get('/api/getArticle',blogs.getArticle);

router.get('/api/getArticleById',blogs.getArticleById);
router.post('/api/saveArticle',blogs.saveArticle);
router.get('/api/getJudge',blogs.getJudge);
router.post('/api/saveComment',blogs.saveComment);
router.get('/api/countJudge',blogs.countJudge);
router.get('/api/countSameJudge',blogs.countSameJudge);
router.get('/api/getJs',blogs.getJs);
router.get('/api/getV',blogs.getV);
router.put('/api/upArticle',blogs.upArticle);
router.get('/api/getArticleByGroup',blogs.getArticleByGroup);
router.get('/api/getNetWorkByGroup',blogs.getNetWorkByGroup)
router.get('/api/searchArticle',blogs.searchArticle);
router.get('/api/getNetWork',blogs.getNetWork)
router.get('/api/getHttp1',blogs.getHttp1);
router.get('/api/getTcp',blogs.getTcp)

module.exports = router;
