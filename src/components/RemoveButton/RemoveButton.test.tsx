import { render, screen } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import { RobotStructure } from "../../types/types";
import RemoveButton from "./RemoveButton";

describe("Given a RemoveButton component", () => {
  const robot: RobotStructure = {
    id: "",
    name: "",
    url: "",
    stats: {
      speed: 5,
      endurance: 4,
      creationDate: "",
    },
  };
  describe("When it is rendered", () => {
    test("Then it should show this icon '🗑️'", () => {
      const icon = "🗑️";

      render(
        <Wrapper>
          <RemoveButton robot={robot} />
        </Wrapper>
      );

      const expectedIcon = screen.getByRole("button", { name: icon });

      expect(expectedIcon).toBeInTheDocument();
    });
  });
});
