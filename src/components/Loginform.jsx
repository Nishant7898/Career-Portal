import React, { useState } from "react";
import { HiUserAdd } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Loginform = () => {
  const navigate = useNavigate();
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const savedData = JSON.parse(localStorage.getItem("candidateData"));

    // 🔹 Step 1: Check if fields are empty
    if (!emailOrUsername.trim() && !password.trim()) {
      alert("Please enter your username/email and password.");
      return;
    } else if (!emailOrUsername.trim()) {
      alert("Please enter your username or email.");
      return;
    } else if (!password.trim()) {
      alert("Please enter your password.");
      return;
    }

    // 🔹 Step 2: Check if user is registered
    if (!savedData) {
      alert("No registered user found. Please register first!");
      return;
    }

    // 🔹 Step 3: Validate username/email
    const isUsernameOrEmailMatch =
      savedData.username === emailOrUsername || savedData.email === emailOrUsername;

    if (!isUsernameOrEmailMatch) {
      alert("Username or Email not found. Please check your credentials.");
      return;
    }

    // 🔹 Step 4: Validate password
    if (savedData.password !== password) {
      alert("Incorrect password. Please try again.");
      return;
    }

    // 🔹 Step 5: Success
    alert("Login Successful!");
    navigate("/profile");
  };

  return (
    <div className="h-screen items-center justify-center flex w-screen bg-gray-200">
      <div className="h-[500px] px-10 rounded-md flex flex-col w-[450px] shadow-2xl bg-white">
        <h2 className="text-4xl ml-16 text-blue-900 font-bold mt-3">
          Welcome Back
        </h2>
        <p className="mt-2 ml-16 opacity-50">
          Login With Your Credentials Below
        </p>

        <div>
          <div className="flex mt-5 flex-col text-start">
            <p>Username Or Email</p>
            <input
              className="bg-gray-200 mt-2 p-1 shadow-2xs"
              type="text"
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
            />
          </div>

          <div className="flex mt-5 flex-col text-start">
            <p>Password</p>
            <input
              className="bg-gray-200 mt-2 p-1 shadow-2xs"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="text-center justify-between flex items-center mt-4">
            <span className="text-center items-center flex-row flex gap-2">
              <input className="text-center mt-1 items-center flex" type="checkbox" />
              Remember Me
            </span>
            <a className="underline cursor-pointer text-blue-500">
              Forgot Password?
            </a>
          </div>
        </div>

        <button
          onClick={handleLogin}
          className="bg-blue-800 mt-4 p-2 font-semibold cursor-pointer hover:bg-blue-900 text-white rounded-md"
        >
          Login
        </button>

        <div className="flex mt-10 space-y-2 flex-col items-center justify-center">
          <p className="opacity-50">Don't Have An Account?</p>
          <button
            onClick={() => navigate("/choose")}
            className="text-blue-500 font-semibold flex gap-2 text-center items-center cursor-pointer border border-blue-500 p-2 hover:bg-blue-800 hover:text-white rounded-md"
          >
            <HiUserAdd className="text-2xl" /> Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Loginform;
