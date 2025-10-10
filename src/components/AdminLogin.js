import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin@123") {
      navigate("/admin/dashboard");
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <h1>Drive Torq Mission Tech Solutions</h1>
      </div>

      <div style={styles.card}>
        <h2 style={{ marginBottom: "20px", color: "#1E90FF" }}>Admin Login</h2>
        <input
          style={styles.input}
          placeholder="Admin Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          style={styles.input}
          placeholder="Admin Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button style={styles.button} onClick={handleLogin}>
          Login
        </button>
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
    backgroundColor: "#FF7F50",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "10px",
    width: "100%",
    marginTop: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default AdminLogin;
