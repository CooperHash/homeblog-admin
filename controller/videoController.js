var dbConfig = require('../util/dbconfig');

getAllVideo = (req, res) => {
  var sql = 'select vid,vurl,vimage,vtype,vname,vload from video'
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


getVideo = (req, res) => {
  let {vload} = req.query
  var sql = 'select title,content from Article where vload=?';
  var sqlArr = [id];
  var callback = (err, data) => {
    if(err) {
      console.log('连接出错');
      console.log(err);
    } else {
      return res.send(
        {'data': data}
      );
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callback);
}

module.exports = {
  getAllVideo,
  getVideo
}