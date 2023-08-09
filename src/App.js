import React from "react";
import "./App.css";
import resumeData from "./resumeData";
import Header from "./components/Header";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <Header resumeData={resumeData} />
      <Resume resumeData={resumeData} />;
    </div>
  );
}

export default App;
