var dbConfig = require('../util/dbconfig');
const jwt = require('jsonwebtoken')
const SECRET_KEY = 'login2021'
getAllRecent = (req, res) => {
  var sql = 'select content,time,ptime from recent';
  var sqlArr = [];
  var callback = (err, data) => {
    if(err) {
      console.log('连接出错');
      console.log(err);
    } else {
      return res.send({
        'data': data,
        'user': req.user
      })
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callback);
}

getRecent = (req, res) => {
  var {id} = req.query;
  var sql = 'select content,time,ptime from recent where belong_id=?';
  var sqlArr = [id];
  var callback = (err, data) => {
    if(err) {
      console.log('连接出错');
      console.log(err);
    } else {
      return res.send({
        'data': data
      })
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callback);
}

count = (req, res) => {
  var {id} = req.query;
  var sql = 'select count(*) as count from recent where belong_id=?';
  var sqlArr = [id];
  var callback = (err, data) => {
    if(err) {
      console.log('连接出错');
      console.log(err);
    } else {
      return res.send({
        'data': data
      })
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callback);
}


countAll = (req, res) => {
  var {id} = req.query;
  var sql = 'select count(*) as count from recent';
  var sqlArr = [id];
  var callback = (err, data) => {
    if(err) {
      console.log('连接出错');
      console.log(err);
    } else {
      return res.send({
        'data': data
      })
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callback);
}

saveRecent = (req, res) => {
  var params = req.body
  var sql = 'insert into recent(belong_id, single_id, content , time) values (?,?,?,?)';
  var sqlArr = [params.belong_id, params.single_id, params.content, params.time];
  var callBack = (err) => {
    if(err) {
      console.log('连接出错');
      console.log(err);
    } else {
      return res.send(
        {'msg': 'sccess'}
      );
    }
  }

  dbConfig.sqlConnect(sql, sqlArr, callBack);
}





module.exports = {
  count,
  getRecent,
  getAllRecent,
  countAll,
  saveRecent,
}
