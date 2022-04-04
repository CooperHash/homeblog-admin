var dbConfig = require('../util/dbconfig');

getBook = (req, res) => {
  var sql = 'select id,image,name,author,info from books';
  var sqlArr = [];
  var callback = (err, data) => {
    if (err) {
      console.log('连接出错');
      console.log(err);
    } else {
      return res.json(data);
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callback);
}

countBook = (req, res) => {
  var sql = 'select count(*) as count from books';
  var sqlArr = [];
  var callback = (err, data) => {
    if (err) {
      console.log('连接出错');
      console.log(err);
    } else {
      return res.json(data);
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callback);
}

getBookByPage = (req, res) => {
  var params = req.query.page
  var next = (params - 1) * 10;
  var sql = 'select image,name,author from books limit 10 offset ?';
  var sqlArr = [next];
  var callback = (err, data) => {
    if (err) {
      console.log('连接出错');
      console.log(err);
    } else {
      return res.json(data);
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callback);
}


getEnjoy = (req, res) => {
  var sql = 'select image from enjoy where id = 1';
  var sqlArr = [];
  var callback = (err, data) => {
    if (err) {
      console.log('连接出错');
      console.log(err);
    } else {
      return res.json(data);
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callback);
}

getBookInfoById = (req, res) => {

  var { id } = req.query
  var sql = 'SELECT a.person,a.info,@rank:=@rank + 1 AS id FROM (SELECT person,info FROM books_detail WHERE belong_id=?) a,(SELECT @rank := 0) as it';
  var sqlArr = [id];
  var callback = (err, data) => {
    if (err) {
      console.log('连接出错');
      console.log(err);
    } else {
      return res.json(data);
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callback);
}

getBookDetailById = (req, res) => {
  var { id } = req.query
  var sql = 'SELECT a.person,a.info,a.detail,@rank:=@rank + 1 AS id FROM (SELECT person,info,detail FROM books_detail WHERE belong_id=?) a,(SELECT @rank := 0) as it';
  var sqlArr = [id];
  var callback = (err, data) => {
    if (err) {
      console.log('连接出错');
      console.log(err);
    } else {
      return res.json(data);
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callback);
}


getBookDetailByName = (req, res) => {
  var { id, name } = req.query
  var sql = 'select person,detail,info from books_detail where belong_id=? and person like (?)';
  var sqlArr = [id, name];
  var callback = (err, data) => {
    if (err) {
      console.log('连接出错');
      console.log(err);
    } else {
      return res.json(data);
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callback);
}


saveBookDetail = (req, res) => {
  var params = req.body
  var sql = 'insert into books_detail(person, info, detail , time) values (?,?,?,?)';
  var sqlArr = [params.belong_id, params.single_id, params.content, params.time];
  var callBack = (err) => {
    if (err) {
      console.log('连接出错');
      console.log(err);
    } else {
      return res.send(
        { 'msg': 'sccess' }
      );
    }
  }
}



module.exports = {
  getBook,
  countBook,
  getBookByPage,
  getEnjoy,
  getBookInfoById,
  getBookDetailById,
  getBookDetailByName
}