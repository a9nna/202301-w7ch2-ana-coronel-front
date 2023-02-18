import { renderHook } from "@testing-library/react";
import useApi from "./useApi";
import Wrapper from "../mocks/Wrapper";

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

      await getRobots;
    });
  });
});
