import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RobotsStructure, RobotStructure } from "../../../types/types";

const initialState: RobotsStructure = [];

const robotsSlice = createSlice({
  name: "robots",
  initialState: initialState,
  reducers: {
    loadRobots: (currentRobots, action: PayloadAction<RobotsStructure>) => [
      ...action.payload,
    ],
    deleteRobot: (currentRobots, action: PayloadAction<RobotStructure>) =>
      currentRobots.filter((robot) => robot.id !== action.payload.id),
    createRobot: (currentRobots, action: PayloadAction<RobotStructure>) => [
      ...currentRobots,
      action.payload,
    ],
  },
});

export const {
  loadRobots: loadRobotsActionCreator,
  deleteRobot: deleteRobotActionCreator,
  createRobot: createRobotActionCreator,
} = robotsSlice.actions;
export const robotsReducer = robotsSlice.reducer;
