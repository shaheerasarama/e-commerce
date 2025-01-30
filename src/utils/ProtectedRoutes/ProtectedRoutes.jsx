import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoutes() {
let {isLoggedIn} = useSelector((state) => state.user);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
