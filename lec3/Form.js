const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res) => {
  console.log(`URL: ${req.url}, Method: ${req.method}, Header:${req.headers}`);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Backend</title></head>');
    res.write('<body><h1>Enter Your Details</h1>')
    res.write('<form action="/submit-details" method="POST">')
    res.write('<input type="text" name="username" placeholder="Enter your name">')
    res.write('<input type="radio" name="gender" value="male">')
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" name="gender" value="female">')
    res.write('<label for="female">Female</label>')
    res.write('<input type="email" name="email" placeholder="Enter your email">')
    res.write('<input type="password" name="password" placeholder="Enter your password">')
    res.write('<button type="submit">Submit</button>')
    res.write('</form>')
    res.write('</body>')
    res.write('</html>');
    return res.end();
  } else if(req.url === '/submit-details' && req.method === 'POST') {
    fs.writeFileSync('user.txt', 'Ashiwani Kumar');
    res.statuscode=302;
    res.setHeader('Location', '/');
  }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Backend</title><head/>');
    res.write('<body><h1>Welcome to home</h1></body>');
    res.write('<html/>');
    res.end('Server is running');
    
}
);

server.listen(3001,()=>{
  console.log('Server is Running')
});