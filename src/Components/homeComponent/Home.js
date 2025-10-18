import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FetchProduct from '../productComponent/FetchProduct';

export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div>
      {/* Hero Banner */}
      <div className="hero-banner text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to AmazonClone</h1>
          <p className="lead">Your one-stop shop for everything!</p>
          <Link to="/products" className="btn btn-light btn-lg">
            Shop Now
          </Link>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="container mt-4">
        <h2>Shop by Category</h2>
        <div className="row">
          {categories.slice(0, 6).map((category, index) => (
            <div className="col-md-2 mb-3" key={index}>
              <Link
                to={`/products?category=${encodeURIComponent(category.name || category)}`}
                className="text-decoration-none"
              >
                <div className="card text-center category-card">
                  <div className="card-body">
                    <h5 className="card-title">{category.name || category}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mt-4">
        <h2>Featured Products</h2>
        <FetchProduct />
      </div>
    </div>
  );
}
