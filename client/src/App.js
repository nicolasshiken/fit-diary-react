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
  AddMeal,
  MealList,
} from "./components";
import { getSessions } from "./actions/sessions";
import { getMeals } from "./actions/meals";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSessions());
    dispatch(getMeals());
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

          <Route exact path="/add-meal">
            <AddMeal />
          </Route>

          <Route exact path="/meals">
            <MealList />
          </Route>

          {/* Coming soon */}
          <Route exact path="/profile">
            <ComingSoon />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
