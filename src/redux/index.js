import { configureStore } from "@reduxjs/toolkit";
import allBlogsReducer from "./slices/allBlogsSlice";
import recentBlogsReducer from "./slices/recentBlogsSlice";
import detailBlogsReducer from "./slices/detailBlogSlice";
import subscribeBlogsReducer from "./slices/subscribeSlice";

export const store = configureStore({
  reducer: {
    allBlogs: allBlogsReducer,
    recentBlogs: recentBlogsReducer,
    detailBlogs: detailBlogsReducer,
    subscribeBlogs: subscribeBlogsReducer,
  },
});
