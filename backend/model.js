const mongoose=require('mongoose')
const registerSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    height:{type:String,required:true},
    weight:{
        type:String,
        required:true
    },
    result:{type:String}

})
module.exports=mongoose.model('data',registerSchema)