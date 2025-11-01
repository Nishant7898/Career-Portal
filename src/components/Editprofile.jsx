import React, { useState, useEffect } from "react";
import { FaUserEdit } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { IoIosAttach } from "react-icons/io";
import { IoMdSave } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    name: "",
    mobile: "",
    status: "",
    gender: "",
    dob: "",
    education: "",
    workExp: "",
    skills: "",
    resume: "",
    photo: "",
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);

  // Load saved data
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("candidateData"));
    if (savedData) setFormData(savedData);
  }, []);

  // Handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle resume upload
  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, resume: reader.result }));
        setResumeFile(file.name);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid PDF file.");
      e.target.value = "";
    }
  };

  // Handle photo upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/jpg")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, photo: reader.result }));
        setPhotoFile(file.name);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload only .jpg or .jpeg image!");
      e.target.value = "";
    }
  };

  // Clear resume
  const handleClearResume = () => {
    setFormData((prev) => ({ ...prev, resume: "" }));
    setResumeFile(null);
  };

  // Clear photo
  const handleClearPhoto = () => {
    setFormData((prev) => ({ ...prev, photo: "" }));
    setPhotoFile(null);
  };

  // Save updates
  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("candidateData", JSON.stringify(formData));
    alert("Profile updated successfully!");
    window.location.href = "/profile";
  };

  // Cancel changes
  const handleCancel = () => {
    window.location.href = "/profile";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      <form
        onSubmit={handleSave}
        className="bg-white shadow-2xl rounded-xl p-10 w-[800px]"
      >
        <h1 className="text-3xl flex items-center justify-center gap-2 font-bold text-center text-blue-700 ">
          <FaUserEdit /> Update Your Profile
        </h1>
        <p className="text-center mb-8 mt-2 opacity-50">
          Please fill out the information below carefully.
        </p>

        {/* -------- PERSONAL INFORMATION -------- */}
        <h2 className="text-xl flex text-blue-500 items-center gap-2 font-semibold  mb-4 border-b pb-2">
          <FaUser className="text-blue-500" /> Personal Information
        </h2>
        <div className="grid grid-cols-2 gap-6 mb-6">
          {[
            { label: "Name", name: "name", type: "text" },
            { label: "Mobile", name: "mobile", type: "text" },
          ].map((input) => (
            <div key={input.name}>
              <label className="block text-sm font-semibold">
                {input.label}
              </label>
              <input
                type={input.type}
                name={input.name}
                value={formData[input.name]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:border-blue-500"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-semibold">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:border-blue-500"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* -------- PROFESSIONAL INFORMATION -------- */}
        <h2 className="text-xl items-center  font-semibold text-blue-700 flex gap-2 mb-4 border-b pb-2">
          <PiStudentFill /> Professional Information
        </h2>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold">Education</label>
            <textarea
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="w-full h-[120px] border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-semibold">
              Work Experience
            </label>
            <textarea
              name="workExp"
              value={formData.workExp}
              onChange={handleChange}
              className="w-full h-[120px] border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-semibold">Skills</label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full h-[150px] border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
        </div>

        {/* -------- ATTACHMENTS -------- */}
        <h2 className="text-xl flex items-center gap-2 font-semibold text-blue-700 mb-4 border-b pb-2">
          <IoIosAttach /> Attachments
        </h2>

        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Resume */}
          <div>
            <label className="block text-sm font-semibold mb-1">Resume</label>

            {/* Current Resume Section (on top) */}
            {formData.resume ? (
              <div className="flex items-center gap-3 mb-3">
                <a
                  href={formData.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Current Resume
                </a>
                <button
                  type="button"
                  onClick={handleClearResume}
                  className="text-red-500 text-sm hover:underline"
                >
                  Clear
                </button>
              </div>
            ) : (
              <p className="text-gray-500 text-sm mb-2">No file uploaded</p>
            )}

            {/* Choose File Button */}
            <div className="mt-1">
              <button
                type="button"
                onClick={() => document.getElementById("resumeUpload").click()}
                className="bg-gray-200 border px-3 py-1 rounded-md hover:bg-gray-300"
              >
                Choose File
              </button>
              <input
                type="file"
                id="resumeUpload"
                accept=".pdf"
                style={{ display: "none" }}
                onChange={handleResumeUpload}
              />
              <span className="ml-3 text-sm text-gray-600">
                {resumeFile || "No file selected"}
              </span>
            </div>
          </div>

          {/* Photo */}
          <div>
            <label className="block text-sm font-semibold mb-1">Photo</label>

            {/* Current Photo Section (on top) */}
            {formData.photo ? (
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={formData.photo}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
                />
                <button
                  type="button"
                  onClick={handleClearPhoto}
                  className="text-red-500 text-sm hover:underline"
                >
                  Clear
                </button>
              </div>
            ) : (
              <p className="text-gray-500 text-sm mb-2">No image uploaded</p>
            )}

            {/* Choose File Button */}
            <div>
              <button
                type="button"
                onClick={() => document.getElementById("photoUpload").click()}
                className="bg-gray-200 border px-3 py-1 rounded-md hover:bg-gray-300"
              >
                Choose File
              </button>
              <input
                type="file"
                id="photoUpload"
                accept=".jpg,.jpeg"
                style={{ display: "none" }}
                onChange={handlePhotoUpload}
              />
              <span className="ml-3 text-sm text-gray-600">
                {photoFile || "No file selected"}
              </span>
            </div>
          </div>
        </div>

        {/* -------- ACTION BUTTONS -------- */}
        <div className="flex justify-between gap-6 mt-8">
          <button
            type="button"
            onClick={handleCancel}
            className="text-black border border-gray-400 flex items-center gap-2 px-8 py-2 rounded-md hover:bg-gray-500 transition"
          >
       <FaArrowLeft />     Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-700 flex items-center gap-2 text-white px-8 py-2 rounded-md hover:bg-blue-800 transition"
          >
          <IoMdSave />  Save Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
