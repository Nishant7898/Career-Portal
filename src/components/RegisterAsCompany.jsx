import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiUserAdd } from "react-icons/hi";
const RegisterAsCompany = () => {
    const navigate=useNavigate()
  return (
      <div  className="min-h-screen mb-10    scroll-smooth  flex items-center justify-center ">
        <div className="h-full flex  text-center items-center flex-col w-[500px] bg-white border border-white">
          <h1 className="text-2xl mt-6 flex gap-2 text-center justify-center items-center">
            <HiUserAdd className="text-blue-500 text-3xl" /> Register As Company
          </h1>
          <div className="mt-[50px] space-y-6">
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
              <p>Company Name*</p>
              <input
                type="text"
                className="w-[400px] border border-gray-400 rounded-md px-3 py-2  focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xl"
              />
            </div>
              <div className="flex flex-col text-start space-y-3">
              <p>Industry</p>
              <input
                type="text"
                className="w-[400px] border border-gray-400 rounded-md px-3 py-2  focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xl"
              />
            </div>
              <div className="flex flex-col text-start space-y-3">
              <p>Company Size</p>
              <input
                type="text"
                className="w-[400px] border border-gray-400 rounded-md px-3 py-2  focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xl"
              />
            </div>
              <div className="flex flex-col text-start space-y-3">
              <p>Headquarters</p>
              <input
                type="text"
                className="w-[400px] border border-gray-400 rounded-md px-3 py-2  focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xl"
              />
            </div>
              <div className="flex flex-col text-start space-y-3">
              <p>Company Type</p>
              <input
                type="text"
                className="w-[400px] border border-gray-400 rounded-md px-3 py-2  focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xl"
              />
            </div>
              <div className="flex flex-col text-start space-y-3">
              <p>Founded</p>
              <input
                type="text"
                className="w-[400px] border border-gray-400 rounded-md px-3 py-2  focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xl"
              />
            </div>
              <div className="flex flex-col text-start space-y-3">
              <p>Specialities</p>
              <input
                type="text"
                className="w-[400px] border h-[200px] border-gray-400 rounded-md px-3 py-2  focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xl"
              />
            </div>
              <div className="flex flex-col text-start space-y-3">
              <p>Company Address</p>
              <input
                type="address"
                className="w-[400px] h-[200px] border border-gray-400 rounded-md px-3 py-2  focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xl"
              />
            </div>
              <div className="flex flex-col text-start space-y-3">
              <p>Company Phone</p>
              <input
                type="text"
                className="w-[400px] border border-gray-400 rounded-md px-3 py-2  focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xl"
              />
            </div>
           
            <button className="bg-blue-700 flex items-center gap-2 justify-center h-[30px] w-[400px] text-white font-semibold rounded-md">
              <HiUserAdd className="text-2xl" /> 
              Register
            </button>
          </div>
         <p className="mt-4 pb-10">Already Have An Acount?<span onClick={()=>navigate("/login")} className="text-blue-600 cursor-pointer font-semibold ml-2 text-center" href="">Login Here</span> </p> 
        </div>
      </div>
    );
  };
  
 
  

export default RegisterAsCompany;
