import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Chooseyour from "./components/Chooseyour";
import RegisterAsCandidate from "./components/RegisterAsCandidate";
import Loginform from "./components/Loginform";
import Jobsection from "./components/Jobsection";
import Jobsubmit from "./components/Jobsubmit";
import RegisterAsCompany from "./components/RegisterAsCompany";
import Footer from "./components/Footer";
import CompanySection from "./components/CompanySection";
import Profile from "./components/Profilesection";
import EditProfile from "./components/Editprofile";
import Postjob from "./components/Postjob";
import EditCompanyProfile from "./components/EditcompanyProfile";
import CompanyAccessdenied from "./components/CompanyAccessdenied";
import Dashboard from "./components/Dashboard";
import CandidateAcessDenied from "./components/CandidateAcessDenied";

const App = () => {
  return (
    <div className="bg-gray-100">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/choose" element={<Chooseyour />} />
          <Route path="/candidate" element={<RegisterAsCandidate />} />
          <Route path="/login" element={<Loginform />} />
          <Route path="/jobs" element={<Jobsection />} />
          <Route path="/submit" element={<Jobsubmit />} />
          <Route path="/ascompany" element={<RegisterAsCompany />} />
          <Route path="/companies" element={<CompanySection />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/jobpost" element={<Postjob />} />
          <Route path="/editcompanyprofile" element={<EditCompanyProfile />} />
          <Route path="/access-denied" element={<CompanyAccessdenied />} />
          <Route path="/dashboard"element={<Dashboard/>}/>
          <Route path="/access-denied1" element={<CandidateAcessDenied/>}/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
