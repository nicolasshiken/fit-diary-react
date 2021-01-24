import {
  FETCH_SESSIONS,
  CREATE_SESSION,
  DELETE_SESSION,
  UPDATE_SESSION,
} from "../constants/actionTypes";
import * as api from "../api";

export const getSessions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchSessions();
    dispatch({ type: FETCH_SESSIONS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createSession = (session) => async (dispatch) => {
  try {
    const { data } = await api.createSession(session);
    dispatch({ type: CREATE_SESSION, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteSession = (_id) => async (dispatch) => {
  try {
    await api.deleteSession(_id);

    dispatch({ type: DELETE_SESSION, payload: _id });
  } catch (error) {
    console.log(error);
  }
};

export const updateSession = (_id, session) => async (dispatch) => {
  try {
    const { data } = await api.updateSession(_id, session);
    dispatch({ type: UPDATE_SESSION, payload: data });
  } catch (error) {
    console.log(error);
  }
};
