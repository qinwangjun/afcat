const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(createProxyMiddleware('/api',
    {
      target: 'http://39.99.151.246/',
      changeOrigin: true
    }
  ));
};
