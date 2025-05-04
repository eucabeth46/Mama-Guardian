// Signup.js
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import "../Components/Signup.css";
import { FaGoogle, FaGithub } from "react-icons/fa";
import BackgroundImage from "./BackgroundImage.webp";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup, signInWithGoogle, signInWithGithub } = useAuth(); // assuming you add these in AuthContext
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      await signup(email, password); // Extend this to include names & phone if needed
      navigate("/");
    } catch (error) {
      alert("Failed to sign up: " + error.message);
    }
  };

  return (
    <div style={styles.page}>
    <form style={styles.form} onSubmit={handleSubmit}>
    <h2 style={styles.heading}>Sign Up</h2>
  
    <div style={styles.inputGroup}>
      <label>First Name</label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
        required
        style={styles.input}
      />
    </div>
  
    <div style={styles.inputGroup}>
      <label>Last Name</label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
        required
        style={styles.input}
      />
    </div>
  
    <div style={styles.inputGroup}>
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        required
        style={styles.input}
      />
    </div>
  
    <div style={styles.inputGroup}>
    <label>Phone Number</label>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone Number"
        style={styles.input}
      />
    </div>
  
    <div style={styles.inputGroup}>
    <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        style={styles.input}
      />
    </div>
  
    <div style={styles.inputGroup}>
    <label>Confirm Password</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
        required
        style={styles.input}
      />
    </div>
  
    <button type="submit" style={styles.submitButton}>Sign Up</button>
  
    <hr style={styles.hr}/>
  
    <p style={{ color: "#003366", textAlign: "center" }}>Or sign up with:</p>
  
    <button type="button" style={styles.oauthButton} onClick={signInWithGoogle}>
      <FaGoogle className="icon" />
      Sign up with Google
    </button>
  
    <button type="button" style={styles.oauthButton} onClick={signInWithGithub}>
      <FaGithub className="icon" /> Sign up with GitHub
    </button>
  </form>
  </div>
  );
  
}

const styles = {
  page: {
    minHeight: "200vh",
      width: "100vw",
      margin: 0,
      padding: 0,
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      overflowX: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // background: "linear-gradient(135deg, #4facfe, #00f2fe)", // soothing health gradient
    padding: "20px",
  },
  form: {
    backgroundColor: "#ffffffee", // translucent white background
    padding: "30px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#003366",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  submitButton: {
    width: "100%",
    height: '30px',
    padding: 0,
    backgroundColor: "#005BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  oauthButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#f0f0f0",
    color: "#333",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontWeight: "bold",
    marginTop: "10px",
    cursor: "pointer",
  },
  hr: {
    margin: "20px 0",
  },
};

