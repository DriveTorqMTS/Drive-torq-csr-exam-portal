// src/questions/index.js

// Each question: { question: "text", options: ["A","B","C","D"], answer: "A" }
const QUESTION_BANK = {
CSE: {
    "Set A": [
      { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Multi Language", "None"], answer: "Hyper Text Markup Language" },
      { question: "Which data structure uses LIFO?", options: ["Queue", "Array", "Stack", "Linked List"], answer: "Stack" },
      { question: "Which keyword is used to define a constant in Java?", options: ["static", "final", "const", "define"], answer: "final" },
    ],
    "Set B": [
      { question: "What is the time complexity of binary search?", options: ["O(n)", "O(n^2)", "O(log n)", "O(1)"], answer: "O(log n)" },
      { question: "Which protocol is used to send email?", options: ["HTTP", "SMTP", "FTP", "POP3"], answer: "SMTP" },
      { question: "Which sorting algorithm is the fastest in average case?", options: ["Bubble Sort", "Quick Sort", "Selection Sort", "Insertion Sort"], answer: "Quick Sort" },
    ],
    "Set C": [
      { question: "Which layer of OSI handles data encryption?", options: ["Network", "Presentation", "Transport", "Session"], answer: "Presentation" },
      { question: "In DBMS, what does ACID stand for?", options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Control, Integrity, Durability", "Access, Cache, Integrity, Data"], answer: "Atomicity, Consistency, Isolation, Durability" },
      { question: "Which operator is used to access a member of a structure in C?", options: [".", "->", ":", "::"], answer: "." },
    ],
  },

  ECE: {
    "Set A": [
      { question: "What is the unit of capacitance?", options: ["Ohm", "Farad", "Henry", "Coulomb"], answer: "Farad" },
      { question: "Which device converts digital signal to analog?", options: ["ADC", "DAC", "Amplifier", "Modulator"], answer: "DAC" },
      { question: "Which modulation is used for AM radio?", options: ["FM", "PM", "AM", "PCM"], answer: "AM" },
    ],
    "Set B": [
      { question: "What does FFT stand for?", options: ["Fast Fourier Transform", "Frequency Filter Test", "Fast Field Transmission", "Fourier Filter Technique"], answer: "Fast Fourier Transform" },
      { question: "Which semiconductor is most commonly used?", options: ["Germanium", "Silicon", "Gallium Arsenide", "Carbon"], answer: "Silicon" },
      { question: "Which logic gate gives output 1 only if inputs differ?", options: ["AND", "OR", "XOR", "NAND"], answer: "XOR" },
    ],
    "Set C": [
      { question: "The speed of light in vacuum is?", options: ["3x10^8 m/s", "1.5x10^8 m/s", "2x10^8 m/s", "3x10^6 m/s"], answer: "3x10^8 m/s" },
      { question: "What is the function of an oscillator?", options: ["Amplify signal", "Generate AC signal", "Rectify signal", "Convert signal"], answer: "Generate AC signal" },
      { question: "Which filter passes low frequencies and rejects high?", options: ["Band pass", "Low pass", "High pass", "Notch"], answer: "Low pass" },
    ],
  },

  MECH: {
    "Set A": [
      { question: "What is measured using a Vernier Caliper?", options: ["Temperature", "Pressure", "Length", "Torque"], answer: "Length" },
      { question: "Which law is related to the efficiency of heat engines?", options: ["Zeroth Law", "First Law", "Second Law", "Third Law"], answer: "Second Law" },
      { question: "Which cycle is used in diesel engines?", options: ["Otto", "Diesel", "Carnot", "Rankine"], answer: "Diesel" },
    ],
    "Set B": [
      { question: "What does CNC stand for?", options: ["Computer Numerical Control", "Central Node Circuit", "Complex Network Control", "Computed Neutral Code"], answer: "Computer Numerical Control" },
      { question: "Which device measures rotational speed?", options: ["Barometer", "Tachometer", "Anemometer", "Thermometer"], answer: "Tachometer" },
      { question: "Which metal is used for making aircraft bodies?", options: ["Iron", "Aluminium", "Copper", "Brass"], answer: "Aluminium" },
    ],
    "Set C": [
      { question: "What is the SI unit of stress?", options: ["Pascal", "Newton", "Joule", "Meter"], answer: "Pascal" },
      { question: "Which process removes material by impact of abrasive?", options: ["Turning", "Grinding", "Drilling", "Shot blasting"], answer: "Shot blasting" },
      { question: "Which gas is used in welding?", options: ["Oxygen", "Nitrogen", "Argon", "Hydrogen"], answer: "Argon" },
    ],
  },

  CIVIL: {
    "Set A": [
      { question: "What is the full form of RCC?", options: ["Reinforced Concrete Cement", "Rapid Curing Concrete", "Reinforced Cement Concrete", "Ready Cast Concrete"], answer: "Reinforced Cement Concrete" },
      { question: "What is the unit of force?", options: ["Newton", "Joule", "Pascal", "Watt"], answer: "Newton" },
      { question: "Which cement is suitable for marine structures?", options: ["PPC", "Quick Setting Cement", "Sulphate Resisting Cement", "Ordinary Portland Cement"], answer: "Sulphate Resisting Cement" },
    ],
    "Set B": [
      { question: "Which instrument measures horizontal angles?", options: ["Plumb bob", "Theodolite", "Clinometer", "Compass"], answer: "Theodolite" },
      { question: "What is the standard water-cement ratio?", options: ["0.25", "0.40", "0.45", "0.50"], answer: "0.45" },
      { question: "Which foundation is used for weak soil?", options: ["Raft foundation", "Isolated footing", "Pile foundation", "Mat foundation"], answer: "Pile foundation" },
    ],
    "Set C": [
      { question: "What is the unit of pressure?", options: ["Joule", "Pascal", "Newton", "Bar"], answer: "Pascal" },
      { question: "Which test measures concrete strength?", options: ["Slump test", "Rebound hammer test", "Compression test", "Soundness test"], answer: "Compression test" },
      { question: "Which surveying method is most accurate?", options: ["Plane table", "Chain", "Theodolite", "Tacheometry"], answer: "Theodolite" },
    ],
  },

  EEE: {
    "Set A": [
      { question: "What is Ohm's Law?", options: ["V = I/R", "V = IR", "I = VR", "R = IV"], answer: "V = IR" },
      { question: "What device stores electric charge?", options: ["Inductor", "Resistor", "Capacitor", "Transformer"], answer: "Capacitor" },
      { question: "What is the unit of power?", options: ["Joule", "Watt", "Volt", "Ampere"], answer: "Watt" },
    ],
    "Set B": [
      { question: "Which motor is used in ceiling fans?", options: ["DC motor", "Universal motor", "Single-phase induction motor", "Stepper motor"], answer: "Single-phase induction motor" },
      { question: "What is the frequency of AC in India?", options: ["50 Hz", "60 Hz", "40 Hz", "45 Hz"], answer: "50 Hz" },
      { question: "Which component converts AC to DC?", options: ["Rectifier", "Transistor", "Amplifier", "Inductor"], answer: "Rectifier" },
    ],
    "Set C": [
      { question: "What is the unit of current?", options: ["Volt", "Coulomb", "Ampere", "Farad"], answer: "Ampere" },
      { question: "What is the main function of a transformer?", options: ["Amplify current", "Change voltage level", "Store energy", "Rectify current"], answer: "Change voltage level" },
      { question: "What type of current flows in a battery?", options: ["Alternating", "Direct", "Pulsating", "None"], answer: "Direct" },
    ],
  },

  IT: {
    "Set A": [
      { question: "Which of these is not a programming language?", options: ["Python", "HTML", "C++", "Java"], answer: "HTML" },
      { question: "What does API stand for?", options: ["Application Programming Interface", "Applied Program Interaction", "Advanced Protocol Integration", "App Plugin Interface"], answer: "Application Programming Interface" },
      { question: "Which is a NoSQL database?", options: ["MySQL", "Oracle", "MongoDB", "PostgreSQL"], answer: "MongoDB" },
    ],
    "Set B": [
      { question: "Which HTTP method is used to retrieve data?", options: ["POST", "GET", "PUT", "DELETE"], answer: "GET" },
      { question: "Which tag is used to include JavaScript in HTML?", options: ["<java>", "<script>", "<js>", "<code>"], answer: "<script>" },
      { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Styling Syntax", "Computer Style Script", "Colorful Sheet Styling"], answer: "Cascading Style Sheets" },
    ],
    "Set C": [
      { question: "What is React primarily used for?", options: ["Database management", "Frontend UI", "Backend API", "OS development"], answer: "Frontend UI" },
      { question: "Which of the following is not a JS framework?", options: ["Angular", "React", "Laravel", "Vue"], answer: "Laravel" },
      { question: "What symbol is used for comments in JS?", options: ["//", "/* */", "#", "<!-- -->"], answer: "//" },
    ],
  },
};

// helper to fetch & prepare questions (random 60)
export function getQuestions(branch, series) {
  const bank = QUESTION_BANK?.[branch]?.[series];
  if (!bank) return [];
  const shuffled = [...bank].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 60);
}

export default QUESTION_BANK;
