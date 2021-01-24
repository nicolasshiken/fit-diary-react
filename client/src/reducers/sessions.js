import { CREATE, DELETE, FETCH_ALL, UPDATE } from "../constants/actionTypes";

const sessionReducer = (sessions = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...sessions, action.payload];
    case DELETE:
      return sessions.filter((session) => session._id !== action.payload);
    case UPDATE:
      return sessions.map((session) =>
        session._id === action.payload._id ? action.payload : session
      );
    default:
      return sessions;
  }
};
export default sessionReducer;
