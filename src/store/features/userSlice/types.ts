export interface User {
  token: string;
  id: number;
}

export interface UserStatus extends User {
  isLogged: boolean;
}
