import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../utils/backendApi";

// Get all the products [GET]
export const getBags = createAsyncThunk(
  "bag/getBags",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${api}/bag`, {
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
// Add to Bag
export const addToBag = createAsyncThunk(
  "bag/addToBag",
  async (item, { rejectWithValue }) => {
    console.log("item ( addToBag ) : ", item)
    try {
      const response = await axios.post(
        `${api}/bag`,
        item,
        { withCredentials: true, 
          headers: { "Content-Type": "application/json" },
         }
      );
      // console.log("addToBag response.data : ", response.data )
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "failed to add products"
      );
    }
  }
);
// Get the product by Id [GET]
export const deleteBagById = createAsyncThunk(
  "bag/deleteBagById",
  async ({ productId }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${api}/bag/${productId}`, {
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

const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    resetBagStatusLoading: (state) => {
      state.loading = false;
    },
    resetBagStatusError: (state) => {
      state.error = null;
    },
    resetBagStatusMessage: (state) => {
      state.message = null;
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
    // Get all products from Bag
    builder
      .addCase(getBags.pending, handlePending)
      .addCase(getBags.fulfilled, (state, action) => {
        state.loading = false;
        state.message = null;
        state.data = action.payload;
      })
      .addCase(getBags.rejected, handleRejected);
    // Add product to Bag
    builder
      .addCase(addToBag.pending, handlePending)
      .addCase(addToBag.fulfilled, (state, action) => {
        state.loading = false;
        console.log("✅ Action Fulfilled Payload:", action.payload);
        state.message = action.payload;
        state.error = null;
      })
      .addCase(addToBag.rejected, handleRejected);

    // Delete single product
    builder
      .addCase(deleteBagById.pending, handlePending)
      .addCase(deleteBagById.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.error = null;
      })
      .addCase(deleteBagById.rejected, handleRejected);
  },
});

export const { resetBagStatusLoading, resetBagStatusError, resetBagStatusMessage } = bagSlice.actions;
export default bagSlice.reducer;
