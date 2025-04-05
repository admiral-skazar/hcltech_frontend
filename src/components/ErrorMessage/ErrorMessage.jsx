import React from 'react';
import { Alert, Box } from '@mui/material';

function ErrorMessage({ message }) {
  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="100vh"
      p={2}
    >
      <Alert severity="error">{message}</Alert>
    </Box>
  );
}

export default ErrorMessage;