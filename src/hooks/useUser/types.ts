export interface UserCredentials {
  username: string;
  password: string;
  id: number;
}

export interface LoginResponse {
  token: string;
}

export interface LoginPayload {
  username: string;
  id: number;
  token: string;
}
