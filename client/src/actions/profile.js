import { UPDATE_PROFILE, GET_PROFILE } from "../constants/actionTypes";
import * as api from "../api/";

export const updateProfile = (formData, setEditing) => async (dispatch) => {
  try {
    const { data } = await api.updateProfile(formData);
    dispatch({ type: UPDATE_PROFILE, payload: data });
    setEditing(false);
  } catch (error) {
    console.error(error);
  }
};

export const getProfile = () => async (dispatch) => {
  try {
    const { data } = await api.getProfile();
    dispatch({ type: GET_PROFILE, payload: data });
  } catch (error) {
    console.error(error);
  }
};
