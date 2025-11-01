import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaMoneyCheck } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const Jobsection = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    // 🔹 Check if user is logged in
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const candidateData = JSON.parse(localStorage.getItem("candidateData"));

    if (!loggedInUser || !candidateData) {
      alert("You are not logged in! Please log in to apply for jobs.");
      navigate("/login"); // redirect to login page
      return;
    }

    // ✅ If logged in, go to the submit page
    navigate("/submit");
  };

  return (
    <div className="h-screen items-center flex-col justify-center flex w-screen bg-gray-100">
      <h2 className="text-4xl text-blue-500 font-bold">Available Job Openings</h2>
      <p className="opacity-50 mt-3">
        Explore the Latest Opportunities And Apply to Your Position That Suit Your Skills.
      </p>

      <div className="grid grid-cols-3 mt-20 bg-white h-[230px] px-5 rounded-md shadow-2xl w-[400px]">
        <div>
          <h2 className="text-2xl mt-2 text-blue-600 font-bold rounded-md">Title</h2>
          <div className="mt-4 space-y-2">
            <p className="flex font-bold gap-1 items-center">
              <IoLocationOutline /> Location:
            </p>
            <p className="flex font-bold gap-1 items-center">
              <FaMoneyCheck /> Salary:
            </p>
            <p className="flex font-bold gap-1 items-center">
              <FaBuilding /> Posted By:
            </p>
            <p className="flex font-bold gap-1 items-center">
              <SlCalender /> Posted On:
            </p>
          </div>

          <button
            onClick={handleApplyClick}
            className="border absolute text-blue-700 ml-[250px] p-2 hover:bg-blue-800 hover:text-white cursor-pointer rounded-md flex justify-end gap-2 items-center border-blue-500"
          >
            <CiLocationArrow1 /> Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobsection;
