const express =require('express');
const bodyParser = require('body-parser');


const app = express();

app.use((req,res,next)=>{
  console.log('came in first middleware',req.url,req.method);
  next();
});

app.use((req,res,next)=>{
console.log('came in to the second middleware',req.url,req.method);
next();
});

// app.use((req,res,next)=>{
// console.log('came into the third middleware');
// res.send('<h1>Hi I am Mr. Ashiwani Kumar</h1>')
// })

app.get("/",(req,res,next)=>{
console.log('handling / for get');
})

app.get("/contact-us",(req,res,next)=>{
console.log('handling /contact us for get');
res.send(`<html>
  <h1>Please fill your details.</h1>
  <form action="/contact-us" method="POST" />
  <input type="text" placeholder="Enter your name" name="name" />
  <input type="text" placeholder="enter your email" name="email" />
  <input type="Submit" />
  </form>
  </html>`)
});

app.use(bodyParser.urlencoded());

app.post("/contact-us",(req,res,next)=>{
  console.log('handling /contact-us details',req.url,req.method,req.body);
res.send("<h1>We will respond you shortly.</h1>");
});

const PORT=3002;
app.listen(PORT,()=>{
  console.log(`Server is running at Port ${PORT}`)
});