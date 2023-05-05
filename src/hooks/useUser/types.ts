export interface UserCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface LoginPayload {
  username: string;
  token: string;
}
