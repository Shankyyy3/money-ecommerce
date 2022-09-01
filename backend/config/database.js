const mongoose=require("mongoose");
const connectDatabase=()=>{
    
    mongoose.connect("mongodb://localhost:27017",{useNewUrlParser:true,useUnifiedTopology:true})
    .then((data)=>{
        console.log(`Mongodb connected with server: 4000`)
    })
}
module.exports=connectDatabase;