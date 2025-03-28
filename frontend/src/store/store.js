import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from '../features/authSlice';

import loggerMiddleware from './middleware/loggerMiddleware';
import { productApi } from '../features/CreateApi/productApiSlice';
import { filterApi } from '../features/CreateApi/filterApiSlice';


export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [filterApi.reducerPath]: filterApi.reducer,
    authUser: authUserReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware, productApi.middleware, filterApi.middleware),

});
