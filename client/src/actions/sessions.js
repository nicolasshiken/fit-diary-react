import { CREATE, DELETE } from "../constants/actionTypes";
import * as api from "../api";

export const createSession = (session) => async (dispatch) => {
  try {
    const { data } = await api.createSession(session);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteSession = (_id) => async (dispatch) => {
  try {
    await api.deleteSession(_id);

    dispatch({ type: DELETE, payload: _id });
  } catch (error) {
    console.log(error);
  }
};
