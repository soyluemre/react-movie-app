import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import Login from "../pages/Login";

const LoginProvider = () => {
  const { currentUser } = useContext(AuthContext);
  return currentUser ? <Outlet /> : <Login />;
};

export default LoginProvider;
