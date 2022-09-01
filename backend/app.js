const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const cors=require("cors")
const path = require("path");
app.use(express.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
const product=require ("./routes/productRoutes");
const cart=require ("./routes/cartRoute");
app.use("/api/v1",product)
app.use("/api/v1",cart)
module.exports= app