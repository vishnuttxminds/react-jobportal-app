import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import CompanyDashboard from "./pages/dashboards/CompanyDashboard";
import ApplicantDashboard from "./pages/dashboards/ApplicantDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/signup" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/company/dashboard" element={<CompanyDashboard />} />
          <Route path="/applicant/dashboard" element={<ApplicantDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
