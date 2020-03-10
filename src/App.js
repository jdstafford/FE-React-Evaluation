import React from "react";

import "bulma/css/bulma.css";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { fakeInterests, fakeSkills } from "./dummy-data";

import Home from "./components/Home";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  console.log("test return", fakeInterests);
  console.log("test return", fakeSkills);
  return (
    <div className="App">
      <Router>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
