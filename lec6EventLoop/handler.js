const {sumHandler}=require('./sum');

const requestHandler=(req,res)=>{
console.log(req.url,req.method); 

if(req.url==='/'){
  res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
    <head><title>Calculator App</title></head>
    <body><h1>Welcome to Calculator</h1>
    <a href='/calculator'>Go To Calculator </a>
    </body>
    </html>
`)
return res.end();

} else if(req.url==='/calculator'){
res.setHeader('Content-Type','text/html');
res.write(`
  <html>
  <head><title>Your Calculator</title></head>
  <body>
  <h1> Here is your Calculator</h1>
  <form action='/calculate-result' method="POST">
  <input type='number' placeholder='Number:1' name='number1' />
  <input type='number' placeholder='Number:2' name='number2' />
  <input type='submit' value='Sum'/>
  </form>
  </body>
  </html>
  
  `)
  return res.end();

} else if(req.url.toLowerCase()==='/calculate-result' && req.method==='POST'){
   return  sumHandler(req,res);
}

res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
    <head><title>Calculator App</title></head>
    <body><h1>404 Page Does Not Exist</h1>
    <a href='/'>Go To Home </a>
    </body>
    </html>
`)
return res.end();

}

exports.requestHandler=requestHandler 