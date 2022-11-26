import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { forgotPassword, signIn, signUpWithGoogle } from "../auth/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
    console.log(email, password);
  };

  const handleGoogleProvider = () => {
    signUpWithGoogle(navigate);
  };

  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center">
      <div
        className={`mt-[10vh] mx-auto overflow-hidden relative w-[380px] h-[520px] rounded-[8px] bg-[#1c1c1c] before:content-[""] before:absolute before:w-[380px] before:h-[420px] before:top-[-50%] before:left-[-50%] after:content-[""] after:absolute after:w-[380px] after:h-[420px] after:top-[-50%] after:left-[-50%] custom-linear-gradient`}
      >
        <form
          className="absolute inset-[5px] rounded-[8px] bg-[#28292d] z-[10] form flex flex-col p-20"
          onSubmit={handleSubmit}
        >
          <h2 className="text-[#ff4b45] text-2xl font-[500] text-center tracking-[0.1em]">
            Sign In
          </h2>
          <div className="relative w-[300px] mt-[35px] inputbox">
            <input
              type="email"
              required
              className="relative w-[100%] inputbox-input bg-transparent outline-none text-[#000000] tracking-[0.05em]"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="absolute left-0 inputbox-span font-[1em] text-[#8f8f8f] tracking-[0.05em]">
              Email
            </span>
            <i className="absolute left-0 bottom-0 w-[100%] h-[2px] bg-[#ff4b45] rounded-[15px]"></i>
          </div>
          <div className="relative w-[300px] mt-[35px] inputbox">
            <input
              type="password"
              required
              className="relative w-[100%] inputbox-input bg-transparent outline-none text-[#000000] font-[1em] tracking-[0.05em]"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="absolute left-0 inputbox-span font-[1em] text-[#8f8f8f] tracking-[0.05em]">
              Password
            </span>
            <i className="absolute left-0 bottom-0 w-[100%] h-[2px] bg-[#ff4b45] rounded-[15px]"></i>
          </div>

          <input
            className="text-center border-none outline-none bg-[#ff4b45] custom-input  mt-[40px] rounded-[15px] font-[600] cursor-pointer"
            type="submit"
            value="Login"
          />
          <button
            className="flex justify-evenly outline-none outline-red-500 text-[#b6b5b5] bg-[#212020] custom-input items-center mt-[15px] rounded-[15px] font-[600] cursor-pointer"
            type="button"
            onClick={handleGoogleProvider}
          >
            Continue with Google
            <GoogleIcon color="currentColor" />
          </button>
          <div className="flex justify-between mt-[35px]">
            <span
              role="button"
              className="links-a font-[0.75em] cursor-pointer decoration-none text-[#8f8f8f]"
              onClick={() => forgotPassword(email)}
            >
              Forgot Password
            </span>
            <Link
              className="links-a font-[0.75em] cursor-pointer decoration-none text-[#8f8f8f]"
              to="/register"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
