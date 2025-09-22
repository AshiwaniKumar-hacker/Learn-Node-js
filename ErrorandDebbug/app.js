const http = require('http');

const testingSyntax=require('./syntax');
const runtimeError=require('./runtime');
const logicalError=require('./logical');

const server = http.createServer((req,res)=>{
console.log(req.url,req.method);   
testingSyntax();
runtimeError();
logicalError();
});

const PORT=3002;
server.listen(PORT, () => {
  console.log(`Server is Running on Address http://localhost:${PORT}`)
});