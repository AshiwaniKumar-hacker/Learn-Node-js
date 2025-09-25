const path =require('path')

const express = require('express');

const userRouter=express.Router();

userRouter.get("/",(req,res,next)=>{
res.send(`
  `);
});

module.exports=userRouter;