import axios from "axios";

// export const url = "https://demo-fit-diary-api.herokuapp.com";
export const url = "http://localhost:5000";

export const fetchSessions = () => axios.get(`${url}/sessions`);
export const fetchSession = (_id) => axios.get(`${url}/sessions/${_id}`);
export const createSession = (newSession) =>
  axios.post(`${url}/sessions`, newSession);
export const deleteSession = (_id) => axios.delete(`${url}/sessions/${_id}`);
