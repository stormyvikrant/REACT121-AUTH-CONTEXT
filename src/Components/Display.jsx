import React, { useContext } from "react";
import { AuthContext } from "../Contexts/Authcontext";

const Display = () => {

   const { isAuth, token } = useContext(AuthContext);

   return (
      <div
         style={{
            display: "flex",
            justifyContent: "center",
            gap: "150px",
            fontSize: "1.4em",
         }}
      >
         <h1>Status: {isAuth === "Login" ? "Logged Out" : "Logged In"}</h1>
         <h3>Token: {token}</h3>
      </div>
   );
};

export default Display;