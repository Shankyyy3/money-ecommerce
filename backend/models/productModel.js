const mongoose=require("mongoose");
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter product name"],
        trim:true
    },
    
    price:{
        type:Number,
        required:[true,"Please Enter Product price"],
        maxLength:[8,"Price cannot excede 8 characters"]
    },
    image:{
        type:String,
        default:"https://res.cloudinary.com/dtgrq0ud8/image/upload/v1658742211/products/xj8mbqzqkdmse4bkhjoo.webp"
    },
    cDate:{
        type:Date,
        default:Date.now
    },
    uDate:{
        type:Date,
        default:Date.now
    },
   
})

module.exports=mongoose.model("Product",productSchema);