import { RobotsStructure, RobotStructure } from "../../../types/types";
import {
  createRobotActionCreator,
  deleteRobotActionCreator,
  loadRobotsActionCreator,
  robotsReducer,
} from "./robotsSlice";

describe("Given a robots reducer", () => {
  const robot1: RobotStructure = {
    id: "456456",
    name: "Róman",
    url: "url",
    stats: {
      speed: 5,
      endurance: 5,
      creationDate: "",
    },
  };
  const robot2: RobotStructure = {
    id: "98843ry",
    name: "Marc",
    url: "url",
    stats: {
      speed: 5,
      endurance: 5,
      creationDate: "",
    },
  };

  const robots: RobotsStructure = [robot1, robot2];
  describe("When it receives a list of 2 robots", () => {
    test("Then it should return a list of this 2 robots", () => {
      const loadRobotsAction = loadRobotsActionCreator(robots);
      const expectedRobotsToLoad: RobotsStructure = robots;

      const newRobots = robotsReducer([], loadRobotsAction);

      expect(newRobots).toStrictEqual(expectedRobotsToLoad);
    });
  });

  test("Then it should return a list of 1 robot", () => {
    const deleteRobotsAction = deleteRobotActionCreator(robot1);
    const expectedRobots: RobotsStructure = [robot2];

    const newRobots = robotsReducer(robots, deleteRobotsAction);

    expect(newRobots).toStrictEqual(expectedRobots);
  });

  test("Then it should return a list of 3 robots", () => {
    const createRobotsAction = createRobotActionCreator(robot1);
    const expectedRobots: RobotsStructure = [robot1, robot2, robot1];

    const newRobots = robotsReducer(robots, createRobotsAction);

    expect(newRobots).toStrictEqual(expectedRobots);
  });
});
