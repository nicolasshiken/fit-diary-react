import {
  FETCH_MEALS,
  CREATE_MEAL,
  DELETE_MEAL,
  UPDATE_MEAL,
} from "../constants/actionTypes";
import * as api from "../api";

export const getMeals = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMeals();
    dispatch({ type: FETCH_MEALS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createMeal = (meal) => async (dispatch) => {
  try {
    const { data } = await api.createMeal(meal);
    dispatch({ type: CREATE_MEAL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteMeal = (_id) => async (dispatch) => {
  try {
    await api.deleteMeal(_id);

    dispatch({ type: DELETE_MEAL, payload: _id });
  } catch (error) {
    console.log(error);
  }
};

export const updateMeal = (_id, meal) => async (dispatch) => {
  try {
    const { data } = await api.updateMeal(_id, meal);
    dispatch({ type: UPDATE_MEAL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
