export interface User {
  token: string;
  username: string;
}

export interface UserStatus extends User {
  isLogged: boolean;
}
