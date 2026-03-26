import React from 'react';
import { Snackbar, Alert } from '@mui/material';

export default function SnackbarAlert({ open, message, severity, onClose }) {
  return (
    <Snackbar 
      open={open} 
      autoHideDuration={5000} 
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert 
        onClose={onClose} 
        severity={severity} 
        variant="filled" 
        sx={{ width: '100%', borderRadius: '12px', fontWeight: 'bold' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
