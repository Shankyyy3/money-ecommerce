const mongoose=require("mongoose");
const cartSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        default:"https://res.cloudinary.com/dtgrq0ud8/image/upload/v1658742211/products/xj8mbqzqkdmse4bkhjoo.webp"
    },
    quantity:{
        type:Number,
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

module.exports=mongoose.model("cart",cartSchema);