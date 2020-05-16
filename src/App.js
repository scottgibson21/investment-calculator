import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import FeedbackButton from "./components/FeedbackButton";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <div>
          <Route path="/" exact component={Dashboard} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
        <FeedbackButton />
      </div>
    </Router>
  );
}

export default App;
