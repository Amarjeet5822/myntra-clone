import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../utils/backendApi";

// Get all the products [GET]
export const getWishlist = createAsyncThunk(
  "wishlist/getWishlist",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${api}/wishlist`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "failed to get products"
      );
    }
  }
);
// Add to Wishlist
export const addToWishlist = createAsyncThunk(
  "wishlist/addToWishlist",
  async (
    {
      product_id,
      product_description,
      rating,
      ratings_count,
      initial_price,
      discount,
      final_price,
      sizes,
      image,
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        `${api}/bag`,
        {
          product_id,
          product_description,
          rating,
          ratings_count,
          initial_price,
          discount,
          final_price,
          sizes,
          image,
        },
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "failed to add products"
      );
    }
  }
);
// Get the product by Id [GET]
export const deleteWishlistById = createAsyncThunk(
  "wishlist/deleteWishlistById",
  async ({ productId }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${api}/wishlist/${productId}`, {
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
  message: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    resetWishlistLoading: (state) => {
      state.loading = false;
    },
    resetWishlistMessage: (state) => {
      state.message = null;
    },
    resetWishlistError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Handle Pending State
    const handlePending = (state) => {
      state.loading = true;
      state.message = null;
      state.error = null;
    };
    // Handle rejected state
    const handleRejected = (state, action) => {
      state.loading = false;
      state.message = null;
      state.error = action.payload;
    };
    // Get all products from Wishlist
    builder
      .addCase(getWishlist.pending, handlePending)
      .addCase(getWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.message = null;
        state.data = action.payload;
      })
      .addCase(getWishlist.rejected, handleRejected);
    // Add product to Wishlist
    builder
      .addCase(addToWishlist.pending, handlePending)
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(addToWishlist.rejected, handleRejected);

    // Delete single product
    builder
      .addCase(deleteWishlistById.pending, handlePending)
      .addCase(deleteWishlistById.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.error = null;
      })
      .addCase(deleteWishlistById.rejected, handleRejected);
  },
});

export const { resetWishlistLoading, resetWishlistError, resetWishlistMessage } = wishlistSlice.actions;
export default wishlistSlice.reducer;
