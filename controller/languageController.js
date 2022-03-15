var dbConfig = require('../util/dbconfig')

getJapan = (req, res) => {
  var sql = 'select l_id as id,image,title,content from language';
  var sqlArr = [];
  var callback = (err, data) => {
    if(err) {
      console.log('连接出错');
      console.log(err);
    } else {
      return res.json(data);
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callback);
}

getJapanById = (req, res) => {
  var {id} = req.query;
  var sql = 'select title,content,image,audio from language where l_id=?';
  var sqlArr = [id];
  var callback = (err, data) => {
    if(err) {
      console.log('连接出错');
      console.log(err);
    } else {
      return res.json(data);
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callback);
}

getChaoZhou = (req, res) => {
  var sql = 'select c_id as id,image,title from ChaoZhou';
  var sqlArr = [];
  var callback = (err, data) => {
    if(err) {
      console.log('连接出错');
      console.log(err);
    } else {
      return res.json(data);
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callback);
}

getChaoZhouById = (req, res) => {
  var {id} = req.query;
  var sql = 'select title,video from ChaoZhou where c_id=?';
  var sqlArr = [id];
  var callback = (err, data) => {
    if(err) {
      console.log('连接出错');
      console.log(err);
    } else {
      return res.json(data);
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callback);
}

getAudioById = (req, res) => {
  var {id} = req.query
  var sql = 'select audio from media where id=?';
  var sqlArr = [id];
  var callback = (err, data) => {
    if(err) {
      console.log('连接出错');
      console.log(err);
    } else {
      return res.json(data);
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callback);
}



module.exports = {
  getJapan,
  getJapanById,
  getChaoZhou,
  getChaoZhouById,
  getAudioById
}