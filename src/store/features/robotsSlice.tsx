import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RobotsStructure, RobotStructure } from "../../types/types";

const initialState: RobotsStructure = [];

const robotsSlice = createSlice({
  name: "robots",
  initialState: initialState,
  reducers: {
    loadRobots: (currentRobots, action: PayloadAction<RobotsStructure>) => [
      ...action.payload,
    ],
    deleteRobot: (currentRobots, action: PayloadAction<RobotStructure>) => {
      currentRobots.filter((robot) => robot.id !== action.payload.id);
    },
  },
});

export const {
  loadRobots: loadRobotsActionCreator,
  deleteRobot: deleteRobotActionCreator,
} = robotsSlice.actions;
export const robotsReducer = robotsSlice.reducer;
