import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accesToken } = action.payload;
      state.user = user;
      state.token = accesToken;
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});

const { reducer } = authSlice;
export const { setCredentials, logOut } = authSlice.actions;
export default reducer;
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentTokenr = (state) => state.auth.token;
