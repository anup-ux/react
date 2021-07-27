const express=require('express')
const router=express.Router();
const mongoose=require('mongoose')
const dbdata=require('./model')
router.get("/test",(req,res)=>{
    res.send("handling requetst")
})
router.post("/bmi-calculator",(req,res)=>{
    const data=new dbdata({
        _id:mongoose.Types.ObjectId(),
        weight:req.body.weight,
        height:req.body.height,
        // body:req.body,
        result:(req.body.weight)/(req.body.height*req.body.height)
     })
     data.save().then((data)=>{res.send({
         messege:"data saved",
         data:data
     })}).catch((err)=>{console.log(`error is ${err} body is ${req.body}`)})
})
router.get("/getChart",(req,res)=>{
    dbdata.find().then((result)=>{res.send({
        messege:"done",
        data:result
    })}).catch((err)=>{
        console.log("error in fetch",err)
    })
})
module.exports=router