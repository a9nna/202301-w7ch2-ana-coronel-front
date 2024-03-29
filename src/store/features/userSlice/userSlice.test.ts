import { User, UserStatus } from "./types";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given the userReducer function", () => {
  describe("When it receives the current user and an action to login a new user", () => {
    test.only("Then it should return the new user with its property isLogged to true", () => {
      const currentUser: UserStatus = {
        token: "",
        isLogged: false,
        username: "",
      };
      const newUser: User = {
        token: "dhui8a2j!",
        username: "",
      };
      const expectedNewUser: UserStatus = {
        token: "dhui8a2j!",
        isLogged: true,
        username: "",
      };

      const user = userReducer(currentUser, loginUserActionCreator(newUser));

      expect(user).toStrictEqual(expectedNewUser);
    });
  });
});
