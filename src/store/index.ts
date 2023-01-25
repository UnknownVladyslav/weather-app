import storage from 'redux-persist/lib/storage';
import { Action, combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import general from 'store/general';

const appReducer = combineReducers({
  general,
});

type RootState = ReturnType<typeof appReducer>;

const rootReducer = (state: RootState | undefined, action: Action) => {
  if (action.type === 'auth/SET_APP_IS_FAILED') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

const persistConfig = {
  key: 'weather',
  storage,
  blacklist: [],
  whitelist: ['general'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type { RootState };
export default store;
