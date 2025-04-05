import React, { useState, useEffect } from 'react';
import { 
  Typography, 
  Grid, 
  Container 
} from '@mui/material';
import MenuCard from '../../components/MenuCard/MenuCard';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { menuItems as dummyMenuItems } from '../../data/menuItems';

function HomePage() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    
    const initialQuantities = {};
    dummyMenuItems.forEach(item => {
      initialQuantities[item.id] = 0;
    });
    
    
    setTimeout(() => {
      setMenuItems(dummyMenuItems);
      setQuantities(initialQuantities);
      setLoading(false);
    }, 500);
  }, []);

  const handleIncrement = (itemId) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const handleDecrement = (itemId) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) - 1)
    }));
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
              quantity={quantities[item.id]}
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
