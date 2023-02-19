import { renderHook } from "@testing-library/react";
import useApi from "./useApi";
import Wrapper from "../mocks/Wrapper";
import { RobotStructure } from "../types/types";

const mockTerminatorRobot: RobotStructure = {
  id: "744637g",
  name: "Terminator",
  url: "jlbhjl",
  stats: {
    speed: 1,
    endurance: 1,
    creationDate: "",
  },
};

const mockDispatcher = jest.fn();

jest.mock("../store/hooks", () => ({
  ...jest.requireActual("../store/hooks"),
  useAppDispatch: () => mockDispatcher,
}));

describe("Given the useApi custom hook", () => {
  describe("When the getRobots function is called", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { getRobots },
        },
      } = renderHook(() => useApi(), {
        wrapper({ children }) {
          return <Wrapper>{children}</Wrapper>;
        },
      });

      await getRobots();

      expect(mockDispatcher).toHaveBeenCalled();
    });
  });

  describe("When the deleteRobots function is called with a terminator robot", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { deleteRobots },
        },
      } = renderHook(() => useApi(), {
        wrapper({ children }) {
          return <Wrapper>{children}</Wrapper>;
        },
      });

      await deleteRobots(mockTerminatorRobot);

      expect(mockDispatcher).toHaveBeenCalled();
    });
  });
});
