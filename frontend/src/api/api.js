import axios from "axios";

const API_BASE =  process.env.REACT_APP_API || "http://14.187.177.146:2910/api";

export const axiosAPI = axios.create({ baseURL: API_BASE });
axiosAPI.interceptors.request.use((req) => {
  if (!req.headers["Content-Type"])
    req.headers["Content-Type"] = "application/json";
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    req.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return req;
});