import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserStatus } from "./types";

const initialState: UserStatus = {
  token: "",
  id: 0,
  isLogged: false,
  username: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (currentUserState, action: PayloadAction<User>) => ({
      ...action.payload,
      isLogged: true,
    }),
  },
});

export const { loginUser: loginUserActionCreator } = userSlice.actions;
export const userReducer = userSlice.reducer;
