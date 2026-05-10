import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setLoginUser } from "../features/LogInSlice";
import { store } from "../app/store";

export default function LoginPage() {
  const { reguser } = useSelector((store) => store.regUser);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const [loginToggle, setToginToggle] = useState(true);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let user = reguser.find((elem) => {
      return elem.email === data.email && elem.password === data.password;
    });

    if (!user) {
      toast.error("Invalid credentials");
      return;
    }
    localStorage.setItem("loginUser", JSON.stringify(user));
    dispatch(setLoginUser(user));
    toast.success("Login successful");
    navigate("/homepage");
  };

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center pt-16 px-4 font-sans text-white">
      {/* Spotify Logo Placeholder */}
      <div className="mb-6">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10 text-white"
        >
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.241 1.2zM20.16 9.6C16.32 7.32 9.48 7.08 5.52 8.28c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.56-1.32 12.06-1.02 16.44 1.56.54.3 0.72 1.02.42 1.56-.3.54-1.02.72-1.56.42z" />
        </svg>
      </div>

      <h1 className="text-[2rem] font-bold tracking-tight mb-10">
        Welcome back
      </h1>

      <div className="w-full max-w-[320px]">
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="mb-6">
            {loginToggle ? (
              <div key={"email"}>
                <label htmlFor="email" className="block text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full bg-[#121212] border border-[#727272] rounded-[4px] px-3 py-3 text-white placeholder-gray-400 hover:border-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-colors"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1 block">
                    {errors.email.message}
                  </span>
                )}
              </div>
            ) : (
              <div key={"password"}>
                <label
                  htmlFor="password"
                  className="block text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  {...register("password", {
                    required: "password is required",
                  })}
                  className="w-full bg-[#121212] border border-[#727272] rounded-[4px] px-3 py-3 text-white placeholder-gray-400 hover:border-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-colors"
                />
                {errors.password && (
                  <span className="text-red-500 text-xs mt-1 block">
                    {errors.password.message}
                  </span>
                )}
              </div>
            )}
          </div>

          <button
            type={loginToggle ? "button" : "submit"}
            onClick={async () => {
              const valid = await trigger("email");

              if (valid) {
                setToginToggle(false);
              }
            }}
            className="w-full bg-[#1ed760] text-black font-bold rounded-full py-3.5 hover:scale-104 hover:bg-[#1fdf64] transition-all"
          >
            {loginToggle ? "Continue" : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex py-8 items-center">
          <div className="flex-grow border-t border-[#292929]"></div>
          <span className="flex-shrink-0 mx-4 text-[#a7a7a7] text-sm font-bold">
            or
          </span>
          <div className="flex-grow border-t border-[#292929]"></div>
        </div>

        {/* Social Buttons */}
        <div className="space-y-3">
          <SocialButton
            icon={<PhoneIcon />}
            text="Continue with phone number"
          />
          <SocialButton icon={<GoogleIcon />} text="Continue with Google" />
          <SocialButton icon={<FacebookIcon />} text="Continue with Facebook" />
          <SocialButton icon={<AppleIcon />} text="Continue with Apple" />
        </div>

        {/* Footer Link */}
        <div className="mt-10 text-center text-[14px] text-[#a7a7a7]">
          Don't have an account?
        </div>
        <div className="mt-2 text-center">
          <a
            href="/registration"
            className="text-white font-bold hover:underline"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

// --- Subcomponents & Icons ---

function SocialButton({ icon, text }) {
  return (
    <button className="relative w-full flex items-center justify-center rounded-full border border-[#727272] py-3 text-sm font-bold text-white hover:border-white transition-colors">
      <span className="absolute left-6">{icon}</span>
      <span>{text}</span>
    </button>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-[1.125rem] h-[1.125rem]"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path
        fill="#1877F2"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.05 20.28c-.98.68-2.05.8-3.08.8-1.09 0-2.09-.32-3.08-.8-1.12-.55-2.25-.55-3.37 0-.99.48-1.99.8-3.08.8-1.03 0-2.1-.12-3.08-.8C-.15 19.34-.41 17.65.65 15.9c1.07-1.74 2.65-2.83 4.41-2.83.99 0 1.95.34 2.89.81 1.05.51 2.14.51 3.19 0 .94-.47 1.9-.81 2.89-.81 1.76 0 3.34 1.09 4.41 2.83 1.06 1.75.8 3.44-.39 4.38zM12.03 7.25c-.15 2.33-1.63 4.36-3.72 4.98-.44-2.18.99-4.38 3.16-5.06.18-.06.37-.09.56-.09.11 0 .22.02.32.03.04.53 0 1.06-.32 1.62z" />
    </svg>
  );
}
