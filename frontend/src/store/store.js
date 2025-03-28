import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from '../features/authSlice';
import bagReducer from "../features/bagSlice";
import wishlistReducer from "../features/wishlistSlice"
import { productApi } from '../features/CreateApi/productApiSlice';
import { filterApi } from '../features/CreateApi/filterApiSlice';
import loggerMiddleware from './middleware/loggerMiddleware';


export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [filterApi.reducerPath]: filterApi.reducer,
    authUser: authUserReducer,
    bag: bagReducer,
    wishlist: wishlistReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
  .concat( loggerMiddleware ,productApi.middleware, filterApi.middleware),

});
