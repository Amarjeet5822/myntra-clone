import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import productReducer from "../features/productSlice"
import { productApi } from '../features/productApiSlice';
import loggerMiddleware from './middleware/loggerMiddleware';


export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    auth: authReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware, productApi.middleware),

});
