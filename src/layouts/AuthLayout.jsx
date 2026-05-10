import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const AuthLayout = () => {
  let { loggedinUser } = useSelector((store) => store.loginUser);

  return (
    <div>{loggedinUser ? <Navigate to="/homepage" replace /> : <Outlet />}</div>
  );
};

export default AuthLayout;
