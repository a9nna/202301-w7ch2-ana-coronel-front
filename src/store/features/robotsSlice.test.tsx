import { RobotsStructure, RobotStructure } from "../../types/types";
import { loadRobotsActionCreator, robotsReducer } from "./robotsSlice";

describe("Given a loadRobots reducer", () => {
  const robot1: RobotStructure = {
    name: "Róman",
    url: "url",
    stats: {
      speed: 5,
      endurance: 5,
      creationDate: "",
    },
  };
  const robot2: RobotStructure = {
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
});
