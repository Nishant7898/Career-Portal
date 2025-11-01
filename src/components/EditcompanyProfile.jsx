import React, { useState, useEffect } from "react";
import { FaBuilding } from "react-icons/fa";
import { IoMdSave } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";

const EditCompanyProfile = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    size: "",
    headquarters: "",
    type: "",
    founded: "",
    specialities: "",
    address: "",
    phone: "",
  });

  // Load existing company data from localStorage (if available)
  useEffect(() => {
    const savedCompanyData = JSON.parse(localStorage.getItem("companyData"));
    if (savedCompanyData) {
      setFormData(savedCompanyData);
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Save updates to localStorage
  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("companyData", JSON.stringify(formData));
    alert("Company profile updated successfully!");
    window.location.href = "/profile"; // Redirect after save
  };

  // Cancel & go back
  const handleCancel = () => {
    window.location.href = "/profile";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      <form
        onSubmit={handleSave}
        className="bg-white shadow-2xl rounded-xl p-10 w-[700px]"
      >
        <h1 className="text-3xl flex items-center justify-center gap-2 text-white py-8 rounded-t-4xl font-bold text-center bg-blue-700 mb-6">
          <FaBuilding /> Edit Company Profile
        </h1>

        {/* Form fields in grid layout */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* Basic company fields */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Industry
            </label>
            <input
              type="text"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Company Size
            </label>
            <input
              type="text"
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Headquarters
            </label>
            <input
              type="text"
              name="headquarters"
              value={formData.headquarters}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Company Type
            </label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Founded Year
            </label>
            <input
              type="text"
              name="founded"
              value={formData.founded}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-600"
            />
          </div>

          {/* Textareas */}
          <div className="col-span-2">
            <label className="block text-sm font-semibold mb-1">
              Specialities
            </label>
            <textarea
              name="specialities"
              value={formData.specialities}
              onChange={handleChange}
              className="w-full h-[100px] border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-600"
            ></textarea>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-semibold mb-1">
              Company Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full h-[100px] border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-600"
            ></textarea>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-semibold mb-1">
              Company Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-600"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={handleCancel}
            className="border border-gray-400 flex items-center gap-2 px-8 py-2 rounded-md hover:bg-gray-500 hover:text-white transition"
          >
            <FaArrowLeft /> Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-700 text-white flex items-center gap-2 px-8 py-2 rounded-md hover:bg-blue-800 transition"
          >
            <IoMdSave /> Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCompanyProfile;
