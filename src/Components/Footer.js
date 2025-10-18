import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Get to Know Us</h5>
            <ul className="list-unstyled">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/press">Press Releases</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Make Money with Us</h5>
            <ul className="list-unstyled">
              <li><Link to="/sell">Sell products</Link></li>
              <li><Link to="/affiliate">Become an Affiliate</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Let Us Help You</h5>
            <ul className="list-unstyled">
              <li><Link to="/account">Your Account</Link></li>
              <li><Link to="/returns">Returns Centre</Link></li>
              <li><Link to="/help">Help</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Connect with Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p>&copy; 2023 AmazonClone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
