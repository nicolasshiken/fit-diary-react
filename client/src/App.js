import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  AddSession,
  Navbar,
  SessionDetails,
  SessionList,
  DemoHome,
  AddMeal,
  MealList,
  Auth,
  Profile,
} from "./components";

function App() {
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

          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
