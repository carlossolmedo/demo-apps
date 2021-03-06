require('dotenv').config({
  path: `${__dirname}/.env.${process.env.NODE_ENV}`
});

const http = require('http');
const hostname = 'localhost';
const port = process.env.PORT;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});