import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import FeedbackButton from "./components/FeedbackButton";
import About from "./components/About";
import Contact from "./components/Contact";
import { Router, withRouter, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

//intialize Google Analytics
ReactGA.initialize("UA-168853063-1");

//Initialize google analytics page view tracking
//Credit: https://levelup.gitconnected.com/using-google-analytics-with-react-3d98d709399b
const history = createBrowserHistory();

history.listen((location) => {
  console.log("history callback hit!!!");
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

function App() {
  return (
    <Router history={history}>
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
