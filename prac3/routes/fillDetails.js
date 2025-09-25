//core module
const path=require('path');

//External Module

const express = require('express');

//loacal module

const rootDir =require("../utils/pathUtil");

const fillDetailRoute=express.Router();

fillDetailRoute.get("/contact-us",(req,res,next)=>{
  
res.sendFile(path.join(rootDir,'views','fillDetails.html'))
});

module.exports=fillDetailRoute;