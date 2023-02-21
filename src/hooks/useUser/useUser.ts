import { LoginResponse, UserCredentials } from "./types";
import decodeToken from "jwt-decode";
import { useAppDispatch } from "../../store/hooks";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";

interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}

const useUser = (): UseUserStructure => {
  const apiUrl = process.env.REACT_APP_URL_API_LOGIN!;
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials) => {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: { "Content-type": "application/json" },
    });

    const { token } = (await response.json()) as LoginResponse;
    const { username, id } = decodeToken(token) as UserCredentials;

    dispatch(loginUserActionCreator({ username, id, token }));
  };

  return { loginUser };
};

export default useUser;
