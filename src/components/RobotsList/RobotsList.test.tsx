import { render, screen } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import { RobotsStructure } from "../../types/types";
import RobotsList from "./RobotsList";

const mockRobotsList: RobotsStructure = [
  {
    id: "",
    name: "Terminator",
    url: "",
    stats: {
      speed: 1,
      endurance: 1,
      creationDate: "",
    },
  },
  {
    id: "",
    name: "C3PO",
    url: "",
    stats: {
      speed: 1,
      endurance: 1,
      creationDate: "",
    },
  },
];

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppSelector: () => mockRobotsList,
}));

describe("Given a RobotsList component", () => {
  describe("When rendered", () => {
    test("Then it should show the robots of the list", () => {
      render(
        <Wrapper>
          <RobotsList />
        </Wrapper>
      );

      const listRobots = screen.getAllByRole("listitem");

      listRobots.forEach((robot) => expect(robot).toBeInTheDocument());
    });
  });
});
