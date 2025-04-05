import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 1, cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          Restaurant App
        </Typography>
        <Button 
          color="inherit"
          onClick={() => navigate('/cart')}
          startIcon={
            <Badge badgeContent={itemCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          }
        >
          Cart
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;


