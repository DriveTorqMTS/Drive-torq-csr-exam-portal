import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [usn, setUsn] = useState("");
  const [branch, setBranch] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!name || !usn || !branch || !phone || !college) {
      alert("Please fill all details — Name, USN, Branch, Phone, and College Name");
      return;
    }

    if (username === "student" && password === "exam@123") {
      const sets = ["Set A", "Set B", "Set C"];
      const randomSeries = sets[Math.floor(Math.random() * sets.length)];

      // open Google Form
      window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSdPJWpPWKMDWKHRqs5vm-JuXJN5dLjZdGJseyBZsDW4h-5uug/viewform?usp=header",
        "_blank"
      );

      setLoading(true);

      // simulate backend check (manual verification later)
      setTimeout(() => {
        navigate("/exam", {
          state: { name, usn, branch, phone, college, series: randomSeries },
        });
        setLoading(false);
      }, 15000);
    } else {
      alert("Invalid username/password");
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <h1>Drive Torq Mission Tech Solutions</h1>
      </div>

      <div style={styles.card}>
        <h2 style={{ marginBottom: "20px", color: "#1E90FF" }}>Student Login</h2>

        <input
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          style={styles.input}
          placeholder="USN"
          value={usn}
          onChange={(e) => setUsn(e.target.value)}
        />
        <input
          style={styles.input}
          placeholder="Phone Number"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          style={styles.input}
          placeholder="College Name"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
        />

        <select
          style={styles.input}
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        >
          <option value="">Select Branch</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="MECH">MECH</option>
          <option value="CIVIL">CIVIL</option>
          <option value="EEE">EEE</option>
          <option value="IT">IT</option>
        </select>

        <input
          style={styles.input}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          style={styles.input}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button} onClick={handleLogin} disabled={loading}>
          {loading ? "Checking..." : "Login & Start Exam"}
        </button>

        <p style={{ marginTop: "15px" }}>
          <a href="/admin" style={{ color: "#1E90FF", textDecoration: "none" }}>
            Admin Login
          </a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: "#f0f6ff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    backgroundColor: "#1E90FF",
    color: "white",
    padding: "15px",
    textAlign: "center",
    fontSize: "22px",
    fontWeight: "bold",
    boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
  },
  card: {
    backgroundColor: "#ffffff",
    margin: "50px auto",
    padding: "30px",
    borderRadius: "12px",
    width: "90%",
    maxWidth: "400px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    margin: "8px 0",
    padding: "10px",
    width: "100%",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  button: {
    backgroundColor: "#1E90FF",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "10px",
    width: "100%",
    marginTop: "10px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
};

export default Login;
