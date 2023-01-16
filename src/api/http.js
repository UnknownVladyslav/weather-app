import axios from 'axios';

import store from 'store';
import { auth as authModule } from 'store/auth';

let isLogout = false;

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api`,
  timeout: 30000,
});

instance.interceptors.request.use((config) => {
  const { auth } = store.getState();
  if (auth.token) config.headers.Authorization = `Bearer ${auth.token}`;
  return config;
});

// logout interceptor
instance.interceptors.response.use(
  (res) => res,
  (err) => {
    const { status } = err.response;
    const { auth } = store.getState();

    if (auth.token && status === 418) {
      isLogout = !isLogout;

      if (isLogout) {
        store.dispatch(authModule.thunks.authLogout());
      }
    }

    return Promise.reject(err);
  }
);

export default instance;
