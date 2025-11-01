import React, { useEffect, useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const navigate=useNavigate()

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("candidateData"));
    setUserData(savedData);
  }, []);

  if (!userData) {
    return (
      <div className="h-screen flex gap-2 justify-center text-center items-center text-2xl font-bold">
        <MdErrorOutline className="text-red-500 text-2xl" /> Please Login Or
        Register First.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-2xl rounded-xl p-10 w-[700px]">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Candidate Profile
        </h1>

        {/* Profile Image */}
        {userData.photo && (
          <div className="flex justify-center mb-6">
            <img
              src={userData.photo}
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full border-4 border-blue-600 shadow-md"
            />
          </div>
        )}

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-gray-700">
          <p>
            <b>Username:</b> {userData.username}
          </p>
          <p>
            <b>Email:</b> {userData.email}
          </p>
          <p>
            <b>Name:</b> {userData.name}
          </p>
          <p>
            <b>Mobile:</b> {userData.mobile}
          </p>
          <p>
            <b>Status:</b> {userData.status}
          </p>
          <p>
            <b>Gender:</b> {userData.gender}
          </p>
          <p>
            <b>DOB:</b> {userData.dob}
          </p>
          <p>
            <b>Education:</b> {userData.education}
          </p>
          <p>
            <b>Work Experience:</b> {userData.workExp}
          </p>
          <p>
            <b>Skills:</b> {userData.skills}
          </p>
          <p>
            <b>Resume:</b> {userData.resume}
          </p>
        </div>

        <button
          onClick={() =>navigate("/editprofile") }
          className="bg-blue-600 gap-2  font-semibold mt-8 w-[200px] cursor-pointer items-center flex justify-center ml-[200px] text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          <FaEdit /> Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
