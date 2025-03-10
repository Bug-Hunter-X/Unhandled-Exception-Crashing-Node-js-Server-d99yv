const http = require('http');

const server = http.createServer((req, res) => {
  // Unexpected error handling
  if (req.url === '/error') {
    throw new Error('Something went wrong!');
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});