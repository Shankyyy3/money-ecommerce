import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
const EditProduct = () => {
    const [product, setProduct] = useState({})
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const { id } = useParams();
    const response = async () => {
        const { data } = await axios.get(`/api/v1/product/getproduct/${id}`)
        setName(data.products.name)
        setPrice(data.products.price)
        setImage(data.products.image)
    }
    useEffect(() => {
        response()
    }, [product])
    const updateProductSubmitHandler=async()=>{
        const config = {
            headers: { "Content-Type": "application/json" },
          };
      
          const { data } = await axios.put(`/api/v1/product/updateProduct/${id}`, {
            name: name,
            price: price,
            image: image
          }, config);
          alert("Product Updated Successfully")
    }
    return (
        <div className="newProductContainer" style={{ width: "fit-content", textAlign: "center", border: "1px solid gray", margin: 'auto', marginTop: "3%", padding: "40px" }}>
            <form
                className="createProductForm"
                encType="multipart/form-data"
                onSubmit={updateProductSubmitHandler}
            >
                <h1>Edit Product</h1>

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
                    UPDATE
                </button>
            </form>
        </div>
    )
}

export default EditProduct