import React from 'react'
import { Link } from 'react-router-dom';
export default function DisplayProducts(props) {
console.log(props.productsArray);
let products = props.productsArray
return (
<div className="container mt-3">
    <div className="row gy-3">
        {
            products && products.map(product => {
            return (
            <div className="col-3" key={product.id}>
                <div className="card" style={{width:16+'rem'}}>
                    <img src={product.thumbnail} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{product.title.substring(0,15)}</h5>
                        <p className="card-text">{product.description.substring(0,75)}...</p>
                        <div className='d-flex justify-content-between'>
                            <p className="card-text">&#8377;{product.price}</p>
                            <p className="card-text fw-bold">{product.category}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <Link to="#" className="btn btn-primary">Add to Cart</Link>
                            <Link to={`/products/${product.id}`} className="btn btn-success">View More</Link>
                        </div>
                    </div>
                </div>
            </div>
            )
            })
        }
    </div>
</div>
)
}