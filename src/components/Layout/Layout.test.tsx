import Layout from "./Layout";
import { render, screen } from "@testing-library/react";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title 'Robots'", () => {
      const titleText = "Robots";

      render(<Layout />);

      const expectedTitle = screen.getByRole("heading", { name: titleText });

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
