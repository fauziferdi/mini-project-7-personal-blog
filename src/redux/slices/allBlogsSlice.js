import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://lumoshive-academy-media-api.vercel.app/api";

export const fetchAllBlogs = createAsyncThunk(
  "allBlogs/fetchAllBlogs",
  async (page) => {
    const response = await axios.get(`${API_URL}/games/news?page=${page}`);
    return response.data;
  }
);

const initialState = {
  blogs: [],
  loading: false,
  error: null,
};

const allBlogsSlice = createSlice({
  name: "allBlogs",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchAllBlogs.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchAllBlogs.fulfilled, (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
    });
    builder.addCase(fetchAllBlogs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default allBlogsSlice.reducer;
