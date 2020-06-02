import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import FeedbackButton from "./components/FeedbackButton";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navigation />
        <Container fluid>
          <Route path="/" exact component={Dashboard} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Container>
        <FeedbackButton />
      </React.Fragment>
    </Router>
  );
}

export default App;
