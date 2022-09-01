import axios from 'axios'
import React from 'react'

const CartCard = ({ item }) => {
    const response = async () => {
        const { data } = await axios.delete(`/api/v1/cart/deleteProduct/${item.productId}`)
    }
    const handleDelete = () => {
        response()
        alert("item deleted successfully")
    }
    return (
        <div style={{ display: "flex", justifyContent: "space-between", margin: "10px" }}>
            <div style={{display:"flex"}}>
                <img src={item.image} style={{width:"70px",marginRight:"10px"}}/>
                <div>
                    <h6>{item.name}</h6>
                    <h6>{item.price}</h6>
                    <button onClick={handleDelete} style={{ border: "none", background: "transparent", color: "tomato" }}>Remove</button>
                </div>
            </div>
            <h6>{item.quantity}</h6>
            <h6>{item.price * item.quantity}</h6>
        </div>
    )
}

export default CartCard