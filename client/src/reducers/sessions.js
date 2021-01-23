import { CREATE, DELETE } from "../constants/actionTypes";

const sessionReducer = (sessions = [], action) => {
  switch (action.type) {
    case CREATE:
      return [...sessions, action.payload];
    case DELETE:
      return sessions.filter((session) => session._id !== action.payload);
    default:
      return sessions;
  }
};
export default sessionReducer;
