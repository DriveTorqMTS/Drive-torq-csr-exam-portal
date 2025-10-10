/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getQuestions } from "./questions";
import { submitResultToGoogleForm } from "../utils/submitToGoogleForm";

const EXAM_DURATION_MIN = 60; // 60 minutes

const Exam = () => {
  const navigate = useNavigate();
  const { state } = useLocation(); // expects { name, usn, branch, series }
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION_MIN * 60); // seconds

  // guard: if someone opens /exam directly
  useEffect(() => {
    if (!state?.name || !state?.usn || !state?.branch || !state?.series) {
      navigate("/");
    }
  }, [state, navigate]);

  // Prepare questions for this branch/series
  const questions = useMemo(() => {
    if (!state?.branch || !state?.series) return [];
    return getQuestions(state.branch, state.series);
  }, [state?.branch, state?.series]);

  // 60-minute countdown
  useEffect(() => {
    if (timeLeft <= 0) {
      handleFinish(); // auto submit when time is up
      return;
    }
    const t = setInterval(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  const handleAnswer = (selected) => {
    if (!questions[current]) return;

    if (selected === questions[current].answer) {
      setScore((prev) => prev + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
    } else {
      handleFinish();
    }
  };

  const handleFinish = async () => {
    try {
     await submitResultToGoogleForm({
  name: state?.name,
  USN: state?.usn,
  branch: state?.branch,
  phone: state?.phone,
  college: state?.college,
  score,
});

    } finally {
      navigate("/thankyou");
    }
  };

  if (!questions.length) {
    return (
      <div style={styles.wrapper}>
        <div style={styles.header}><h1>Drive Torq Mission Tech Solutions</h1></div>
        <div style={styles.container}><p>Loading questions…</p></div>
      </div>
    );
  }

  const mm = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const ss = String(timeLeft % 60).padStart(2, "0");

  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <h1>Drive Torq Mission Tech Solutions</h1>
      </div>

      <div style={styles.container}>
        {/* meta bar */}
        <div style={styles.metaRow}>
          <div><b>Name:</b> {state?.name} &nbsp;|&nbsp; <b>USN:</b> {state?.usn}</div>
          <div><b>Branch:</b> {state?.branch} &nbsp;|&nbsp; <b>Series:</b> {state?.series}</div>
          <div style={styles.timer}><b>Time Left:</b> {mm}:{ss}</div>
        </div>

        <h2>Question {current + 1} of {questions.length}</h2>
        <p style={styles.question}>{questions[current].question}</p>

        <div style={styles.options}>
          {questions[current].options.map((opt) => (
            <button key={opt} style={styles.button} onClick={() => handleAnswer(opt)}>
              {opt}
            </button>
          ))}
        </div>

        <div style={{ marginTop: 16, fontSize: 14 }}>
          Score so far: {score}
        </div>

        <button style={{ ...styles.button, marginTop: 16, backgroundColor: "#1E90FF" }}
                onClick={handleFinish}>
          Submit Now
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
    boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
  },
  container: {
    backgroundColor: "#ffffff",
    margin: "40px auto",
    padding: "30px",
    borderRadius: "12px",
    maxWidth: "700px",
    width: "92%",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  metaRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr auto",
    gap: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  timer: {
    padding: "6px 10px",
    background: "#eaf3ff",
    borderRadius: 6,
    border: "1px solid #cfe3ff",
    fontWeight: 600,
  },
  question: {
    fontSize: "18px",
    marginBottom: "18px",
    fontWeight: 500,
    textAlign: "left",
  },
  options: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 10,
  },
  button: {
    backgroundColor: "#4CAFEE",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Exam;
