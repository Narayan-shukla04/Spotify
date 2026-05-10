import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedLayout = () => {
  const { loggedinUser } = useSelector((store) => store.loginUser);

  if (!loggedinUser) {
    return <Navigate to="/login"  />;
  }

  return <Outlet />;
};

export default ProtectedLayout;
