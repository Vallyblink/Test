import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import storage from 'redux-persist/lib/storage';
import dataReducer from './dataSlice.js'; 

const dataPersistConfig = {
  key: 'data',
  storage,
  whitelist: ['data'], 
};

const rootReducer = {
  data: persistReducer(dataPersistConfig, dataReducer), 
};

 const store = configureStore({
  reducer: rootReducer, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

setupListeners(store.dispatch);
export default store;
export const persistor = persistStore(store);
