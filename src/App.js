import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { fakeInterests, fakeSkills } from "./dummy-data";
import Login from "./Login";

function App() {
  console.log("test return", fakeInterests);
  console.log("test return", fakeSkills);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
