import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://lumoshive-academy-media-api.vercel.app/api";

export const subscribeBlog = createAsyncThunk(
  "subscribe/subscribeBlog",
  async (email) => {
    const response = await axios.post(`${API_URL}/subscribe`, email);
    return response.data;
  }
);

const initialState = {
  subsribe: {},
  loading: false,
  error: null,
};

const subscribeSlice = createSlice({
  name: "subscribe",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(subscribeBlog.pending, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(subscribeBlog.fulfilled, (state, action) => {
      state.loading = true;
      state.subsribe = action.payload;
    });
    builder.addCase(subscribeBlog.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default subscribeSlice.reducer;
