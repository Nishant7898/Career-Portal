import React, { useState } from "react";

const Jobsubmit = () => {
  const [fileName, setFileName] = useState(""); // to show selected file name
  const [submitted, setSubmitted] = useState(false); // to toggle success message

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setFileName(file.name);
    } else {
      alert("Please upload a valid PDF file!");
      e.target.value = ""; // reset if not PDF
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
      <div className="h-[200px] w-[500px] rounded-md bg-white border-white shadow-2xl">
        <p className="bg-blue-600 text-white text-xl p-2 font-semibold px-10 text-center items-center flex">
          Apply to ""
        </p>

        {/* Resume Upload Section */}
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
              className="bg-green-700 hover:bg-green-600 cursor-pointer mx-4 mt-6 text-white p-2 rounded-md"
            >
              Submit Application
            </button>
          </>
        ) : (
          <>
            <p className="text-green-700 font-semibold mt-8 text-center">
              Application submitted With Resume!
            </p>
            <button
              onClick={handleCancel}
              className="bg-red-600 cursor-pointer mx-auto mt-4 block text-white p-2 rounded-md"
            >
          
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Jobsubmit;
