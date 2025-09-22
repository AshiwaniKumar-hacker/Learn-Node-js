const http= require('http');

const server = http.createServer((req,res) => {
  console.log(`URL: ${req.url}, Method: ${req.method}, Header:${req.headers}`); 

  if(req.url === '/men'){
    res.write('<h1>Men\'s Fashion</h1>');
    return res.end();
  } else if(req.url === '/women'){
    res.write('<h1>Women\'s Fashion</h1>');
    return res.end();
  } else if(req.url === '/kids'){
    res.write('<h1>Kids\'s Fashion</h1>');
    return res.end(); 
  } else if(req.url === '/home'){
    res.write('<h1>Home & Living</h1>');
    return res.end();
  } else if(req.url === '/cart'){
    res.write('<h1>Your Cart</h1>');
  }; 
  res.write(`
    <html lang="en">
<head>
 <title>Myntra</title>
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="/men">Men</a></li>
        <li><a href="/women">Women</a></li>
        <li><a href="/kids">Kids</a></li>
        <li><a href="/home">Home</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
    </nav>
  </header>
</body>
</html>
    `);
res.end();
}
);

server.listen(3004,()=>{
  console.log('Server running on address http://localhost:3004');
}); 