export interface IUser {
  email?: string;
  token?: string;
}

export interface IContext extends IUser {
  authenticated: boolean;
  user: IUser | null | undefined;
  // adicionado o ? provisoriamente para para o erro de renderização
  register?: (
    name: string,
    email: string,
    password: string,
  ) => void;
  logout: () => void;
  // login: (
  //   name: string,
  //   email: string,
  //   password: string,
  //   phone?: string,
  //   profilePicture?: string
  //   ) => void;
  // loading: boolean;
  // writeError: (email: string, password: string) => void;
  // errorResponse: any;
  // setErrorResponse: any;
}

export interface IAuthProvider {
  children: JSX.Element;
}
