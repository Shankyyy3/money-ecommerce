import React, { useState } from 'react'
import axios from 'axios'
const AddProduct = ({history}) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const createProductSubmitHandler = async () => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(`/api/v1/product/new`, {
      name: name,
      price: price,
      image: image
    }, config);
    alert("Product Created Successfully")
  }
  return (
    <div className="newProductContainer" style={{ width: "fit-content", textAlign: "center", border: "1px solid gray", margin: 'auto', marginTop: "3%", padding: "40px" }}>
      <form
        className="createProductForm"
        encType="multipart/form-data"
        onSubmit={createProductSubmitHandler}
      >
        <h1>Create Product</h1>

        <div>
          <input
            type="text"
            placeholder="Product Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: '10px', width: "100%", margin: "5px" }}

          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Price"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{ padding: '10px', width: "100%", margin: "5px" }}

          />
        </div>

        <div id="createProductFormFile">
          <input
            type="text"
            name="image"
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image Link"
            style={{ padding: '10px', width: "100%", margin: "5px" }}

          />
        </div>


        <button
          id="createProductBtn"
          type="submit"
          style={{ width: "60%", backgroundColor: "tomato", color: "white", borderRadius: '10px', padding: "7px" }}
        >
          CREATE
        </button>
      </form>
    </div>
  )
}

export default AddProduct