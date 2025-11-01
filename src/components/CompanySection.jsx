import React from "react";
import { FaChartBar } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa6";
import { FaIndustry } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { AiFillFileExcel } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const CompanySection = () => {
  return (
    <div className="h-screen w-screen items-center justify-center flex bg-gray-200">
      <div className="h-full mt-[150px]  flex pt-4 text-center rounded-md   flex-col items-center  w-[80vw] shadow-2xl p-2 bg-white">
        <h2 className="text-4xl flex gap-2 text-center items-center font-bold text-blue-500">
          <FaChartBar /> Company Profiles Report
        </h2>
        <p className="mt-2   opacity-50">
          Search and export company data easily with filters below.
        </p>
        <div className="flex  items-center space-x-14  mt-20">
          <div className="flex flex-col items-center gap-2 text-center justify-center  ">
            <p className="font-semibold flex items-center gap-2">
              <FaBuilding />
              Company Name
            </p>
            <input
              type="text"
              className="border p-2 border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col items-center gap-2 text-center justify-center">
            <p className="font-semibold flex items-center gap-2">
              <FaIndustry />
              Industry
            </p>
            <input
              type="text"
              className="border p-2 border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col items-center gap-2 text-center justify-center">
            <p className="font-semibold flex items-center gap-2">
              <SlCalender />
              Founded After(year)
            </p>
            <input
              type="text"
              className="border p-2 border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col items-center gap-2 text-center justify-center">
            <p className="font-semibold flex items-center gap-2">
              <MdOutlineWatchLater />
              Profile Create After
            </p>
            <input
              type="date"
              placeholder="dd-mm-yyyy"
              className="border border-gray-300 p-2 rounded-md"
            />
          </div>
        </div>
        <div className="mt-10 items-center space-x-12 flex ">
          <button className="border px-4 flex items-center font-semibold gap-2 hover:bg-blue-600 cursor-pointer border-blue-600 rounded-4xl bg-blue-500 p-2 text-white">
        <FaSearch />  Search
          </button>
          <button className="border text-green-800 hover:text-white hover:bg-green-800 cursor-pointer flex items-center gap-2 font-semibold p-2 rounded-4xl border-green-600">
            <AiFillFileExcel />
            Export Excel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanySection;
