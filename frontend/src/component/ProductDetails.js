import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { useParams } from 'react-router-dom';
import ReviewCard from './ReviewCard';
const ProductDetails = () => {
    const [product, setProduct] = useState({})
    const [reviews, setReviews] = useState([])
    const [reviewText, setReviewText] = useState("")
    const [quantity, setQuantity] = useState(0)
    const { id } = useParams();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        response2()
    };
    const response = async () => {
        const { data } = await axios.get(`/api/v1/product/getproduct/${id}`)
        // console.log(data.products)
        setProduct(data.products)
    }
    const response2 = async () => {
        try {
            const config = {
                headers: { "Content-Type": "application/json" },
            };

            const { data } = await axios.post(`/api/v1/review/create/${id}`, {
                name: product.name,
                text: reviewText,
                productId: id
            }, config);
        } catch (e) {
            console.log(e)
        }

    }
    const response4 = async () => {
        try {
            const config = {
                headers: { "Content-Type": "application/json" },
            };

            const { data } = await axios.post(`/api/v1/cart/product/${id}`, {
                name:product.name,
                price:product.price,
                quantity: quantity,
                image:product.image,
                productId: id
            }, config);
            alert("Item Added to Cart")
        } catch (e) {
            console.log(e)
        }
    }
    const handleCart = () => {
        response4()
    }
    const response3 = async () => {
        const { data } = await axios.get(`/api/v1/review/get/${id}`)
        setReviews(data.review)
    }
    useEffect(() => {
        response()
        response3()
    }, [reviews])
    return (
        <div >
            <div style={{ justifyContent: "space-evenly", display: "flex", margin: "auto", padding: "100px" }}>
                <img style={{ width: "300px", height: "300px" }} src={product.image} />
                <div>
                    <p>{product.name}</p>
                    <p>Product Id: {product._id}</p>
                    <p>₹{product.price}</p>
                    <div style={{ display: "flex", textAlign: "center", alignContent: "center", alignItems: "center" }}>
                        <div style={{ display: "flex", margin: "10px", textAlign: "center", alignContent: "center", alignItems: "center" }}>
                            <input style={{ width: "45px", margin: "2px", height: "30px" }} type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                        </div>
                        <button style={{ height: "30px", width: "120px", color: "white", backgroundColor: "tomato", borderRadius: "10px", padding: "1px", fontSize: "10px" }} disabled={quantity < 1} onClick={handleCart}>Add To Cart</button>
                    </div>
                    <button style={{ height: "30px", width: "120px", color: "white", backgroundColor: "tomato", borderRadius: "10px", padding: "1px", fontSize: "10px" }} onClick={() => setShow(true)}>Submit Review</button>


                </div>
            </div>
            <div style={{ marginLeft: "5%", marginRight: "5%", textAlign: "center" }}>
                <h3 style={{ borderBottom: "1px solid black", width: "500px", textAlign: "center", margin: "auto" }} >REVIEWS</h3>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{product.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <textarea style={{ width: "100%" }} value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleShow}>
                        Submit Review
                    </Button>
                </Modal.Footer>
            </Modal>
            <div style={{ display: "flex", margin: "5%", textAlign: "center" }}>
                {
                    reviews.length < 1 ? <div style={{ margin: "auto" }}>No Reviews Found</div> :
                        reviews.map((item, index) => {
                            return <ReviewCard key={index} item={item} />
                        })
                }</div>
        </div>
    )
}

export default ProductDetails