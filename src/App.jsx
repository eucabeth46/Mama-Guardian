// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import ForgotPassword from "./Components/ForgotPassword"
import "./App.css";

function App () {
  return (
    <React.StrictMode>
    <Router>
    <AuthProvider>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
          <Route path="/" element={<Dashboard />} />
        </Routes>
    </AuthProvider>
    </Router>
    </React.StrictMode>
  );
}

export default App;

