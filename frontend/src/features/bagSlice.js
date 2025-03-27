import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../utils/backendApi";

// Get all the products [GET]
export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${api}/api/product`, {
        withCredentials: true,
      });
      return response?.data;

    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "failed to get products"
      );
    }
  }
);
// Get the product by Id [GET]
export const getProductById = createAsyncThunk(
  "product/getProductById",
  async ( { productId }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${api}/api/product/${productId}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "failed to get product"
      );
    }
  }
);

const initialState = {
  loading: false,
  error: null,
  data: [],
  singleData: null,
  success: false
}

const productSlice = createSlice({
  name:"product",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
    clearSingleData: (state) => {
      state.singleData = null;
    }
  },
  extraReducers: (builder) => {
    // Handle Pending State 
    const handlePending = ( ) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    }
    // Handle rejected state
    const handleRejected = (state, action ) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    }
    // Get all products
    builder
    .addCase(getProducts.pending, handlePending)
    .addCase(getProducts.fulfilled, (state, action) => {
      console.log("data line 77 ", action.payload)
      state.loading = false;
      state.success = false;
      state.data = action.payload;
    })
    .addCase(getProducts.rejected, handleRejected );

    // Get single product
    builder
    .addCase(getProductById.pending, handlePending)
    .addCase(getProductById.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.singleData = action.payload;
    })
    .addCase(getProductById.rejected, handleRejected);

  }
})

export const { resetStatus, clearSingleData } = productSlice.actions;
export default productSlice.reducer;