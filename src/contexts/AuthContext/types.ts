export interface IUser {
    email?: string;
    token?: string;
  }
  
  export interface IContext extends IUser {
    authenticated: boolean;
    user: IUser | null | undefined;
    login: (
      name: string,
      email: string,
      password: string,
      phone?: string,
      profilePicture?: string
      ) => void;
    logout: () => void;
    // loading: boolean;
    // writeError: (email: string, password: string) => void;
    // errorResponse: any;
    // setErrorResponse: any;
  }
  
  export interface IAuthProvider {
    children: JSX.Element;
  }
  