import {
  CREATE_MEAL,
  DELETE_MEAL,
  FETCH_MEALS,
  UPDATE_MEAL,
} from "../constants/actionTypes";

const mealReducer = (meals = [], action) => {
  switch (action.type) {
    case FETCH_MEALS:
      return action.payload;
    case CREATE_MEAL:
      return [...meals, action.payload];
    case DELETE_MEAL:
      return meals.filter((meal) => meal._id !== action.payload);
    case UPDATE_MEAL:
      return meals.map((meal) =>
        meal._id === action.payload._id ? action.payload : meal
      );
    default:
      return meals;
  }
};
export default mealReducer;
