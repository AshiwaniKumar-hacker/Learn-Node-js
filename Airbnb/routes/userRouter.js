const path =require('path')

const express = require('express');

const userRouter=express.Router();

const rootDir=require("../utils/Pathutil")

userRouter.get("/",(req,res,next)=>{
res.sendFile(path.join(rootDir,"views","home.html"));
});

module.exports=userRouter;