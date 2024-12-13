const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running task using setTimeout to avoid blocking
  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }, 5000); // Simulate 5 seconds of work
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});