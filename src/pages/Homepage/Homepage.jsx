import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  Typography, 
  Grid, 
  Container 
} from '@mui/material';
import MenuCard from '../../components/MenuCard/MenuCard';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { menuItems as dummyMenuItems } from '../../data/menuItems';
import { addToCart, removeFromCart } from '../../store/cartSlice';

function HomePage() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    setTimeout(() => {
      setMenuItems(dummyMenuItems);
      setLoading(false);
    }, 500);
  }, []);

  const handleIncrement = (itemId) => {
    const item = menuItems.find(item => item.id === itemId);
    dispatch(addToCart(item));
  };

  const handleDecrement = (itemId) => {
    const item = menuItems.find(item => item.id === itemId);
    dispatch(removeFromCart(item));
  };

  const getItemQuantity = (itemId) => {
    const cartItem = cartItems.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom 
        align="center"
        sx={{ mb: 4 }}
      >
        Welcome to Our Restaurant
      </Typography>
      
      <Grid container spacing={3}>
        {menuItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <MenuCard
              item={item}
              quantity={getItemQuantity(item.id)}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomePage;


