// 'use strict';

// const express = require('express');

// // Constants
// const PORT = 8080;
// const HOST = '0.0.0.0';

// // App
// const app = express();
// app.get('/', (req, res) => {
//   res.send('Hello World..............I AM FROM BACKEND');
// });

// app.listen(PORT, HOST);
// console.log(`Running on http://${HOST}:${PORT}`);


const http = require('http');

const PORT = 8000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from Node.js on port 80!\n');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
