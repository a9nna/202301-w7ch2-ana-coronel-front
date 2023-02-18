import Card from "./Card";
import { render, screen } from "@testing-library/react";
import { RobotStructure } from "../../types/types";

const terminatorRobot: RobotStructure = {
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
    render(<Card robot={terminatorRobot} />);
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

  test("Then it should show a button with the aria-label text 'delete button'", () => {
    const deleteIcon = "delete button";
    render(<Card robot={terminatorRobot} />);

    const expectedButtoIcon = screen.getByRole("button", { name: deleteIcon });

    expect(expectedButtoIcon).toBeInTheDocument();
  });
});
