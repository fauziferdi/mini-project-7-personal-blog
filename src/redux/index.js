import { configureStore } from "@reduxjs/toolkit";
import allBlogsReducer from "./slices/allBlogsSlice";
import recentBlogsReducer from "./slices/allBlogsSlice";
import detailBlogsReducer from "./slices/allBlogsSlice";
import subscribeBlogsReducer from "./slices/allBlogsSlice";

export const store = configureStore({
  reducer: {
    allBlogs: allBlogsReducer,
    recentBlogs: recentBlogsReducer,
    detailBlogs: detailBlogsReducer,
    subscribeBlogs: subscribeBlogsReducer,
  },
});
