import React from "react";

import "bulma/css/bulma.css";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { fakeInterests, fakeSkills } from "./dummy-data";

import HomePage from "./Home/HomePage";
import LoginPage from "./Login/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import PageWrapper from "./components/PageWrapper";

function App() {
  console.log("test return", fakeInterests);
  console.log("test return", fakeSkills);
  return (
    <div className="App">
      <Router>
        <Route exact path="/login" component={LoginPage} />
        <ProtectedRoute exact path="/" component={PageWrapper(HomePage)} />
        <ProtectedRoute exact path="/nav2" component={PageWrapper} />
        <ProtectedRoute exact path="/nav3" component={PageWrapper} />
      </Router>
    </div>
  );
}

export default App;
