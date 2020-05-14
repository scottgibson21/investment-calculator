import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import FeedbackButton from "./components/FeedbackButton";

function App() {
  return (
    <div>
      <Navigation />
      <Dashboard />
      <FeedbackButton />
    </div>
  );
}

export default App;
