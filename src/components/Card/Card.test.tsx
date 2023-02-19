import Card from "./Card";
import { render, screen } from "@testing-library/react";
import { RobotStructure } from "../../types/types";
import Wrapper from "../../mocks/Wrapper";

const terminatorRobot: RobotStructure = {
  id: "",
  name: "Terminator",
  url: "",
  stats: {
    speed: 1,
    endurance: 1,
    creationDate: "",
  },
};

describe("Given a Card component", () => {
  describe("When it is rendered", () => {
    render(
      <Wrapper>
        <Card robot={terminatorRobot} />
      </Wrapper>
    );
    test("Then it should show an image with the alt text 'Terminator'", () => {
      const altText = "Terminator";

      const expectedImage = screen.getByAltText(altText);

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show a heading with the text 'Terminator'", () => {});

    const titleText = "Terminator";

    const expectedTitle = screen.getByRole("heading", { name: titleText });

    expect(expectedTitle).toBeInTheDocument();
  });

  test("Then it should show a button with this icon '🗑️'", () => {
    const deleteIcon = "🗑️";
    render(
      <Wrapper>
        <Card robot={terminatorRobot} />
      </Wrapper>
    );

    const expectedButtoIcon = screen.getByRole("button", { name: deleteIcon });

    expect(expectedButtoIcon).toBeInTheDocument();
  });
});
