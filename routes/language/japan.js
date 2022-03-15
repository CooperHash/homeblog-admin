var express = require('express');
var router = express.Router();
var language = require('../../controller/languageController')
/* GET home page. */
router.get('/api/getJapan',language.getJapan);
router.get('/api/getJapanById',language.getJapanById)
router.get('/api/getChaoZhou',language.getChaoZhou)
router.get('/api/getChaoZhouById',language.getChaoZhouById)
router.get('/api/getAudioById',language.getAudioById);
module.exports = router;