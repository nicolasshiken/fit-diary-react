import { CREATE, FETCH_ALL, FETCH_ONE } from "../constants/actionTypes";
import * as api from "../api";

export const getSessions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchSessions();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createSession = (session) => async (dispatch) => {
  try {
    const { data } = await api.createSession(session);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getSession = () => async (dispatch) => {
  try {
    const { data } = await api.fetchSession();
    dispatch({ type: FETCH_ONE, payload: data });
  } catch (error) {}
};
