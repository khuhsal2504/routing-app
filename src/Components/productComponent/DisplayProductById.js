import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function DisplayproductById(props) {
    let navigateTo=useNavigate()
    let product = props.productObject
        return (
            <div className="container mt-3" key={product.id}>
                <div className="row">
                    <div className="col-4">
                        <img src={product.thumbnail} alt="" />
                    </div>
                        <div className="col-4">
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <button className='btn btn-primary w-100'
                        onClick={()=>{navigateTo('/products')}}>All Products</button>
                    </div>
                    <div className="col-3 border rounded">
                        <Link className='btn btn-warning w-75'>Add to cart</Link>
                        <Link className='btn btn-success w-75 mt-3'>Buy Now</Link>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        )
        }