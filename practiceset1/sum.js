const sumHandler=(req,res)=>{
console.log('In sum request handler',req.url);
const body =[];
req.on('data',chunk=>{
body.push(chunk);
})
req.on('end',()=>{
const bodyStr=  Buffer.concat(body).toString();
const params =new URLSearchParams(bodyStr);
const bodyObj=Object.fromEntries(params);
const result = Number(bodyObj.number1)+Number(bodyObj.number2);

res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
    <head><title>Calculator App</title></head>
    <body><h1>Sum is ${result}</h1>
    <a href='/calculator'>Calculate Next Problem</a>
    </body>
    </html>
`)
})
};

exports.sumHandler=sumHandler;