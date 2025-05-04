// ForgotPassword.jsx
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await resetPassword(email);
      alert("Password reset email sent!");
      navigate("/login");  // Redirect to login after requesting reset
    } catch (error) {
      alert("Failed to reset password: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Forgot Password</h2>
      <input 
        type="email" 
        onChange={e => setEmail(e.target.value)} 
        placeholder="Enter your email" 
      />
      <button type="submit">Send Reset Link</button>
    </form>
  );
}
