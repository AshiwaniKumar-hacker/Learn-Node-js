const express = require('express');
const hostRouter= express.Router();


hostRouter.get("/add-home",(req,res,next)=>{
res.send(`
  `);
})

hostRouter.post("/add-home",(req,res,next)=>{
  console.log(req.body);
res.send(`<h1>Your Home has been Registered</h1>
  <a href="/">Go to home</a>
  `);
})


module.exports=hostRouter;