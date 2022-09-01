import Button from '@mui/material/Button';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from "@mui/icons-material/Edit";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const UpdateAndDelete = () => {
    const [product, setProduct] = useState([])
    const response = async () => {
        const { data } = await axios.get("/api/v1/product/getall")
        // console.log(data.products)
        setProduct(data.products)
    }
    useEffect(() => {
        response()
    }, [product])

    const deleteProductHandler = async (id) => {
        const { data } = await axios.delete(`/api/v1/product/deleteproduct/${id}`)
        alert("Product Deleted Successfully")
    }
    const columns = [
        { field: "id", headerName: "Product ID", minWidth: 200, flex: 0.5 },

        {
            field: "name",
            headerName: "Name",
            minWidth: 350,
            flex: 1,
        },
        {
            field: "price",
            headerName: "Price",
            type: "number",
            minWidth: 270,
            flex: 0.5,
        },

        {
            field: "actions",
            flex: 0.3,
            headerName: "Actions",
            minWidth: 150,
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return (
                    <Fragment>
                        <Link to={`/product/edit/${params.getValue(params.id, "id")}`}>
                            <EditIcon />
                        </Link>

                        <Button
                            onClick={() =>
                                deleteProductHandler(params.getValue(params.id, "id"))
                            }
                        >
                            <DeleteIcon />
                        </Button>
                    </Fragment>
                );
            },
        },
    ];

    const rows = [];
    product &&
        product.forEach((item) => {
            rows.push({
                id: item._id,
                price: item.price,
                name: item.name,
            });
        });
    return (
        <div className="productListContainer" style={{ width: "80%", margin: "auto", marginTop: "2%" }}>
            <h1 id="productListHeading">ALL PRODUCTS</h1>

            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                disableSelectionOnClick
                autoHeight
                experimentalFeatures={{ newEditingApi: true }}
            />
        </div>
    )
}

export default UpdateAndDelete