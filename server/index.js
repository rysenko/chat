var koa = require('koa');
var serve = require('koa-static');
var webpack = require('webpack');
var webpackDevMiddleware = require('koa-webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('../webpack.config');

var app = koa();
var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(function* (next) {
    yield webpackHotMiddleware(compiler).bind(null, this.req, this.res);
    yield next;
});

app.use(serve('client'));

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Listening at ' + port);
});
