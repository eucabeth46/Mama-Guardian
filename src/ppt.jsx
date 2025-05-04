// Dashboard.js
import React, { useEffect, useCallback } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo.webp"; // Import your logo image here (make sure you have it)
import BackgroundImage from "./BackgroundImage.jpg";
import { Chart } from "chart.js";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  PointElement,
  LineElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []); 

  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };
  const goToLogin = () => {
    navigate("/login");
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  useEffect(() => {
    const chart = new Chart(canvasRef.current, config);
    return () => chart.destroy();
  }, []);

  // Maternal Mortality Line Chart Component
const MortalityChart = () => {
  const data = {
    labels: ["2015", "2020", "2025 (Predicted)"],
    datasets: [
      {
        label: "Mortality Rate per 100k",
        data: [342, 310, 250],
        borderColor: "rgba(98, 54, 255, 0.8)",
        tension: 0.4,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return;
          return createGradient(ctx, chartArea);
        },
        fill: true,
      },
    ],
  };

  const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Maternal Mortality Trends',
        },
      },
    };

  const createGradient = (ctx, area) => {
    const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
    gradient.addColorStop(0, "rgba(255, 107, 107, 0.2)");
    gradient.addColorStop(1, "rgba(76, 175, 80, 0.2)");
    return gradient;
  };
   
    return (
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1
          },
          particles: {
            number: { value: 50 },
            color: { value: ["#6236FF", "#62A0CC"] },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: {
              enable: true,
              speed: 1,
              direction: "top",
              outModes: "out",
            },
          },
        }}
      />
    );
  };
  
  return <Line data={data} options={options}/>; 
};

// Animated Neural Network Background Component
const NeuralBackground = () => (
  <div className="nn-background">
    {["Prenatal Care", "Education", "Income Level", "ML Prediction"].map(
      (label, i) => (
        <div
          key={label}
          className="nn-node"
          style={{ top: `${20 + i * 20}%`, left: `${10 + i * 25}%` }}
        >
          {label}
        </div>
      )
    )}
  </div>
);

  return (
    <div style={styles.background}>
       <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 50 },
            color: { value: ["#6236FF", "#62A0CC"] },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: { enable: true, speed: 1, direction: "top", outModes: "out" },
          },
        }}
      />

      {/* Navbar */}
      <div style={styles.navbar}>
        <button style={styles.button} onClick={goToLogin}>
          Login
        </button>
        <button style={styles.button} onClick={goToSignup}>
          Sign Up
        </button>
      </div>

      {/*Divider */}
      <div style={styles.divider}>
        <span style={styles.dividerSpan}><i>Mama Guardian</i></span>
      </div>

      {/* Center Logo Section */}
      <div style={styles.logoSection}>
        <img src={Logo} alt="Logo" style={styles.logoImage} />
        <h1 style={styles.logoText}>MAMA  GUARDIAN</h1>
        <p style={styles.slogan}><b>BORESHA  JAMII</b></p>
      </div>

      {/* User Info Section */}
      <div style={styles.welcomeSection}>
      {currentUser ? (
        <>
          <p><b>Logged in as: {currentUser.email}</b></p>
          {/* <p><b>Name: {currentUser.displayName||"N/A"}</b></p> */}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
    <section className="hero">
        <h1>Maternal Health AI Initiative</h1>
        <p>Machine Learning for Safer Pregnancies Worldwide</p>
        <div className="data-flow">
          <MortalityChart />
        </div>
      </section>
      <section className="map-section">
        <MapContainer center={[0, 0]} zoom={2} className="health-map">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[9.082, 8.6753]}>
            <Popup>Nigeria: AI-powered SMS alerts increased clinic visits by 32%</Popup>
          </Marker>
        </MapContainer>
      </section>
      
      <NeuralBackground />
      <svg className="risk-pathway">
        <path d="M 100 200 Q 250 150 400 200" stroke="url(#riskGradient)" strokeWidth="4" />
        <linearGradient id="riskGradient">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="100%" stopColor="#4CAF50" />
        </linearGradient>
      </svg>
    </div>

    );
  
const styles = {
  background: {
    minHeight:"100vh",
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
  },
  navbar: {
    position: "absolute",
    top: 50,
    right: 10,
    display: "flex",
    gap: "10px",
    zIndex: 1000,
  },
  button: {
    padding: "10px 16px",
    backgroundColor: "#eee",
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s",
  },
  logoSection: {
    marginTop: "10px",
    textAlign: "left",
  },
  logoImage: {
    width: "150px",
    height: "150px",
    objectFit: "contain",
    marginBottom: "10px",
},
logoText: {
  fontSize: "28px",
  fontWeight: "bold",
  textDecoration: "underline",
  color: "#000",
},
slogan: {
  fontSize: "20px",
  color: "#555",
  fontStyle: "italic",
  marginTop: "5px",
},
welcomeSection: {
  marginTop: "50px",
  textAlign: "center",
},
divider: {
  display: "flex",
  alignitems: "center",
  textalign: "center",
  margin: "20px 0",
},

dividerSpan :{
  fontSize: "24px",
  fontweight: "bold",
  color: "black",
},

};

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(-20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
    `, styleSheet.cssRules.length);
    
    styleSheet.insertRule(`
  button:hover {
    background-color: #ddd !important;
  }
`, styleSheet.cssRules.length);

export default Dashboard;
