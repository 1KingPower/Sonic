const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});
const server = http.createServer((req, res) => {
  // Forward requests to the specific URL
  proxy.web(req, res, { target: 'https://now.gg/apps/roblox-corporation/5349/roblox.html' });
});

server.listen(8080, () => {
  console.log('Proxy server listening on port 8080');
});
