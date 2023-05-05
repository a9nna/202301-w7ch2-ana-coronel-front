import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserStatus } from "./types";

const initialState: UserStatus = {
  token: "",
  isLogged: false,
  username: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (
      currentUserState: UserStatus,
      action: PayloadAction<User>
    ): UserStatus => ({
      ...currentUserState,
      token: action.payload.token,
      username: action.payload.username,
      isLogged: true,
    }),
  },
});

export const { loginUser: loginUserActionCreator } = userSlice.actions;
export const userReducer = userSlice.reducer;
