const express=require("express");
const { createProduct, getAllProducts, getSingleProduct, updateSingleProduct, deleteProduct, createReview, deleteReview, getReview } = require("../controllers/productController");
const router=express.Router();


router.route("/product/new").post(createProduct);
router.route("/product/getall").get(getAllProducts)
router.route("/product/getproduct/:id").get(getSingleProduct)
router.route("/product/updateproduct/:id").put(updateSingleProduct)
router.route("/product/deleteproduct/:id").delete(deleteProduct)

router.route("/review/create/:id").post(createReview)
router.route("/review/get/:id").get(getReview)
router.route("/review/delete/:id").delete(deleteReview)


module.exports=router;