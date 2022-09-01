const express=require("express");
const { addToCart, getCartItems, deleteCartItem } = require("../controllers/cartController");
const cart=express.Router();


cart.route("/cart/product/:id").post(addToCart);
cart.route("/cart/getall").get(getCartItems);
cart.route("/cart/deleteProduct/:id").delete(deleteCartItem);


module.exports=cart;