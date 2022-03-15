var dbConfig = require('../util/dbconfig')

getArticle = (req, res) => {
  var sql = 'select id,title,info,content from Article';
  var sqlArr = [];
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

getNetWork = (req, res) => {
  var sql = 'select id,title,info,content from network';
  var sqlArr = [];
  var callback = (err, data) => {
    if(err) {
      console.log('连接出错');
      console.log(err);
    } else {
      return res.send(
        {'data': data }
      );
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callback);
}

getArticleById = (req, res) => {
  let {id} = req.query
  var sql = 'select content from Article where id=?';
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

getArticleByGroup = (req, res) => {
  let {id} = req.query
  var sql = 'SELECT a.title,a.info,a.content,@rank:=@rank + 1 AS id FROM (SELECT content,info,title FROM Article WHERE belong_id=?) a,(SELECT @rank := 0) as it;';
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

saveArticle = (req, res) => {
  var params = req.body
  var sql = 'insert into Article(content,title,info) values (?,?,?)';
  var sqlArr = [params.content, params.title, params.info];
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

upArticle = (req, res) => {
  var params = req.body
  var sql = 'UPDATE Article SET content=? WHERE id=?';
  var sqlArr = [params.content, params.id];
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

getJudge = (req, res) => {
  let {id} = req.query
  var sql = 'select judge.judge_id,comment from judge left join Article on judge.article_id = Article.id where Article.id=?';
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


saveComment = (req, res) => {
  var params = req.body
  var sql = 'insert into judge(id, article_id, judge_id, comment) values (?,?,?,?)';
  var sqlArr = [params.id, params.article_id, params.judge_id, params.comment];
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


countJudge = (req, res) => {
  var sql = 'select count(*) as count from judge';
  var sqlArr = [];
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


countSameJudge = (req, res) => {
  let {id} = req.query
  var sql = 'select count(*) as count from judge where article_id=?';
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


getJs = (req, res) => {
  var sql = 'SELECT a.content,a.info,a.title,@rank:=@rank + 1 AS id FROM (SELECT title,info,content FROM Article WHERE belong_id=1) a,(SELECT @rank := 0) as it;';
  var sqlArr = [];
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
},

getV = (req, res) => {
  var sql = 'SELECT a.content,a.info,a.title,@rank:=@rank + 1 AS id FROM (SELECT title,info,content FROM Article WHERE belong_id=2) a,(SELECT @rank := 0) as it;';
  var sqlArr = [];
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
},


searchArticle = (req, res) => {
  var [find] = req.query
  var sql = 'select * from Article where title like '%" + (?) + " %'';
  var sqlArr = [find];
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
},

getHttp1 = (req, res) => {
  var sql = 'SELECT a.content,a.info,a.title,@rank:=@rank + 1 AS id FROM (SELECT title,info,content FROM network WHERE belong_id=1) a,(SELECT @rank := 0) as it;';
  var sqlArr = [];
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
},

getTcp = (req, res) => {
  var sql = 'SELECT a.content,a.info,a.title,@rank:=@rank + 1 AS id FROM (SELECT title,info,content FROM network WHERE belong_id=3) a,(SELECT @rank := 0) as it;';
  var sqlArr = [];
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
},

getNetWorkByGroup = (req, res) => {
  let {id} = req.query
  var sql = 'SELECT a.title,a.info,a.content,@rank:=@rank + 1 AS id FROM (SELECT content,info,title FROM network WHERE belong_id=?) a,(SELECT @rank := 0) as it;';
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
  getArticle,
  getArticleById,
  saveArticle,
  upArticle,
  getJudge,
  saveComment,
  countJudge,
  countSameJudge,
  getJs,
  getV,
  getArticleByGroup,
  getNetWorkByGroup,
  searchArticle,
  getNetWork,
  getHttp1,
  getTcp
}