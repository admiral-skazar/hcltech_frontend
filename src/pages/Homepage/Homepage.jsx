import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateQuantity, removeFromCart } from '../../store/cartSlice';
import { fetchFoodItems } from '../../services/api';

function HomePage() {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  useEffect(() => {
    loadFoodItems();
  }, []);

  const loadFoodItems = async () => {
    try {
      setLoading(true);
      const data = await fetchFoodItems();
      setFoodItems(data);
    } catch (err) {
      setError('Failed to load food items');
    } finally {
      setLoading(false);
    }
  };

  const getItemQuantity = (itemId) => {
    const cartItem = cartItems.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleQuantityChange = (item, change) => {
    const currentQuantity = getItemQuantity(item.id);
    const newQuantity = currentQuantity + change;

    if (newQuantity === 0) {
      dispatch(removeFromCart(item.id));
    } else if (currentQuantity === 0 && change > 0) {
      dispatch(addToCart(item));
    } else {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="homepage">
      <h1>Our Menu</h1>
      <div className="menu-grid">
        {foodItems.map(item => (
          <div key={item.id} className="menu-item">
            <h3>{item.foodName}</h3>
            <div className="food-type">{item.foodType}</div>
            <p className="price">₹{item.price}</p>
            <div className="quantity-controls">
              <button 
                onClick={() => handleQuantityChange(item, -1)}
                disabled={getItemQuantity(item.id) === 0}
              >
                -
              </button>
              <span>{getItemQuantity(item.id)}</span>
              <button 
                onClick={() => handleQuantityChange(item, 1)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

