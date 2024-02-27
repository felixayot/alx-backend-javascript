// Displays Hello Holberton School!
// in the page body for any endpoint as plain text.

const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((_, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
