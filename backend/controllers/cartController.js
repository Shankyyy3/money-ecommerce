const Product = require("../models/productModel");
const Cart = require("../models/cartModel");
exports.addToCart = async (req, res, next) => {

    let product = await Product.findById(req.params.id)
    if (product) {
        let cart = await Cart.findOne({ productId: req.params.id })
        if (cart) {
            cart = await Cart.findOneAndUpdate({ productId: req.params.id }, req.body, {
                new: true,
                runValidators: true,
            })
        } else {
            cart = await Cart.create(req.body);
        }

        res.status(201).json({
            success: true,
            cart
        });
    }

};

exports.getCartItems = async (req, res, next) => {

    const cart = await Cart.find();
    res.status(201).json({
        success: true,
        cart
    });

};
exports.deleteCartItem = async (req, res, next) => {

    const cart = await Cart.findOneAndDelete({ productId: req.params.id });
    res.status(201).json({
        success: true,
        cart
    });

};