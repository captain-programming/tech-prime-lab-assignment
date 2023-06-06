import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);

    const handleLogin = () => {
      setIsAuth(true);
    }

    const handleLogout = () => {
        setIsAuth(false);
    };
    

    return ( 
        <AuthContext.Provider 
          value={{ isAuth, handleLogin, handleLogout }}
        >
          {children}
        </AuthContext.Provider>
    )
}