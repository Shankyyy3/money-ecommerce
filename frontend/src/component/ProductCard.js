import React from 'react'
import {
     Link
  } from "react-router-dom";
const ProductCard = ({ item }) => {
    return (
        <Link style={{textDecoration:"none",color:"black"}} className="productCard" to={`/product/${item._id}`}>
            <div style={{ margin: '60px', border: "1px solid black", borderRadius: "10px", }}>
                <img style={{ width: "250px", height: "250px",borderRadius: "10px" }} src={item.image} />
                <div>{item.name}</div>
                <div>{item.price}</div>
            </div>
        </Link>
    )
}

export default ProductCard