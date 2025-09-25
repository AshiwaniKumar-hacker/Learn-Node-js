//core module
const path=require('path');

//External Module

const express = require('express');

//loacal module

const rootDir =require("../utils/pathUtil")

const homeRouter=express.Router();

homeRouter.get("/",(req,res,next)=>{
res.sendFile(path.join(rootDir,"views","welcome.html"));
});

module.exports=homeRouter;