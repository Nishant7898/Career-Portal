import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx"; // cross icon

const Jobsubmit = () => {
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setFileName(file.name);
    } else {
      alert("Please upload a valid PDF file!");
      e.target.value = "";
    }
  };

  const handleSubmit = () => {
    if (!fileName) {
      alert("Please upload your resume first!");
      return;
    }
    setSubmitted(true);
  };

  const handleCancel = () => {
    setSubmitted(false);
    setFileName("");
  };

  return (
    <div className="h-screen w-screen items-center bg-gray-100 flex justify-center">
      <div className="h-auto w-[500px] rounded-md bg-white border-white shadow-2xl p-4 relative">
        {/* Title only before submission */}
        {!submitted && (
          <p className="bg-blue-600 text-white text-xl p-2 font-semibold px-10 text-center items-center flex">
            Apply to "Frontend Developer"
          </p>
        )}

        {/* Before Submit */}
        {!submitted ? (
          <>
            <div className="mt-4 px-5 flex items-center gap-2 text-center">
              <span>Resume:</span>
              <label
                htmlFor="file-upload"
                className="border text-xs p-1 px-2 hover:bg-gray-400 bg-gray-200 cursor-pointer"
              >
                Choose file
              </label>
              <input
                id="file-upload"
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={handleFileChange}
              />
              <p className="text-xs">
                {fileName ? fileName : "No File Chosen"}
              </p>
            </div>

            <button
              onClick={handleSubmit}
              className="bg-green-700 cursor-pointer mx-4 mt-6 text-white p-2 rounded-md"
            >
              Submit Application
            </button>
          </>
        ) : (
          <>
            {/* Success Message Row */}
            <div className="flex justify-between items-center mt-4 px-4">
              <p className="text-green-700 font-semibold text-lg">
                🎉 Application submitted successfully!
              </p>
              <button onClick={handleCancel}>
                <RxCross2 className="text-red-600 text-2xl hover:text-red-800 cursor-pointer" />
              </button>
            </div>

            {/* Recommended Jobs Section */}
            <div className="mt-6 px-5">
              <h3 className="text-blue-700 font-semibold text-lg mb-2">
                Recommended Jobs:
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                <li>React Developer - Google</li>
                <li>Frontend Engineer - Amazon</li>
                <li>Web Developer - Microsoft</li>
                <li>UI Designer - Adobe</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Jobsubmit;
