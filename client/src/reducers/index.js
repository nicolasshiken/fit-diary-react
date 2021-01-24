import { combineReducers } from "redux";
import sessions from "./sessions";
import meals from "./meals";

export default combineReducers({
  sessions,
  meals,
});
