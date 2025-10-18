import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function DisplayProducts(props) {
  const { addToCart } = useCart();
  const [sortBy, setSortBy] = useState('');
  let products = props.productsArray;

  if (!products) {
    return <div className="text-center mt-5">Loading products...</div>;
  }

  // Sorting logic
  if (sortBy === 'price-low') {
    products = [...products].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    products = [...products].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    products = [...products].sort((a, b) => b.rating - a.rating);
  }

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="container mt-3">
      {/* Sort Options */}
      <div className="d-flex justify-content-end mb-3">
        <select
          className="form-select w-auto"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className="row gy-3">
        {products.map(product => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
            <div className="card h-100 product-card">
              <img src={product.thumbnail} className="card-img-top" alt={product.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title.substring(0, 20)}</h5>
                <p className="card-text">{product.description.substring(0, 80)}...</p>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="fw-bold text-success">${product.price}</span>
                  <span className="badge bg-secondary">{product.category}</span>
                </div>
                <div className="d-flex justify-content-between mt-auto">
                  <button
                    className="btn btn-primary flex-fill me-1"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <Link to={`/products/${product.id}`} className="btn btn-success flex-fill">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
