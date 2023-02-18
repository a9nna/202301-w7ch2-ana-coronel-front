import Layout from "./Layout";
import { render, screen } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import GlobalStyles from "../../styles/GlobalStyles";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title 'Robots'", () => {
      const titleText = "Robots";

      render(
        <Wrapper>
          <GlobalStyles />
          <Layout />
        </Wrapper>
      );

      const expectedTitle = screen.getByRole("heading", { name: titleText });

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
