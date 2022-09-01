import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import CartCard from './CartCard';
const Cart = () => {
  const [cart, setCart] = useState([]);
  const response = async () => {
    const { data } = await axios.get("/api/v1/cart/getall")
    setCart(data.cart)
  }
  useEffect(() => {
    response()
  }, [cart])
  let total = 0;
  cart && cart.map((item, index) => {
    total += item.price * item.quantity
  })
  const response2 = async (id) => {
    const { data } = await axios.delete(`/api/v1/cart/deleteProduct/${id}`)
  }
  const handleDelete = () => {
    response2()
  }
  console.log(cart)
  return (
    <Fragment>
      <div className="cartPage" style={{ margin: "2%" }}>
        <div className="cartHeader" style={{ display: 'flex', backgroundColor: "tomato", justifyContent: "space-between", padding: "7px", color: "white" }}>
          <p>Product</p>
          <p>Quantity</p>
          <p>SubTotal</p>
        </div>
        <div>
          {
            cart && cart.map((item, index) => {
              return <CartCard key={item.name} item={item} handleDelete={handleDelete} />
            })
          }
        </div>
        <div style={{ borderBottom: "5px solid tomato", textAlign: "right", width: "300px", marginLeft: "auto" }}></div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1%" }}>
          <h5 style={{ width: "200px", marginLeft: "auto", marginRight: "10px", fontWeight: "bold" }}>Gross Total :</h5>
          <div style={{ textAlign: "right", marginRight: "10px", fontWeight: "bold" }}>{total}</div>
        </div>
      </div>
    </Fragment>
  )
}

export default Cart