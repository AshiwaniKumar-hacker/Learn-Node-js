//core modules
// const http = require('http');

//external modules
const express = require('express');

//local module
const userRequestHandler=require('./Form')

const app =express();

app.use((req,res,next)=>{
  console.log('came in first middleware',req.url,req.method);
  next();
})

app.use((req,res,next)=>{
  console.log('came in second middleware',req.url,req.method);
  res.send('<p>You are successfully logged in.</p>')
})


const PORT=3002;
app.listen(PORT, () => {
  console.log(`Server is Running on Address http://localhost:${PORT}`)
});