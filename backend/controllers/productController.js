const Product = require("../models/productModel");
const Review = require("../models/reviewModel");
exports.createProduct = async (req, res, next) => {


  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};
exports.getAllProducts = async (req, res) => {



  const products = await Product.find();
  res.status(200).json({
    status: true,
    products,
  });
};

exports.getSingleProduct = async (req, res) => {



  const products = await Product.findOne({_id:req.params.id});
  res.status(200).json({
    status: true,
    products,
  });
};

exports.updateSingleProduct = async (req, res) => {



  const products = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
  res.status(200).json({
    status: true,
    products,
  });
};

exports.deleteProduct = async (req, res) => {



  const products = await Product.findByIdAndDelete(req.params.id)
  res.status(200).json({
    status: true,
    products,
  });
};

exports.createReview = async (req, res) => {

    const review = await Review.create(req.body)
    res.status(200).json({
      status: true,
      review,
    });
};
exports.getReview = async (req, res) => {

  let review = await Review.find({productId:req.params.id})
  res.status(200).json({
    status: true,
    review,
  });
};

exports.deleteReview = async (req, res) => {

  let findReview = await Review.findById(req.params.id)
  let review;
  if (findReview) {
    review = await Review.findByIdAndDelete(req.params.id)
    res.status(200).json({
      status: true,
      review,
    });
  }
};