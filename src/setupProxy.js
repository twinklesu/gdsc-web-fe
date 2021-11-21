const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  const url = "http://localhost:8080";
  app.use(
    "/api",
    createProxyMiddleware({
      target: url,
      changeOrigin: true,
    })
  );
};
