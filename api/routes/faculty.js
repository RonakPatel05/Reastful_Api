const express = require("express");
const  route  = require("../../app");
const router=express.Router();
const faculty=require("../model/faculty");


router.get("/",(req,res,next)=>{
    res.status(200).json({
        msg:"This is faculty get request"
    })
})


router.post("/",(req,res,next)=>{
    res.status(200).json({
        msg:"This is faculty post request"
    })
})


module.exports= router;