import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import AuthLayout from "../layouts/AuthLayout";
import HomeLayout from "../layouts/HomeLayout";
import ProtectedLayout from "../layouts/ProtectedLayout";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Route>

        <Route element={<ProtectedLayout />}>
          <Route path="/homepage" element={<HomeLayout />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
