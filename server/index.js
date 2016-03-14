var webpack = require('webpack');
var path = require('path');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('../webpack.config');
var app = new (require('express'))();
var server = require('http').createServer(app);
var wss = new (require('ws').Server)({ server: server });

var port = process.env.PORT || 3000;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(function(req, res) {
  res.sendFile(path.normalize(__dirname + '/../client/index.html'));
});

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    wss.clients.forEach(function each(client) {
      client.send(message);
    });
  });
});

server.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info(`Listening on http://localhost:${port}/`);
  }
});
