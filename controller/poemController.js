var dbConfig = require('../util/dbconfig');
getDetail = (req, res) => {
  let { id } = req.query
  var sql = 'SELECT a.title,@rank:=@rank + 1 AS id FROM (SELECT title FROM poem WHERE category=?) a,(SELECT @rank := 0) as it';
  var sqlArr = [id];
  var callback = (err, data) => {
    if (err) {
      console.log('连接出错');
      console.log(err);
    } else {
      return res.json(data)
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callback);
}

getPage = (req, res) => {
  let { id } = req.query
  var sql = 'SELECT a.title,a.content,@rank:=@rank + 1 AS id FROM (SELECT title,content FROM poem WHERE category=?) a,(SELECT @rank := 0) as it';
  var sqlArr = [id];
  var callback = (err, data) => {
    if (err) {
      console.log('连接出错');
      console.log(err);
    } else {
      return res.json(data)
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callback);
}

getCategory = (req, res) => {
  var sql = 'select cateName,category,cateImg from poem GROUP BY cateName,category,cateImg';
  var sqlArr = [];
  var callback = (err, data) => {
    if (err) {
      console.log('连接出错');
      console.log(err);
    } else {
      return res.send({
        'data': data,
      })
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callback);
}

module.exports = {
  getDetail,
  getCategory,
  getPage
}