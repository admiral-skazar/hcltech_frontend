import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button,
  Box 
} from '@mui/material';
import { addToCart, removeFromCart } from '../../store/cartSlice';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>Your Cart is Empty</Typography>
        <Button variant="contained" onClick={() => navigate('/')}>
          Continue Shopping
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>Your Cart</Typography>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xs={12} key={item.id}>
            <Card>
              <CardContent>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={4}>
                    <Typography variant="h6">{item.name}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography>${item.price}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Button 
                        variant="outlined" 
                        size="small"
                        onClick={() => dispatch(removeFromCart(item))}
                      >
                        -
                      </Button>
                      <Typography>{item.quantity}</Typography>
                      <Button 
                        variant="outlined" 
                        size="small"
                        onClick={() => dispatch(addToCart(item))}
                      >
                        +
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>${(item.price * item.quantity).toFixed(2)}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5">Total: ${total.toFixed(2)}</Typography>
        <Button 
          variant="contained" 
          color="primary" 
          size="large"
          onClick={() => navigate('/checkout')}
        >
          Proceed to Checkout
        </Button>
      </Box>
    </Container>
  );
}

export default Cart;