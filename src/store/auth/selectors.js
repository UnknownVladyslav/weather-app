const selectors = {
  token: (state) => state.auth.token,
  roles: (state) => state.auth.roles,
  username: (state) => state.auth.username,
  loginStatus: (state) => state.auth.loginStatus,
};

export { selectors };
