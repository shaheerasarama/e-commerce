import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../../Contexts/UserContext";
export default function ProtectedRoutes() {
  let { isLogin } = useUserContext();
  if (isLogin === null) {
    return <></>;
  }
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
}
