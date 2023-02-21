export interface User {
  token: string;
  id: number;
  username: string;
}

export interface UserStatus extends User {
  isLogged: boolean;
}
