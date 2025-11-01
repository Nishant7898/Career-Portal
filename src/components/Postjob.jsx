import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
const Postjob = () => {
  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save job data in localStorage (you can later push this to API)
    const existingJobs = JSON.parse(localStorage.getItem("postedJobs")) || [];
    const updatedJobs = [...existingJobs, jobData];
    localStorage.setItem("postedJobs", JSON.stringify(updatedJobs));

    alert("Job posted successfully!");
    setJobData({ title: "", description: "", location: "", salary: "" });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-2xl rounded-xl p-10 w-[600px]">
        <h2 className="text-3xl items-center flex gap-2 justify-center font-bold text-center text-white bg-blue-700 w-full py-8 rounded-t-4xl
         mb-6">
        <FaBriefcase />  Post a New Job
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
          <div>
            <label className="block font-semibold mb-1">Job Title</label>
            <input
              type="text"
              name="title"
              value={jobData.title}
              onChange={handleChange}
              placeholder="Enter job title"
              className="w-full border rounded-md p-2 border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
              value={jobData.description}
              onChange={handleChange}
              placeholder="Enter job description"
              rows="4"
              className="w-full border rounded-md p-2 border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600"
            ></textarea>
          </div>

          <div>
            <label className="block font-semibold mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={jobData.location}
              onChange={handleChange}
              placeholder="Enter job location"
              className="w-full border rounded-md p-2 border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Salary</label>
            <input
              type="text"
              name="salary"
              value={jobData.salary}
              onChange={handleChange}
              placeholder="Enter salary range or amount"
              className="w-full border rounded-md p-2 border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <button
            type="submit"
            className="bg-green-900 flex items-center text-center justify-center gap-2 cursor-pointer text-black font-semibold py-2 rounded-md hover:bg-green-800 transition"
          >
           <FaTelegramPlane /> Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default Postjob;
