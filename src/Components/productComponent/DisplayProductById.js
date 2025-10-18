import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function DisplayProductById(props) {
  const { addToCart } = useCart();
  const navigateTo = useNavigate();
  const product = props.productObject;
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="text-center mt-5">Loading product...</div>;
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    alert(`${quantity} x ${product.title} added to cart!`);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigateTo('/checkout');
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
          <img src={product.thumbnail} alt={product.title} className="img-fluid product-detail" />
          {/* Image Gallery Placeholder */}
          <div className="mt-3">
            <small>Image gallery would go here (using product.images array)</small>
          </div>
        </div>
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <p className="text-muted">Category: {product.category}</p>
          <p>{product.description}</p>
          <h3 className="text-success">${product.price}</h3>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">Quantity:</label>
            <input
              type="number"
              id="quantity"
              className="form-control w-25"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            />
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-warning" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="btn btn-success" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
          <button
            className="btn btn-secondary mt-3"
            onClick={() => navigateTo('/products')}
          >
            Back to Products
          </button>
        </div>
      </div>
      {/* Reviews Placeholder */}
      <div className="mt-5">
        <h3>Customer Reviews</h3>
        <p>Reviews would be displayed here (using product.reviews array)</p>
        <div className="border p-3 mb-3">
          <strong>Rating: {product.rating}/5</strong>
        </div>
      </div>
    </div>
  );
}
