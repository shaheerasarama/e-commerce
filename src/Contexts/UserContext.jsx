import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
let userContaxt = createContext(null);
//check for login //change login status : when user login// change login status : when user logout // get user Data
export default function UserContext({ children }) {
  const [isLogin, setIsLogin] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  let userLogin = () => {
    setIsLogin(true);
  };

  let userLogOut = () => {
    localStorage.removeItem("userToken");
    setIsLogin(false);
    navigate("/");
  };
  return (
    <userContaxt.Provider
      value={{ isLogin, userLogin, setIsLogin, userLogOut }}
    >
      {children}
    </userContaxt.Provider>
  );
}
export function useUserContext() {
  return useContext(userContaxt);
}
