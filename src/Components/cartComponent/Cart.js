import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h2>Your Cart is Empty</h2>
        <Link to="/products" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Shopping Cart</h2>
      <div className="row">
        <div className="col-md-8">
          {items.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item.thumbnail} className="img-fluid rounded-start" alt={item.title} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">${item.price}</p>
                    <div className="d-flex align-items-center">
                      <label className="me-2">Quantity:</label>
                      <input
                        type="number"
                        className="form-control w-25"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                      />
                      <button
                        className="btn btn-danger ms-3"
                        onClick={() => removeFromCart(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              <p className="card-text">Total Items: {items.reduce((total, item) => total + item.quantity, 0)}</p>
              <p className="card-text fw-bold">Total Price: ${getTotalPrice().toFixed(2)}</p>
              <Link to="/checkout" className="btn btn-success w-100">
                Proceed to Checkout
              </Link>
              <button className="btn btn-secondary w-100 mt-2" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
