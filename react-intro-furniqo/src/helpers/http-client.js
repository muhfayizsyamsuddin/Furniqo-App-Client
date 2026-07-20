import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-furniqo.faizms.com",
});
// Tambahkan token ke setiap request private
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  // console.log(">>> Axios Config:", config);
  return config;
});