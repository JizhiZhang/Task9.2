var express = require('express');
const expressBrowserify = require('express-browserify');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pictureRouter = require('./routes/picture');
var chatRouter = require('./routes/chat');

var bodyParser = require('body-parser');
// var socket = require('socket.io');
var app = express();





// #!/usr/bin/env node

/**
 * Module dependencies.
 */

// var app = require('../app');
var debug = require('debug')('reactapp:server');
var http = require('http');
var socket = require('socket.io');
/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

var mylink = server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
// 设置socket.io
var io = socket(mylink);
io.on('connection',(socket)=> {
    console.log('实现socket连接',socket.id)

    // 获取从客户端发送的数据（chat）
    socket.on('chat',(data) => {
        io.sockets.emit('chat', data);
    })

    // 获取从客户端发送的数据（typing）
    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data);
    })
})
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}




app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
  // automatically bundle the front-end js on the fly
  // note: this should come before the express.static since bundle.js is in the public folder
const isDev = (app.get('env') === 'development');
const browserifyier = expressBrowserify(
  './public/scripts/bundle.jsx', {
    watch: isDev,
    debug: isDev,
    extension: ['jsx'],
    transform: ['babelify'],
});
const pictureifyier = expressBrowserify('./public/scripts/picture.jsx', {
  watch: isDev,
  debug: isDev,
  extension: ['jsx'],
  transform: ['babelify'],
});
const chatrifyier = expressBrowserify('./public/scripts/chat.jsx', {
  watch: isDev,
  debug: isDev,
  extension: ['jsx'],
  transform: ['babelify'],
});
const indexifyier = expressBrowserify('./public/scripts/chat.jsx', {
  watch: isDev,
  debug: isDev,
  extension: ['jsx'],
  transform: ['babelify'],
});
if (!isDev) {
    browserifyier.browserify.transform('uglifyify', { global: true });
    pictureifyier.browserify.transform('uglifyify', { global: true });
    chatrifyier.browserify.transform('uglifyify', { global: true });
    indexifyier.browserify.transform('uglifyify', { global: true });
}
app.get('/scripts/bundle.js', browserifyier);
app.get('/scripts/picture.js', pictureifyier);
app.get('/scripts/chat.js', chatrifyier);
app.get('/scripts/index.js', indexifyier);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static("views"));

const mongoose = require('./config/mongoose.js')
const db = mongoose();
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/picture', pictureRouter);
app.use('/chat', chatRouter);
// app.get('/', (req, res) => res.render('index'));
// module.exports = app;






