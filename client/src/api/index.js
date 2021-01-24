import axios from "axios";

export const url = "https://demo-fit-diary-api.herokuapp.com";
// export const url = "http://localhost:5000";

// Sessions

export const fetchSessions = () => axios.get(`${url}/sessions`);
export const fetchSession = (_id) => axios.get(`${url}/sessions/${_id}`);
export const createSession = (newSession) =>
  axios.post(`${url}/sessions`, newSession);
export const deleteSession = (_id) => axios.delete(`${url}/sessions/${_id}`);
export const updateSession = (_id, updatedSession) =>
  axios.patch(`${url}/sessions/${_id}`, updatedSession);

// Meals

export const fetchMeals = () => axios.get(`${url}/meals`);
export const fetchMeal = (_id) => axios.get(`${url}/meals/${_id}`);
export const createMeal = (newMeal) => axios.post(`${url}/meals`, newMeal);
export const deleteMeal = (_id) => axios.delete(`${url}/meals/${_id}`);
export const updateMeal = (_id, updatedMeal) =>
  axios.patch(`${url}/meals/${_id}`, updatedMeal);
