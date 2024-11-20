import { configureStore } from "@reduxjs/toolkit";
import authReduce from "./slices/authSlice";
import isLikeReduce from "./slices/isLikeSlice";
const store = configureStore({
  reducer: {
    auth: authReduce,
    isLike: isLikeReduce,
  },
});

export default store;
