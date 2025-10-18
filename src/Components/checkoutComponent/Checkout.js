import React from 'react';
import { useForm } from 'react-hook-form';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { items, getTotalPrice, clearCart } = useCart();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log('Checkout data:', data);
    // Simulate order placement
    alert('Order placed successfully!');
    clearCart();
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h2>No items in cart</h2>
        <button className="btn btn-primary" onClick={() => navigate('/products')}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Shipping Information</h5>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && <div className="text-danger">{errors.name.message}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <textarea
                    className="form-control"
                    id="address"
                    rows="3"
                    {...register('address', { required: 'Address is required' })}
                  ></textarea>
                  {errors.address && <div className="text-danger">{errors.address.message}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="city" className="form-label">City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    {...register('city', { required: 'City is required' })}
                  />
                  {errors.city && <div className="text-danger">{errors.city.message}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="zip" className="form-label">ZIP Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    {...register('zip', { required: 'ZIP code is required' })}
                  />
                  {errors.zip && <div className="text-danger">{errors.zip.message}</div>}
                </div>
                <button type="submit" className="btn btn-success w-100">Place Order</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              {items.map((item) => (
                <div key={item.id} className="d-flex justify-content-between mb-2">
                  <span>{item.title} (x{item.quantity})</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <hr />
              <div className="d-flex justify-content-between fw-bold">
                <span>Total:</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
