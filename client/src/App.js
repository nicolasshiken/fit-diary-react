import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  AddSession,
  Navbar,
  SessionDetails,
  SessionList,
  DemoHome,
  ComingSoon,
} from "./components";
import { getSessions } from "./actions/sessions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSessions());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <DemoHome />
          </Route>

          <Route exact path="/sessions">
            <SessionList />
          </Route>

          <Route exact path="/add-session">
            <AddSession title={"Agregar sesión de entrenamiento"} />
          </Route>

          <Route exact path="/sessions/:_id">
            <SessionDetails />
          </Route>

          {/* Coming soon */}
          <Route exact path="/profile">
            <ComingSoon />
          </Route>

          <Route exact path="/add-meal">
            <ComingSoon />
          </Route>

          <Route exact path="/meals">
            <ComingSoon />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
