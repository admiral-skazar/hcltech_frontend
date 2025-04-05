import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  Select, 
  MenuItem, 
  Button,
  FormControl,
  InputLabel,
  Box,
  IconButton
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { dummyOrders } from '../../data/orders';

const ORDER_STATUS = {
  PENDING: 'PENDING',
  COOKING: 'COOKING',
  COMPLETED: 'COMPLETED'
};

function Chef() {
  const [orders, setOrders] = useState([]);
  const [currentOrderIndex, setCurrentOrderIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call with dummy data
    const timer = setTimeout(() => {
      setOrders(dummyOrders);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      setOrders(prevOrders => 
        prevOrders.map(order => 
          order.id === orderId 
            ? { ...order, status: newStatus }
            : order
        )
      );
    } catch (err) {
      setError('Failed to update order status');
    }
  };

  const handleNext = () => {
    setCurrentOrderIndex(prev => 
      prev < orders.length - 1 ? prev + 1 : prev
    );
  };

  const handlePrevious = () => {
    setCurrentOrderIndex(prev => 
      prev > 0 ? prev - 1 : prev
    );
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (orders.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h6" align="center">
          No orders available
        </Typography>
      </Container>
    );
  }

  const currentOrder = orders[currentOrderIndex];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Chef Dashboard
      </Typography>
      
      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <IconButton 
                onClick={handlePrevious} 
                disabled={currentOrderIndex === 0}
              >
                <ArrowBackIcon />
              </IconButton>
              <Typography variant="h6" align="center">
                Order {currentOrderIndex + 1} of {orders.length}
              </Typography>
              <IconButton 
                onClick={handleNext} 
                disabled={currentOrderIndex === orders.length - 1}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="h6">
                Order #{currentOrder.id}
              </Typography>
              <Typography color="textSecondary">
                Table: {currentOrder.tableNumber}
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box>
                {currentOrder.items.map((item) => (
                  <Typography key={item.id}>
                    {item.quantity}x {item.name}
                  </Typography>
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  value={currentOrder.status}
                  label="Status"
                  onChange={(e) => handleStatusChange(currentOrder.id, e.target.value)}
                >
                  {Object.values(ORDER_STATUS).map((status) => (
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {currentOrder.status !== ORDER_STATUS.COMPLETED && (
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={() => handleStatusChange(currentOrder.id, ORDER_STATUS.COMPLETED)}
                >
                  Mark as Done
                </Button>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Chef;

