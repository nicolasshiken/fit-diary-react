import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AddSession, Navbar, SessionDetails, SessionList } from "./components";

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
            <AddSession />
          </Route>

          <Route exact path="/sessions/:_id">
            <SessionDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
