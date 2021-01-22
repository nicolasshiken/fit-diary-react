import axios from "axios";

export const url = "http://localhost:5000";

export const fetchSessions = () => axios.get(`${url}/sessions`);
export const fetchSession = () => axios.get(`${url}/sessions`);
export const createSession = (newSession) =>
  axios.post(`${url}/sessions`, newSession);
