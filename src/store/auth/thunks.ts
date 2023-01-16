import { createAsyncThunk } from '@reduxjs/toolkit';

const authLogin = createAsyncThunk('auth/login', async () => {
  console.log('login');
});

const authLogout = createAsyncThunk('auth/logout', async () => {
  console.log('authLogout');
});

const thunks = {
  authLogin,
  authLogout,
};

export { thunks };
