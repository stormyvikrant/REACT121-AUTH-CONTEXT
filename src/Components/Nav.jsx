import React, { useContext, useState } from "react";
import { AuthContext } from "../Contexts/Authcontext";
import "./Nav.css";

const Nav = () => {
   const { isAuth, toggleAuth } = useContext(AuthContext);

   const [form, setForm] = useState({
      email: "",
      password: "",
   });

   const fetchData = async () => {
      let fetched = await fetch("https://reqres.in/api/login", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(form),
      });

      fetched = await fetched.json();
      console.log(fetched);
      if (fetched.error !== "Missing email or username") {
         toggleAuth(fetched.token);
      }
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      console.log(value);

      setForm({
         ...form,
         [name]: value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      fetchData();
   };

   return (
      <div className="nav">
          <div className="Rightnav">
               <div>Home</div>
               <div>About</div>
               <div>Product</div>
            </div>

         <form onSubmit={handleSubmit} action="">
           
            <input
               onChange={handleChange}
               type="text"
               placeholder="Enter email"
               name="email"
            />
            <input
               onChange={handleChange}
               type="text"
               placeholder="Enter password"
               name="password"
            />
            <button onClick={handleSubmit}>{isAuth}</button>
         </form>
      </div>
   );
};

export default Nav;