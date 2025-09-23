const fs = require('fs');


const userRequestHandler=((req, res) => {
  console.log(`URL: ${req.url}, Method: ${req.method}`);

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
    res.write('<button type="submit">Submit</button>')
    res.write('</form>')
    res.write('</body>')
    res.write('</html>');
    return res.end();
  } else if (req.url === '/submit-details' && req.method === 'POST') {

    const body = [];
    req.on('data', chunk => {
      console.log(` Data chunk available: ${chunk}  `);
      body.push(chunk);
    });

    req.on('end', () => {
      const fullBody=Buffer.concat(body).toString();
      console.log(fullBody);
      const params=new URLSearchParams(fullBody);
      const bodyObject=Object.fromEntries(params);
      // for(const [key,values] of params.entries()){
      //   bodyObject[key]=values;
      //   console.log(bodyObject)
    // }
    fs.writeFileSync('user.txt', JSON.stringify(bodyObject));
    });

    
    res.statusCode = 302;
    res.setHeader('Location', '/');
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Backend</title><head/>');
  res.write('<body><h1>Welcome to home</h1></body>');
  res.write('<html/>');

}
);

module.exports=userRequestHandler;