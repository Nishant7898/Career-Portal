import React from "react";
import { FaBriefcase } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className=" ">
      <div className="bg-blue-800 flex px-20 justify-between h-[50px] text-white items-center">
        <p className="text-2xl flex gap-2 text-center items-center  font-bold">
          <FaBriefcase />
          Career Portal
        </p>
        <div className="flex gap-3">
          <button>Home</button>
          <button>Jobs</button>
          <button>Companies</button>
          <button>Profile</button>
          <button>Report</button>
          <button>Login</button>
        </div>
      </div>
    
    </div>
  );
};

export default Navbar;
