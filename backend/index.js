const express=require('express')
const router=require('./routes')
const mongoose=require('mongoose')
var cors = require('cors')
const app=express()
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors())
mongoose.connect('mongodb+srv://Anup:123456Anup@cluster0.44kgf.mongodb.net/sample?retryWrites=true&w=majority',
 { useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true,useNewUrlParser: true }).then((messege)=>{console.log("connected")}).catch((err)=>{console.log("error in connection",err)})
app.use('/',router)
app.listen(7009, () => {
    console.log("listening at 7009")
})