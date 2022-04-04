var dbConfig = require('../util/dbconfig');
getAllSong = (req, res) => {
  var sql = 'SELECT * from kmusic ';
  var sqlArr = [];
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



module.exports = {
  getAllSong
}