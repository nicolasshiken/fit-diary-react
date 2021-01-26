import { combineReducers } from "redux";
import sessions from "./sessions";
import meals from "./meals";
import auth from "./auth";

export default combineReducers({
  sessions,
  meals,
  auth,
});
