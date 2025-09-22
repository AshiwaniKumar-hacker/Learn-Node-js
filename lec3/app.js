const http = require('http');



const server = http.createServer((req, res) => {
  console.log(`URL: ${req.url}, Method: ${req.method}, Header:${req.headers}`);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Backend</title></head>');
    res.write('<body><h1>I am Ashiwani Kumar.</h1></body>');
    res.write('</html>');
    res.end('Server is running');
  } else if (req.url === '/home') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Backend</title><head/>');
    res.write('<body><h1>Welcome to home</h1></body>');
    res.write('<html/>');
    res.end('Server is running');
    
  }
}
);

server.listen(3002,()=>{
  console.log('Server is Running')
});