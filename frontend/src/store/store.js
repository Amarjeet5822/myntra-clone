import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import productReducer from "../features/bagSlice"

import loggerMiddleware from './middleware/loggerMiddleware';
import { productApi } from '../features/CreateApi/productApiSlice';
import { filterApi } from '../features/CreateApi/filterApiSlice';


export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [filterApi.reducerPath]: filterApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware, productApi.middleware, filterApi.middleware),

});
