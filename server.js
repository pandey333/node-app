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

const HOST = '0.0.0.0';
const PORT = 8000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello I am Rajat.... My backend is running on port 8000!\n');
});

server.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}/`);
});

