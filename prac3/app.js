//core module
const path= require('path');

//External Module
const express =require('express');
const rootDir=require('./utils/pathUtil')

//local module
const homeRouter=require('./routes/homeRouter');
const fillDetailRoute = require('./routes/fillDetails');

const app = express();
app.use(express.urlencoded());
app.use(homeRouter);

app.use(fillDetailRoute)

app.post("/contact-us",(req,res,next)=>{
  console.log(req.body);
res.sendFile(path.join(rootDir,'views','Response.html'));
});

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir,"views","404.html"));
})

const PORT=3002;
app.listen(PORT,()=>{
  console.log(`Server is running at Port ${PORT}`)
});