const express = require('express');
const app=express();

const adminauth=(req,res,next)=>{
let tocken="xyz";
if(tocken==="xyz"){
    console.log("admin tocken verified");
   next();
   console.log("admin tocken verified");
}
else{
    res.status(402).send("unautherise request");
}

}
const userauth=(req,res,next)=>{
let tocken="xyz";
if(tocken==="xyz"){
    console.log("user tocken verified");
   next();
}
else{
    res.status(402).send("unautherise request");
}

}

module.exports={
    adminauth,userauth
}

