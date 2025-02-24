export interface IAuthContextType {
  token: string | null;
  login: (newToken: string) => void;
  logout: () => void;
  user: IUser;
  setUser: (u: IUser) => void;
  admin: boolean;
  setAdmin: (v: boolean) => void;
}

export interface IUser {
  createdAt: string;
  email: string;
  id: string;
  status: string;
  streak: number;
}