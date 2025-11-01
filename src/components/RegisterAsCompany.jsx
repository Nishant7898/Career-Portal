import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiUserAdd } from "react-icons/hi";

const RegisterAsCompany = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    industry: "",
    size: "",
    headquarters: "",
    type: "",
    founded: "",
    specialities: "",
    address: "",
    phone: "",
    createdAt: new Date().toLocaleString(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    localStorage.setItem("companyData", JSON.stringify(formData));
    alert("Company registered successfully!");
    navigate("/company-profile");
  };

  return (
    <div className="min-h-screen mb-10  scroll-smooth flex items-center justify-center">
      <div className="h-full mt-10 shadow-2xl rounded-2xl flex text-center items-center flex-col w-[500px] bg-white border border-white">
        <h1 className="text-2xl mt-6 flex gap-2 text-center justify-center items-center">
          <HiUserAdd className="text-blue-500 text-3xl" /> Register As Company
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mt-[50px] space-y-6">
            <div className="flex flex-col text-start space-y-3">
              <p>Username*</p>
              <input
                name="username"
                value={formData.username}
                onChange={handleChange}
                type="text"
                className="w-[400px] border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xl"
              />
            </div>
            <div className="flex flex-col text-start space-y-3">
              <p>Email*</p>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className="w-[400px] border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xl"
              />
            </div>
            <div className="flex flex-col text-start space-y-3">
              <p>Password*</p>
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                className="w-[400px] border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xl"
              />
            </div>
            <div className="flex flex-col text-start space-y-3">
              <p>Confirm Password*</p>
              <input
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                type="password"
                className="w-[400px] border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xl"
              />
            </div>
            <div className="flex flex-col text-start space-y-3">
              <p>Company Name*</p>
              <input
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                type="text"
                className="w-[400px] border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xl"
              />
            </div>
            <div className="flex flex-col text-start space-y-3">
              <p>Industry</p>
              <input
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                type="text"
                className="w-[400px] border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xl"
              />
            </div>
            <div className="flex flex-col text-start space-y-3">
              <p>Company Size</p>
              <input
                name="size"
                value={formData.size}
                onChange={handleChange}
                type="text"
                className="w-[400px] border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xl"
              />
            </div>
            <div className="flex flex-col text-start space-y-3">
              <p>Headquarters</p>
              <input
                name="headquarters"
                value={formData.headquarters}
                onChange={handleChange}
                type="text"
                className="w-[400px] border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xl"
              />
            </div>
            <div className="flex flex-col text-start space-y-3">
              <p>Company Type</p>
              <input
                name="type"
                value={formData.type}
                onChange={handleChange}
                type="text"
                className="w-[400px] border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xl"
              />
            </div>
            <div className="flex flex-col text-start space-y-3">
              <p>Founded</p>
              <input
                name="founded"
                value={formData.founded}
                onChange={handleChange}
                type="text"
                className="w-[400px] border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xl"
              />
            </div>
            <div className="flex flex-col text-start space-y-3">
              <p>Specialities</p>
              <input
                name="specialities"
                value={formData.specialities}
                onChange={handleChange}
                type="text"
                className="w-[400px] border h-[200px] border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xl"
              />
            </div>
            <div className="flex flex-col text-start space-y-3">
              <p>Company Address</p>
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                type="text"
                className="w-[400px] h-[200px] border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xl"
              />
            </div>
            <div className="flex flex-col text-start space-y-3">
              <p>Company Phone</p>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="text"
                className="w-[400px] border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-xl"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-700 flex items-center gap-2 justify-center h-[30px] w-[400px] text-white font-semibold rounded-md"
            >
              <HiUserAdd className="text-2xl" />
              Register
            </button>
          </div>
        </form>
        <p className="mt-6 pb-10">
          Already Have An Account?
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 cursor-pointer font-semibold ml-2 text-center"
          >
            Login Here
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterAsCompany;
