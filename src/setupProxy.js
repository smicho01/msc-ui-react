const { createProxyMiddleware } = require('http-proxy-middleware');



module.exports = function (app) {
    app.use(
        '/userservice',
        createProxyMiddleware({
            target: "http://localhost:9091/api/v1",
            changeOrigin: true
        })
    );

    app.use(
        '/itemservice',
        createProxyMiddleware({
            target: "http://localhost:9092/api/v1",
            changeOrigin: true
        })
    );

    app.use(
        '/coreservice',
        createProxyMiddleware({
            target: "http://localhost:9090/api/v1",
            changeOrigin: true
        })
    );


};
