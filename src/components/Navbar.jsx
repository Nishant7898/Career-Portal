import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoMdExit } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();

  // ✅ Check if user is logged in
  const isLoggedIn = localStorage.getItem("candidateData");

  // ✅ Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("candidateData");
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <div>
      <div className="bg-blue-800 flex px-20 justify-between h-[50px] text-white items-center">
        <p className="text-2xl flex gap-2 text-center items-center font-bold">
          <FaBriefcase />
          Career Portal
        </p>

        <div className="flex gap-3">
          <button>Home</button>
          <button
            className="focus:active:text-yellow-500 cursor-pointer hover:text-yellow-400"
            onClick={() => navigate("/jobs")}
          >
            Jobs
          </button>
          <button
            className="focus:active:text-yellow-500 cursor-pointer hover:text-yellow-400"
            onClick={() => navigate("/companies")}
          >
            Companies
          </button>
          <button className="focus:active:text-yellow-500 cursor-pointer hover:text-yellow-400" onClick={() => navigate("/profile")}>Profile</button>
          <button>Report</button>

          {/* ✅ Show Login or Logout dynamically */}
          {isLoggedIn ? (
            <button
              className="cursor-pointer flex gap-2 items-center hover:text-yellow-500 focus:active:text-yellow-500"
              onClick={handleLogout}
            >
              <IoMdExit />
              Logout
            </button>
          ) : (
            <button
              className="cursor-pointer hover:text-yellow-500 focus:active:text-yellow-500"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
