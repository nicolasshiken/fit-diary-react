import { CREATE, FETCH_ALL, FETCH_ONE } from "../constants/actionTypes";

const sessionReducer = (sessions = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...sessions, action.payload];
    case FETCH_ONE:
      return action.payload;
    default:
      return sessions;
  }
};
export default sessionReducer;
