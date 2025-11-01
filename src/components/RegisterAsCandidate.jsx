import React, { useState } from "react";
import { HiUserAdd } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const RegisterAsCandidate = () => {
  const navigate = useNavigate();
  const [resume, setResume] = useState(null);
  const [photo, setPhoto] = useState(null);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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

  // ✅ Handle Resume Upload
  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setResume(file);
      setFormData({ ...formData, resume: file.name });
    } else {
      alert("Please upload only .pdf file for Resume!");
      e.target.value = "";
    }
  };

  // ✅ Handle Photo Upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/jpg")) {
      setPhoto(file);
      setFormData({ ...formData, photo: file.name });
    } else {
      alert("Please upload only .jpg or .jpeg file for Photo!");
      e.target.value = "";
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Handle Register Button Click
  const handleRegister = () => {
    if (!formData.username || !formData.email || !formData.password || !formData.name) {
      alert("Please fill all required fields!");
      return;
    }

    // Save data in localStorage
    localStorage.setItem("candidateData", JSON.stringify(formData));
    alert("Registration Successful! Data saved in LocalStorage ✅");

    // Clear form
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
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
    setResume(null);
    setPhoto(null);
  };

  return (
    <div
      id="candidate"
      className="min-h-screen mb-10 flex items-center justify-center bg-gray-100"
    >
      <div className="h-full flex mt-4 rounded-xl text-center items-center flex-col w-[500px] bg-white border border-gray-300 shadow-2xl">
        <h1 className="text-2xl mt-6 flex gap-2 text-center justify-center items-center font-semibold text-blue-600">
          <HiUserAdd className="text-3xl" /> Register As Candidate
        </h1>

        <div className="mt-[80px] space-y-6">
          {[
            { label: "Username*", name: "username", type: "text" },
            { label: "Email*", name: "email", type: "email" },
            { label: "Password*", name: "password", type: "password" },
            { label: "Confirm Password*", name: "confirmPassword", type: "password" },
            { label: "Name*", name: "name", type: "text" },
            { label: "Mobile*", name: "mobile", type: "text" },
          ].map((input) => (
            <div key={input.name} className="flex flex-col text-start space-y-3">
              <p>{input.label}</p>
              <input
                type={input.type}
                name={input.name}
                value={formData[input.name]}
                onChange={handleChange}
                className="w-[400px] border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm"
              />
            </div>
          ))}

          {/* Status */}
          <div className="flex flex-col text-start space-y-3">
            <p>Status*</p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="status"
                  value="Fresher"
                  checked={formData.status === "Fresher"}
                  onChange={handleChange}
                />
                Fresher
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="status"
                  value="Experienced"
                  checked={formData.status === "Experienced"}
                  onChange={handleChange}
                />
                Experienced
              </label>
            </div>
          </div>

          {/* Gender */}
          <div className="flex flex-col text-start space-y-3">
            <p>Gender*</p>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-[400px] border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="FeMale">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* DOB */}
          <div className="flex flex-col text-start space-y-3">
            <p>DOB*</p>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-[400px] border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm"
            />
          </div>

          {/* Education */}
          <div className="flex flex-col text-start space-y-3">
            <p>Education*</p>
            <textarea
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="w-[400px] h-[120px] border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm"
            ></textarea>
          </div>

          {/* Work Exp */}
          <div className="flex flex-col text-start space-y-3">
            <p>Work Exp*</p>
            <textarea
              name="workExp"
              value={formData.workExp}
              onChange={handleChange}
              className="w-[400px] h-[120px] border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm"
            ></textarea>
          </div>

          {/* Skills */}
          <div className="flex flex-col text-start space-y-3">
            <p>Skills*</p>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-[400px] h-[120px] border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm"
            ></textarea>
          </div>

          {/* ✅ Resume Upload */}
          <div className="flex flex-col text-start space-y-3">
            <p>Resume*</p>
            <div className="flex flex-row">
              <button
                type="button"
                onClick={() => document.getElementById("resumeUpload").click()}
                className="bg-gray-200 p-1 border border-gray-400 hover:bg-gray-300 shadow-sm"
              >
                Choose File
              </button>
              <input
                type="file"
                id="resumeUpload"
                accept=".pdf"
                onChange={handleResumeUpload}
                style={{ display: "none" }}
              />
              <input
                type="text"
                name="resume"
                value={formData.resume}
                readOnly
                className="w-[300px] border-l-0 rounded-r-md border border-gray-400 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm"
              />
            </div>
          </div>

          {/* ✅ Photo Upload */}
          <div className="flex flex-col text-start space-y-3">
            <p>Photo*</p>
            <div className="flex flex-row">
              <button
                type="button"
                onClick={() => document.getElementById("photoUpload").click()}
                className="bg-gray-200 p-1 border border-gray-400 hover:bg-gray-300 shadow-sm"
              >
                Choose File
              </button>
              <input
                type="file"
                id="photoUpload"
                accept=".jpg,.jpeg"
                onChange={handlePhotoUpload}
                style={{ display: "none" }}
              />
              <input
                type="text"
                name="photo"
                value={formData.photo}
                readOnly
                className="w-[300px] border-l-0 rounded-r-md border border-gray-400 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm"
              />
            </div>
          </div>

          {/* Register Button */}
          <button
            onClick={handleRegister}
            className="bg-blue-700 flex items-center gap-2 justify-center h-[40px] w-[400px] text-white font-semibold rounded-md hover:bg-blue-800 transition"
          >
            <HiUserAdd className="text-2xl" />
            Register
          </button>
        </div>

        <p className="mt-6 pb-10">
          Already have an account?
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 cursor-pointer font-semibold ml-2"
          >
            Login Here
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterAsCandidate;
