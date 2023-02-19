import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RobotsStructure } from "../../types/types";

const initialState: RobotsStructure = [];

const robotsSlice = createSlice({
  name: "robots",
  initialState: initialState,
  reducers: {
    loadRobots: (currentState, action: PayloadAction<RobotsStructure>) => [
      ...action.payload,
    ],
  },
});

export const { loadRobots: loadRobotsActionCreator } = robotsSlice.actions;
export const robotsReducer = robotsSlice.reducer;
