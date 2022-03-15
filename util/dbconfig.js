const mysql = require("mysql");

module.exports = {
    //数据库配置
    config:{
        host:'sh-cynosdbmysql-grp-c24eok2m.sql.tencentcdb.com',
        port:'20142',
        user:'root',
        password:'2001716Kk',
        database:'homeblog'
        // host: '127.0.0.1',
        // port: '3306',
        // user: 'root',
        // password: '2001716Kk',
        // database: 'homeblog'
    },
    //连接数据库，使用连接池方式
    //连接池对象
    sqlConnect:function(sql,sqlArr,callBack){
        var pool = mysql.createPool(this.config);
        pool.getConnection(function(err,conn){
            console.log('连接中~');
            if(err){
                console.log('连接失败');
                console.log(err);
                return;
            }
            conn.query(sql,sqlArr,callBack);
            conn.release();
        })
    }
}