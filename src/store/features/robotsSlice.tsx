import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RobotsStructure } from "../../types/types";

const initialState: RobotsStructure = [];

const robotsSlice = createSlice({
  name: "robots",
  initialState,
  reducers: {
    loadRobots: (
      currentState: RobotsStructure,
      action: PayloadAction<RobotsStructure>
    ) => [...action.payload],
  },
});

export const robotsReducer = robotsSlice.reducer;
export const { loadRobots: loadRobotsActionCreator } = robotsSlice.actions;
