import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });
// const API = axios.create({
//   baseURL: "https://demo-fit-diary-api.herokuapp.com",
// });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

// Sessions

export const fetchSessions = () => API.get(`/sessions`);
export const fetchSession = (_id) => API.get(`/sessions/${_id}`);
export const createSession = (newSession) => API.post(`/sessions`, newSession);
export const deleteSession = (_id) => API.delete(`/sessions/${_id}`);
export const updateSession = (_id, updatedSession) =>
  API.patch(`/sessions/${_id}`, updatedSession);

// Meals

export const fetchMeals = () => API.get(`/meals`);
export const fetchMeal = (_id) => API.get(`/meals/${_id}`);
export const createMeal = (newMeal) => API.post(`/meals`, newMeal);
export const deleteMeal = (_id) => API.delete(`/meals/${_id}`);
export const updateMeal = (_id, updatedMeal) =>
  API.patch(`/meals/${_id}`, updatedMeal);

// Auth

export const signIn = (formData) => API.post("/auth/signin", formData);
export const signUp = (formData) => API.post("/auth/signup", formData);
