import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import { AddMeal, AddSession, Meals, Sessions, SessionDetails } from "./pages";
import NavBarContainer from "./containers/navbar";


function App() {
  return (
    <>
      <NavBarContainer />
      <BrowserRouter>
        <Switch>

          <Route exact path="/sessions">
            <Sessions />
          </Route>
          

          <Route exact path="/meals">
            <Meals />
          </Route>

          <Route exact path="/add-session">
            <AddSession />
          </Route>

          <Route exact path="/add-meal">
            <AddMeal />
          </Route>

          <Route exact path="/session-details">
            <SessionDetails />
          </Route>

        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;