import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { requestApiMultiPart } from "../../services/api";
import { IAuthProvider, IContext, IUser } from "./types";

export const AuthContext = createContext({} as IContext);

export function AuthProvider({ children }: IAuthProvider) {
    const [user, setUser] = useState<IUser | null>();
    // const [loading, setLoading] = useState(true);
    //   const [errorResponse, setErrorResponse] = useState<any>(undefined);
    const navigate = useNavigate();

    // useEffect(() => {
    //     const isLogged = localStorage.getItem("user");
    //     if (isLogged) {
    //         setUser(JSON.parse(isLogged));
    //     }
    //     setLoading(false);
    // }, []);

    // async function login(name: string, email: string, password: string, phone: string, profilePicture: string) {
    //     try {
    //         const response = await requestApiMultiPart.post("/users", {
    //             name: name,
    //             email: email,
    //             senha: password,
    //             phone: phone,
    //             profilePicture: profilePicture,
    //         });
    //         //   localStorage.setItem("user", JSON.stringify(response.data));
    //         //   setUser(response.data);
    //         //   navigate("/home");
    //         //   return await response.data;
    //     } catch (error) {
    //         "error";
    //     }
    // }

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
    };

    return (
        <AuthContext.Provider
            value={{
                authenticated: !!user,
                user,
                //comentado provisoriamente para evitar o erro de renderização
                // register,
                logout,
                // login,
                // loading,
                // writeError,
                // errorResponse,
                // setErrorResponse,
            }}
        >
            {children}           
        </AuthContext.Provider>
    );
}

//   function writeError(email: string, password: string, confirmPassword: string) {

//     if (email == "") {
//       setErrorResponse("empty");
//     } else if (password == "") {
//       setErrorResponse("empty");
//     } else {
//       login(name, email, password);
//     }
//   }