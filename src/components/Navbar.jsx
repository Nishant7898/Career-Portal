import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const candidateData = localStorage.getItem("candidateData");
  const companyData = localStorage.getItem("companyData");

  const isCandidate = !!candidateData;
  const isCompany = !!companyData;

  const handleLogout = () => {
    localStorage.removeItem("candidateData");
    localStorage.removeItem("companyData");
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <div className="bg-blue-800 flex px-20 justify-between h-[50px] text-white items-center">
      {/* Logo */}
      <p className="text-2xl flex gap-2 items-center font-bold cursor-pointer" onClick={() => navigate("/")}>
        <FaBriefcase />
        Career Portal
      </p>

      {/* Navigation Buttons */}
      <div className="flex gap-5 items-center">
        <button className="hover:text-yellow-400" onClick={() => navigate("/")}>
          Home
        </button>

        <button className="hover:text-yellow-400" onClick={() => navigate("/jobs")}>
          Jobs
        </button>

        {/* ✅ Companies only for candidates, not for companies */}
        <button
          className="hover:text-yellow-400"
          onClick={() => (isCompany ? navigate("/access-denied") : navigate("/companies"))}
        >
          Companies
        </button>

        <button className="hover:text-yellow-400" onClick={() => navigate("/profile")}>
          Profile
        </button>

        {/* ✅ Report page: candidate gets access denied */}
        <button
          className="hover:text-yellow-400"
          onClick={() => (isCandidate ? navigate("/access-denied1") : navigate("/reports"))}
        >
          Report
        </button>

        {/* ✅ Login / Logout */}
        {(isCandidate || isCompany) ? (
          <button
            className="cursor-pointer flex gap-2 items-center hover:text-yellow-400"
            onClick={handleLogout}
          >
            <IoMdExit />
            Logout
          </button>
        ) : (
          <button
            className="cursor-pointer hover:text-yellow-400"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
