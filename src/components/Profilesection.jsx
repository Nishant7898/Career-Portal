import React, { useEffect, useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";

const Profile = () => {
  const [candidateData, setCandidateData] = useState(null);
  const [companyData, setCompanyData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCandidate = JSON.parse(localStorage.getItem("candidateData"));
    const savedCompany = JSON.parse(localStorage.getItem("companyData"));
    setCandidateData(savedCandidate);
    setCompanyData(savedCompany);
  }, []);

  // If neither candidate nor company data is found
  if (!candidateData && !companyData) {
    return (
      <div className="h-screen flex gap-2 justify-center text-center items-center text-2xl font-bold">
        <MdErrorOutline className="text-red-500 text-2xl" /> Please Login Or
        Register First.
      </div>
    );
  }

  // COMPANY PROFILE SECTION
  if (companyData) {
    return (
      <div className="min-h-screen bg-gray-100  flex justify-center items-center">
        <div className="bg-white shadow-2xl rounded-xl w-[800px] overflow-hidden">
          {/* Header */}
          <div className="bg-blue-700  text-white flex justify-between items-center px-8 py-4">
            <h1 className="text-2xl font-bold">Company Profile</h1>
            <div className="flex gap-4">
              <button
                onClick={() => navigate("/jobpost")}
                className="bg-white text-blue-700 font-semibold px-4 py-2 rounded-md hover:bg-gray-100 transition"
              >
                + Post a New Job
              </button>
              <button
                onClick={() => navigate("/editcompanyprofile")}
                className="bg-white text-red-700 flex items-center gap-2 font-semibold px-4 py-2 rounded-md hover:bg-gray-100 transition"
              >
                <FaEdit /> Edit Profile
              </button>
            </div>
          </div>

          {/* Company Details */}
          <div className="p-10 grid grid-cols-2 gap-x-6 gap-y-3 text-gray-700">
            <p>
              <b>Company Name:</b> {companyData.companyName}
            </p>
            <p>
              <b>Email:</b> {companyData.email}
            </p>
            <p>
              <b>Phone:</b> {companyData.phone}
            </p>
            <p>
              <b>Address:</b> {companyData.address}
            </p>
            <p>
              <b>Industry:</b> {companyData.industry}
            </p>
            <p>
              <b>Company Size:</b> {companyData.size}
            </p>
            <p>
              <b>Headquarters:</b> {companyData.headquarters}
            </p>
            <p>
              <b>Type:</b> {companyData.type}
            </p>
            <p>
              <b>Founded:</b> {companyData.founded}
            </p>
            <p>
              <b>Specialities:</b> {companyData.specialities}
            </p>
            <p>
              <b>Created At:</b> {companyData.createdAt}
            </p>
          </div>
          <button onClick={()=>navigate("/dashboard")} className="text-center items-center text-blue-500  rounded-xl gap-2 hover:bg-blue-600 hover:text-white cursor-pointer font-semibold mb-6 flex ml-[20vw] border border-blue-500 p-2">
            <AiOutlineDashboard /> Go To Company Dashboard
          </button>
        </div>
      </div>
    );
  }

  // CANDIDATE PROFILE SECTION
  if (candidateData) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white shadow-2xl rounded-xl p-10 w-[700px]">
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Candidate Profile
          </h1>

          {/* Profile Image */}
          {candidateData.photo && (
            <div className="flex justify-center mb-6">
              <img
                src={candidateData.photo}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full border-4 border-blue-600 shadow-md"
              />
            </div>
          )}

          {/* Candidate Details */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-gray-700">
            <p>
              <b>Username:</b> {candidateData.username}
            </p>
            <p>
              <b>Email:</b> {candidateData.email}
            </p>
            <p>
              <b>Name:</b> {candidateData.name}
            </p>
            <p>
              <b>Mobile:</b> {candidateData.mobile}
            </p>
            <p>
              <b>Status:</b> {candidateData.status}
            </p>
            <p>
              <b>Gender:</b> {candidateData.gender}
            </p>
            <p>
              <b>DOB:</b> {candidateData.dob}
            </p>
            <p>
              <b>Education:</b> {candidateData.education}
            </p>
            <p>
              <b>Work Experience:</b> {candidateData.workExp}
            </p>
            <p>
              <b>Skills:</b> {candidateData.skills}
            </p>
            <p>
              <b>Resume:</b> {candidateData.resume}
            </p>
          </div>

          <button
            onClick={() => navigate("/editprofile")}
            className="bg-blue-600 gap-2 font-semibold mt-8 w-[200px] cursor-pointer items-center flex justify-center ml-[200px] text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            <FaEdit /> Edit Profile
          </button>
        </div>
      </div>
    );
  }
};

export default Profile;
