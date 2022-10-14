import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import loadingSlice from "../pages/Loading/loadingSlice";

const rootReducer = combineReducers({
  loading: loadingSlice,
  login: authSlice,
});
export default configureStore({
  reducer: rootReducer,
});
