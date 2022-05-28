import { createContext, useState } from "react";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
   const [isAuth, setIsAuth] = useState("Login");
   const [token, setToken] = useState("");

   const toggleAuth = (tokenReceived) => {
      setIsAuth(isAuth === "Login" ? "Logout" : "Login");
      setToken(tokenReceived);
   };

   return (
      <AuthContext.Provider value={{ isAuth, toggleAuth, token }}>
         {children}
      </AuthContext.Provider>
   );
};