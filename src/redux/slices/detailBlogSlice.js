import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://lumoshive-academy-media-api.vercel.app/api";

export const fetchDetailBlog = createAsyncThunk(
  "detailBlog/fetchDetailBlog",
  async (key) => {
    const response = await axios.get(`${API_URL}/detail/${key}`);
    return response.data.results;
  }
);
const initialState = {
  blog: {},
  loading: false,
  error: null,
};
const detailBlogSlice = createSlice({
  name: "detailBlog",
  initialState,

  extraReducers: (builder) => {
    //recent Blog
    builder.addCase(fetchDetailBlog.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.blog = {};
    });

    builder.addCase(fetchDetailBlog.fulfilled, (state, action) => {
      state.loading = false;
      state.blog = action.payload;
      console.log(state.blog);
    });

    builder.addCase(fetchDetailBlog.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default detailBlogSlice.reducer;
