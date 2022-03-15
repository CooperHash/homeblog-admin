var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');
// const parseJwt = require('express-jwt')
// const SECRET_KEY = 'login2021'
var blogRouter = require('./routes/blog/blog');
var japanRouter = require('./routes/language/japan');
var recentRouter = require('./routes/recent/recent')
var bookRouter = require('./routes/books/books')
var userRouter = require('./routes/user/user')
// blogRouter.use(function(req, res, next) {
//   if(req.headers.token !== null) {
//     jwt.verify(req.headers.token, SECRET_KEY, function(err, decoded) {
//       if(err) {
//         res.json({
//           status: false,
//           message: 'token不存在或已过期'
//         });
//       } else {
//         next();
//       }
//     });
//   } else {
//     next();
//   }
// });
var app = express();
var http = require('http');
var server = http.createServer(app);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/all/blog', blogRouter);
app.use('/all/language', japanRouter);
app.use('/all/recent', recentRouter);
app.use('/all/book',bookRouter);
app.use('/all/user',userRouter);

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
});

server.listen('3004');
