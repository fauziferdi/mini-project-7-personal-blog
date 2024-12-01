import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://lumoshive-academy-media-api.vercel.app/api";

const fetchRecentBlogs = createAsyncThunk(
  "recentBlogs/fetchRecentBlogs",
  async (page) => {
    const response = await axios.get(`${API_URL}/games?page=${page}`);
    return response.data;
  }
);

const initialState = {
  blogs: [],
  loading: false,
  error: null,
};
const recentBlogsSlice = createSlice({
  name: "recentBlogs",
  initialState,

  extraReducers: (builder) => {
    //recent Blog
    builder.addCase(fetchRecentBlogs.pending, (state) => {
      state.loading = false;
      state.error = null;
    });

    builder.addCase(fetchRecentBlogs.fulfilled, (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
    });

    builder.addCase(fetchRecentBlogs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default recentBlogsSlice.reducer;
