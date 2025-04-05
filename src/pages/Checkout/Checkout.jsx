import React from 'react';
import { useSelector } from 'react-redux';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Button 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { items, total } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>Checkout</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Order Summary</Typography>
              {items.map((item) => (
                <Grid container key={item.id} spacing={2} sx={{ mb: 2 }}>
                  <Grid item xs={6}>
                    <Typography>{item.name}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography>x{item.quantity}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography>${(item.price * item.quantity).toFixed(2)}</Typography>
                  </Grid>
                </Grid>
              ))}
              <Typography variant="h6" sx={{ mt: 2 }}>
                Total: ${total.toFixed(2)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth
            onClick={() => navigate('/confirmation')}
          >
            Place Order
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Checkout;