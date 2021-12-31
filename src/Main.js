// React
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages
import Home from "./views/home/Home.jsx";
import Login from "./views/login/Login.jsx";
import NotFound from "./views/not-found/NotFound.jsx";
import Dashboard from "./views/dashboard/Dashboard.jsx";

function Main() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login">Login</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default Main;
