import React, { useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from './ProductCard'
const Products = () => {
    const [product,setProduct]=useState([])
    const response=async()=>{
        const {data}=await axios.get("/api/v1/product/getall")
        // console.log(data.products)
        setProduct(data.products)
    }
    useEffect(() => {
      response()
    }, [])
  return (
    <div style={{width:"100%",height:"100%",textAlign:"center",paddingTop:"2%",overflowX:"hidden"}}>
        <h1>All Products</h1>
        <div style={{width:"100%",height:"100%",display:"flex",textAlign:"center",flexWrap:"wrap",textDecoration:"none"}}>
        {product.map((item,index)=>(
            <ProductCard key={item._id} item={item}/>
        ))}
        </div>
    </div>
  )
}

export default Products