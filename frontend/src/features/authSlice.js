import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: null,
  success: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: { 
    resetState : (state) => {
      state.loading = false;
      state.error = null;
      state.data = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {}
})
export const {resetState } =  authSlice.actions;
export default authSlice.reducer;