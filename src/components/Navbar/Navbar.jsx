import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const cartItems = useSelector(state => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Food Ordering
      </Link>
      <div className="navbar-links">
        <Link to="/chef">Chef</Link>
        <Link to="/cart" className="cart-icon">
          🛒
          {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;


