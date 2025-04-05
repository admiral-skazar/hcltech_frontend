import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box
} from '@mui/material';

function MenuCard({ item, quantity, onIncrement, onDecrement }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt={item.name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {item.name}
        </Typography>
        <Typography>
          {item.description}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
          ${item.price.toFixed(2)}
        </Typography>
        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button 
            variant="outlined" 
            size="small" 
            onClick={() => onDecrement(item.id)}
            disabled={quantity <= 0}
          >
            -
          </Button>
          <Typography>{quantity}</Typography>
          <Button 
            variant="outlined" 
            size="small" 
            onClick={() => onIncrement(item.id)}
          >
            +
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default MenuCard;
