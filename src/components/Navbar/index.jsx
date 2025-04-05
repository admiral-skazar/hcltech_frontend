import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems?.reduce((total, item) => total + item.quantity, 0) || 0;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 1, cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          Food Ordering
        </Typography>
        
        <IconButton 
          color="inherit" 
          onClick={() => navigate('/checkout')}
          size="large"
        >
          <Badge badgeContent={itemCount} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        
        <Button 
          color="inherit"
          onClick={() => navigate('/chef')}
        >
          Chef
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;