import { createSlice } from '@reduxjs/toolkit';

import { status } from 'utils/const';
import { thunks } from './thunks';
import { selectors } from './selectors';

interface AuthState {
  token: string | null;
  refreshToken: string | null;
  roles: string[];
  username: string | null;
  loginStatus: status;
  logoutStatus: status;
}

const initialState: AuthState = {
  token: null,
  refreshToken: null,
  roles: [],
  username: null,
  loginStatus: status.IDLE,
  logoutStatus: status.IDLE,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(thunks.authLogin.pending, (state) => {
        state.loginStatus = status.PENDING;
      })
      .addCase(thunks.authLogin.fulfilled, (state) => {
        state.loginStatus = status.SUCCESS;
      })
      .addCase(thunks.authLogin.rejected, (state) => {
        state.loginStatus = status.FAIL;
      })

      .addCase(thunks.authLogout.pending, (state) => {
        state.logoutStatus = status.PENDING;
      })
      .addCase(thunks.authLogout.fulfilled, (state) => {
        state.logoutStatus = status.SUCCESS;
      })
      .addCase(thunks.authLogout.rejected, (state) => {
        state.logoutStatus = status.FAIL;
      });
  },
});

const auth = {
  actions: slice.actions,
  thunks,
  selectors,
};

export { auth };
export default slice.reducer;
