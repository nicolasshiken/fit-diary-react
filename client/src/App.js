import React from "react";
// import { dispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AddSessionForm, Navbar, SessionList } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/sessions">
            <SessionList />
          </Route>
          <Route exact path="/add-session">
            <AddSessionForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
