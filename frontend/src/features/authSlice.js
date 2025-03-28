import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../utils/backendApi";

// First, create the thunk ( Login User)
export const loginUser = createAsyncThunk(
  "authUser/loginUser",
  async ({ number, name }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${api}/auth/login`,
        { number, name },
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "failed Login!")
    }
  
  }
);

// Logout User
export const logoutUser = createAsyncThunk(
  "authUser/logoutUser",
  async ( _,{ rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${api}/auth/logout`,
        {},
        { withCredentials: true, }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "failed logout!")
    }
  }
);
// Get User
export const getUser = createAsyncThunk(
  "authUser/getUser",
  async ( _,{ rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${api}/auth`,
        { withCredentials: true, }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "failed to get User!")
    }
  }
);

const initialState = {
  isUser: {isAuthenticated:false, name:""},
  data: null,
  loading: false,
  error: null,
  success: false
};

const authUserSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: { 
    resetState : (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    // Handle Pending State 
    const handlePending = ( state ) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    }
    // Handle rejected state
    const handleRejected = (state, action ) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload?.data;
    }
    // Login builder
    builder
    .addCase(loginUser.pending, handlePending )
    .addCase(loginUser.fulfilled, (state, action) => {
      state.isUser = action.payload;
      state.loading = false;
      state.success = true;
      state.error = null
    })
    .addCase(loginUser.rejected, handleRejected);

    // get User
    builder.addCase(getUser.pending, handlePending)
    .addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.isUser.isAuthenticated = true;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(getUser.rejected, handleRejected);

    // Logout builder
    builder.addCase(logoutUser.pending, handlePending)
    .addCase(logoutUser.fulfilled, (state) => {
      state.loading = false;
      state.success = true;
      state.isUser.isAuthenticated = false;
      state.data = null;
      state.error = null;
    });
    builder.addCase(logoutUser.rejected, handleRejected);

  },
});
export const {resetState } =  authUserSlice.actions;
export default authUserSlice.reducer;
