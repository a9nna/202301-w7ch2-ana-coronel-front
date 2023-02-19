import { useCallback } from "react";
import {
  deleteRobotActionCreator,
  loadRobotsActionCreator,
} from "../store/features/robotsSlice";
import { useAppDispatch } from "../store/hooks";
import { RobotStructure } from "../types/types";

const deleteRobot = "/delete/";

const useApi = () => {
  const dispatch = useAppDispatch();

  const getRobots = useCallback(async () => {
    try {
      const response = await fetch(process.env.REACT_APP_URL_API!);
      const robots = await response.json();

      if (!response.ok) {
        return;
      }

      dispatch(loadRobotsActionCreator(robots.robots));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch]);

  const deleteRobots = useCallback(
    async (robot: RobotStructure) => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_URL_API}${deleteRobot}${robot.id}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          return;
        }

        dispatch(deleteRobotActionCreator(robot));
      } catch (error) {
        return (error as Error).message;
      }
    },
    [dispatch]
  );

  return { getRobots, deleteRobots };
};

export default useApi;
