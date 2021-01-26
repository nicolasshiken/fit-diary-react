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
  Auth,
} from "./components";
import { getSessions } from "./actions/sessions";
import { getMeals } from "./actions/meals";

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.result?.name) {
      dispatch(getSessions());
      dispatch(getMeals());
    }
  }, [dispatch, user?.result?.name]);

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

          <Route exact path="/auth">
            <Auth />
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
