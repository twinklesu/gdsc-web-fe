const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  const url = "http://13.125.167.175:8080";
  app.use(
    "/api",
    createProxyMiddleware({
      target: url,
      changeOrigin: true,
    })
  );
};
