var dbConfig = require('../util/dbconfig')
const jwt = require('jsonwebtoken')
const SECRET_KEY = 'login2021'

saveUser = (req, res) => {
  var params = req.body
  var sql = 'insert into user(username, userpassword) values (?,?)';
  var sqlArr = [params.name, params.password];
  const token = jwt.sign(
    { user: { name: params.username, password: params.userpassword } },
    SECRET_KEY,
    { expiresIn: '30 days' }
  )
  console.log('🚀 → token', token)
  var callBack = (err) => {
    if (err) {
      console.log('连接出错');
      console.log(err);
    } else {
      return res.send({
        msg: "success",
        token
      });
    }
  }

  dbConfig.sqlConnect(sql, sqlArr, callBack);
}

module.exports = {
  saveUser
}