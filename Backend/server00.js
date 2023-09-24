const corsProxy = require('cors-anywhere');

const host = 'localhost'; // Replace with your server's hostname
const port = 8080; // Choose a port

corsProxy.createServer({
  originWhitelist: [], // Allow all origins
  requireHeaders: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2'],
}).listen(port, host, () => {
  console.log(`CORS Anywhere is running on ${host}:${port}`);
});
