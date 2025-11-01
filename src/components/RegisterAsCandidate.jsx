import React from "react";
import { SlCalender } from "react-icons/sl";
import { HiUserAdd } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const RegisterAsCandidate = () => {
  const navigate=useNavigate()
  return (
    <div className="h-[200vh] scroll-smooth  w-screen bg-gray-200 flex items-center justify-center ">
      <div className="h-[200vh] flex  text-center items-center flex-col w-[500px] bg-white border border-white">
        <h1 className="text-2xl mt-6 flex gap-2 text-center justify-center items-center">
          <HiUserAdd className="text-blue-500 text-3xl" /> Register As Candidate
        </h1>
        <div className="mt-[100px] space-y-6">
          <div className="flex flex-col text-start space-y-3">
            <p>Username*</p>
            <input
              type="text"
              className="w-[400px] border border-gray-400 rounded-md px-3 py-2  focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xl"
            />
          </div>
          <div className="flex flex-col text-start space-y-3">
            <p>Email*</p>
            <input
              type="text"
              className="w-[400px] border border-gray-400 rounded-md px-3 py-2  focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xl"
            />
          </div>
          <div className="flex flex-col text-start space-y-3">
            <p>Password*</p>
            <input
              type="text"
              className="w-[400px] border border-gray-400 rounded-md px-3 py-2  focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xl"
            />
          </div>
          <div className="flex flex-col text-start space-y-3">
            <p>Confirm Password*</p>
            <input
              type="text"
              className="w-[400px] border border-gray-400 rounded-md px-3 py-2  focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xl"
            />
          </div>
          <div className="flex flex-col text-start space-y-3">
            <p>Name*</p>
            <input
              type="text"
              className="w-[400px] border border-gray-400 rounded-md px-3 py-2  focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xl"
            />
          </div>
          <div className="flex flex-col text-start space-y-3">
            <p>Mobile*</p>
            <input
              type="text"
              className="w-[400px] border-opacity-10 border border-gray-400 rounded-md px-3 py-2 shadow-xl  focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col text-start space-y-3">
            <p>Status*</p>
            <label>
              <input type="radio" />
              Fresher*
            </label>
            <label>
              <input type="radio" />
              Experienced*
            </label>
          </div>
          <div className="flex flex-col text-start space-y-3">
            <p>Gender*</p>
            <select name="" id="">
              <option value="">Male </option>
              <option value="">FeMale </option>
              <option value="">Other </option>
            </select>
          </div>
          <div className="flex flex-col text-start space-y-3">
            <p>Dob*</p>
            <input
              type="dob"
              placeholder="dd-mm-yy"
              className="w-[400px] border-opacity-10 border border-gray-400 rounded-md px-3 py-2 shadow-xl  focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col text-start space-y-3">
            <p>Education*</p>
            <input
              type="dob"
              className="w-[400px] h-[200px] border-opacity-10 border border-gray-400 rounded-md px-3 py-2 shadow-xl  focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col text-start space-y-3">
            <p>Work Exp*</p>
            <input
              type="dob"
              className="w-[400px] h-[200px] border-opacity-10 border border-gray-400 rounded-md px-3 py-2 shadow-xl  focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col text-start space-y-3">
            <p>Skills*</p>
            <input
              type="dob"
              className="w-[400px] h-[200px] border-opacity-10 border border-gray-400 rounded-md px-3 py-2 shadow-xl  focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col text-start space-y-3">
            <p>Resume*</p>
            <div className="flex flex-row">
              <button className="bg-gray-200 p-1 border hover:bg-gray-300  shadow-2xl ">
                Choose File
              </button>
              <input
                className="relative w-[300px] border-l-0 rounded-r-md  border-opacity-10 border border-gray-400 rounded-md px-3  shadow-xl  focus:outline-none focus:ring-1 focus:ring-blue-500"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col text-start space-y-3">
            <p>Photo*</p>
            <div className="flex flex-row">
              <button className="bg-gray-200 p-1 border hover:bg-gray-300  shadow-2xl ">
                No File Choosen
              </button>
              <input
                className="relative w-[270px] border-l-0  border-opacity-10 border border-gray-400 rounded-r-md px-3  shadow-xl  focus:outline-none focus:ring-1 focus:ring-blue-500"
                type="text"
              />
            </div>
          </div>
          <button className="bg-blue-700 flex items-center gap-2 justify-center h-[30px] w-[400px] text-white font-semibold rounded-md">
            <HiUserAdd className="text-2xl" /> 
            Register
          </button>
        </div>
       <p className="mt-4">Already Have An Acount?<span onClick={()=>navigate("/login")} className="text-blue-600 cursor-pointer font-semibold ml-2 text-center" href="">Login Here</span> </p> 
      </div>
    </div>
  );
};

export default RegisterAsCandidate;
