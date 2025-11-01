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
    <div className="min-h-screen w-screen items-center justify-center   flex bg-gray-200">
      <div className="h-full pb-20 mt-[50px] flex pt-4 text-center rounded-xl flex-col items-center w-[80vw] shadow-2xl p-2 bg-white">
        <h2 className="text-4xl flex gap-2 text-center items-center font-bold text-blue-500">
          <FaChartBar /> Company Profiles Report
        </h2>
        <p className="mt-2 opacity-50">
          Search and export company data easily with filters below.
        </p>

        <div className="flex items-center space-x-14 mt-20">
          <div className="flex flex-col items-center gap-2 text-center justify-center">
            <p className="font-semibold flex items-center gap-2">
              <FaBuilding />
              Company Name
            </p>
            <input type="text" className="border p-2 border-gray-400 rounded-md" />
          </div>

          <div className="flex flex-col items-center gap-2 text-center justify-center">
            <p className="font-semibold flex items-center gap-2">
              <FaIndustry />
              Industry
            </p>
            <input type="text" className="border p-2 border-gray-400 rounded-md" />
          </div>

          <div className="flex flex-col items-center gap-2 text-center justify-center">
            <p className="font-semibold flex items-center gap-2">
              <SlCalender />
              Founded After(year)
            </p>
            <input type="text" className="border p-2 border-gray-400 rounded-md" />
          </div>

          <div className="flex flex-col items-center gap-2 text-center justify-center">
            <p className="font-semibold flex items-center gap-2">
              <MdOutlineWatchLater />
              Profile Create After
            </p>
            <input
              type="date"
              placeholder="dd-mm-yyyy"
              className="border border-gray-400 p-2 rounded-md"
            />
          </div>
        </div>

        <div className="mt-10 items-center space-x-12 flex">
          <button className="border px-4 flex items-center font-semibold gap-2 hover:bg-blue-600 cursor-pointer border-blue-600 rounded-4xl bg-blue-500 p-2 text-white">
            <FaSearch /> Search
          </button>
          <button className="border text-green-800 hover:text-white hover:bg-green-800 cursor-pointer flex items-center gap-2 font-semibold p-2 rounded-4xl border-green-600">
            <AiFillFileExcel />
            Export Excel
          </button>
        </div>

        <div className="mt-20 w-full overflow-x-auto">
          <table className="w-full border border-gray-400">
            <thead>
              <tr className="bg-blue-600 text-white border border-gray-400">
                <th className="p-3 border border-gray-400 font-normal">Company</th>
                <th className="p-3 border border-gray-400 font-normal w-[200px]">Email</th>
                <th className="p-3 border border-gray-400 font-normal w-[150px]">Phone</th>
                <th className="p-3 border border-gray-400 font-normal">Industry</th>
                <th className="p-3 border border-gray-400 font-normal">Size</th>
                <th className="p-3 border border-gray-400 font-normal">Headquarters</th>
                <th className="p-3 border border-gray-400 font-normal">Type</th>
                <th className="p-3 border border-gray-400 font-normal">Founded</th>
                <th className="p-3 border border-gray-400 font-normal w-[200px]">Specialities</th>
                <th className="p-3 border border-gray-400 font-normal">Created At</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="border border-gray-400 p-2">Example Inc.</td>
                <td className="border border-gray-400 p-2">info@example.com</td>
                <td className="border border-gray-400 p-2">1234567890</td>
                <td className="border border-gray-400 p-2">IT Services</td>
                <td className="border border-gray-400 p-2">200</td>
                <td className="border border-gray-400 p-2">New York</td>
                <td className="border border-gray-400 p-2">Private</td>
                <td className="border border-gray-400 p-2">2012</td>
                <td className="border border-gray-400 p-2">Software, Cloud, AI</td>
                <td className="border border-gray-400 p-2">01-11-2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompanySection;
