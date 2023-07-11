import { configureStore } from "@reduxjs/toolkit";
import userDetail from "./redux/DataStore";
export const store = configureStore({
  reducer: {
    app: userDetail,
  },
});
