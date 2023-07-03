import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);

    const handleLogin = () => {
      setIsAuth(true);
    }

    const handleLogout = () => {
        setIsAuth(false);
        localStorage.removeItem("primelab");
    };
    

    return ( 
        <AuthContext.Provider 
          value={{ isAuth, handleLogin, handleLogout }}
        >
          {children}
        </AuthContext.Provider>
    )
}