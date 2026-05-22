import API from "../api/axiosConfig";

const login = (data) =>
  API.post("/auth/login", data);

const register = (data) =>
  API.post("/auth/register", data);

export default {
  login,
  register,
};