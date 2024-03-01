import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import { Box, Container, Grid, Typography } from '@mui/material'
const isAuth = { user: false, seller: true, admin: false };

// ---------User---------
export const UserProtectedRoute = ({ children }) => {
  return isAuth.user ? (
    <Grid>
      <Box container spacing={2} sx={{ p: 2, mb: 2, border: 'Solid red 1px' }}>
        <Typography>User Alerts</Typography>
      </Box>
      <Outlet />
    </Grid>
  ) : (
    <Navigate to="/login" />
  );
};

export const PaymentProtectedRoute = ({ children }) => {
  return isAuth.user ? (
    <Container sx={{ py: 1 }}>
      <Outlet />
    </Container>
  ) : (
    <Navigate to="/login" />
  );
};

export const OrderProtectedRoute = ({ children }) => {
  return isAuth.user ? (
    <Container sx={{ py: 1 }}>
      <Outlet />
    </Container>
  ) : (
    <Navigate to="/login" />
  );
};

// ---------Seller ---------
export const SellerProtectedRoute = ({ children }) => {
  return isAuth.seller ? (
    <Outlet />
  ) : (
    <Navigate to="/seller/login" />
  );
};

// ---------Admin ---------
export const AdminProtectedRoute = ({ children }) => {
  return isAuth.admin ? (
    <Outlet />
  ) : (
    <Navigate to="/admin/login" />
  );
};