import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8081/api",
});

// const persistedString = localStorage.getItem("persist:user");
// const token = persistedString?.includes("accessToken")
//   ? JSON.parse(JSON.parse(persistedString).userInfo).accessToken
//   : "";
const token = localStorage.getItem("accessToken");

/**
 * axios instance with Authorization header
 */
const authInstance = (port) =>
  axios.create({
    baseURL: import.meta.env.VITE_BASE_URL || `http://localhost:${port}/api`,
    headers: {
      "Content-Type": "application/json",
      Authorization: token !== "" ? `Bearer ${token}` : "",
    },
  });

export default instance;
export { authInstance };
