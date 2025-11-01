import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();
  const [company, setCompany] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // ✅ Get company data from localStorage
    const storedCompany = localStorage.getItem("companyData");

    if (storedCompany) {
      const parsedCompany = JSON.parse(storedCompany);
      setCompany(parsedCompany);

      // ✅ (Optional) Load posted jobs if you stored them too
      const storedJobs = localStorage.getItem("companyJobs");
      if (storedJobs) {
        setJobs(JSON.parse(storedJobs));
      }
    } else {
      // ❌ If no company logged in, redirect to login page
      navigate("/companylogin");
    }
  }, [navigate]);

  // ✅ Delete job
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      const updatedJobs = jobs.filter((job) => job.id !== id);
      setJobs(updatedJobs);
      localStorage.setItem("companyJobs", JSON.stringify(updatedJobs));
      alert("Job deleted successfully!");
    }
  };

  // ✅ Edit job
  const handleEdit = (id) => {
    navigate(`/editjob/${id}`);
  };

  // 🕓 Wait until company is loaded
  if (!company) return null;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="bg-blue-700 text-white flex justify-between items-center px-8 py-4 rounded-md shadow-md mb-8">
        <h1 className="text-2xl flex items-center gap-2 font-bold"><FaBriefcase />Company Dashboard</h1>
        <button
          onClick={() => navigate("/jobpost")}
          className="bg-white text-blue-900 px-4 py-2 font-semibold rounded-lg hover:bg-blue-500 cursor-pointer hover:text-white transition"
        >
         + Post a New Job
        </button>
      </div>

      {/* ✅ Company Profile Section (Dynamic) */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Company Profile</h2>
        <div className="flex flex-col gap-4 text-gray-700">
          <p>
            <span className="font-semibold border-l-4 border-blue-500  pl-2 ">Company Name:</span> {company.name}
          </p>
          <p>
            <span className="font-semibold border-l-5  border-blue-500 rounded-l-md  pl-2">Email:</span> {company.email}
          </p>
          <p>
            <span className="font-semibold border-l-5  border-blue-500 rounded-l-md  pl-2">Phone:</span> {company.phone}
          </p>
          <p>
            <span className="font-semibold border-l-5  border-blue-500 rounded-l-md  pl-2">Industry:</span> {company.industry}
          </p>
          <p className="col-span-2">
            <span className="font-semibold border-l-5  border-blue-500 rounded-l-md  pl-2">Address:</span> {company.address}
          </p>
        </div>
      </div>

      {/* ✅ Job History Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
    Your Posted Jobs
        </h2>

        {jobs.length === 0 ? (
          <p className="text-gray-600 italic">
            You have not posted any jobs yet.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="py-3 px-4">Title</th>
                  <th className="py-3 px-4">Location</th>
                  <th className="py-3 px-4">Posted On</th>
                  <th className="py-3 px-4">Applications</th>
                  <th className="py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <tr
                    key={job.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-4">{job.title}</td>
                    <td className="py-3 px-4">{job.location}</td>
                    <td className="py-3 px-4">{job.postedOn}</td>
                    <td className="py-3 px-4">{job.applications || 0}</td>
                    <td className="py-3 px-4 flex gap-2">
                      <button
                        onClick={() => handleEdit(job.id)}
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(job.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
