const mongoose=require("mongoose");
const reviewSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter user name"],
        trim:true
    },
    
    rating:{
        type:Number,
        maxLength:[5,"Review cannot excede 5 characters"],
        default:5
    },
    text:{
        type:String,
        required:true
    },
    productId:{
        type:String,
        required:true
    },
    uDate:{
        type:Date,
        default:Date.now
    },
   
})

module.exports=mongoose.model("review",reviewSchema);