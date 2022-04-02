var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');
const blogRouter = require('./routes/blog/blog');
const japanRouter = require('./routes/language/japan');
const recentRouter = require('./routes/recent/recent')
const bookRouter = require('./routes/books/books')
const userRouter = require('./routes/user/user')
const poemRouter = require('./routes/poem/poem')

// 进行解密
// var jwt = require('express-jwt');
// const SECRET_KEY = 'login2021';
var app = express();
var http = require('http');
var server = http.createServer(app);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(jwt({ secret: SECRET_KEY, algorithms: ['HS256']})
// .unless({path: ['/all/user/api/saveUser']}));

app.use('/all/blog', blogRouter);
app.use('/all/language', japanRouter);
app.use('/all/recent', recentRouter);
app.use('/all/book',bookRouter);
app.use('/all/user',userRouter);
app.use('/all/poem',poemRouter);

// 设置响应头
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Authorization,Origin");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
});

server.listen('3007');
