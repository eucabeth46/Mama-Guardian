// Login.js
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import MAMA from "./MAMA.webp";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div style={styles.background}>
  
    <form onSubmit={handleSubmit}>
      <h2>Log In</h2>
      <input type="email" onChange={e => setEmail(e.target.value)} placeholder="Email Address" />
      <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Log In</button>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p> {/* Link to signup page */}
      <p><a href="/forgot-password">Forgot Password?</a></p>  {/* Link to reset password page */}
      <div>
        <button>View Appointments</button>
        <button>View Health Records</button>
        <button>Edit Profile</button>
      </div>
    </form>
    </div>

  );
}

const styles = {
  background: {
    minHeight:"100vh",
    width: "100vw",
    margin: 0,
    padding: 0,
    backgroundImage: `url(${MAMA})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
}