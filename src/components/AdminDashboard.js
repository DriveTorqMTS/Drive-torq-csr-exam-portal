import React from "react";

const AdminDashboard = () => {
  const openSheet = () => {
    window.open(
      "https://docs.google.com/spreadsheets/d/<<YOUR_FORM_RESPONSE_SHEET_ID>>/edit",
      "_blank"
    );
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <h1>Drive Torq Mission Tech Solutions</h1>
      </div>
      <div style={styles.card}>
        <h2 style={{ color: "#1E90FF" }}>Admin Dashboard</h2>
        <p>Click below to view live student results.</p>
        <button style={styles.button} onClick={openSheet}>
          📊 View Results (Google Sheet)
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
    backgroundColor: "#fff",
    margin: "50px auto",
    padding: "30px",
    borderRadius: "12px",
    width: "90%",
    maxWidth: "400px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
  },
};

export default AdminDashboard;
