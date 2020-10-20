import Axios from "axios";

export const UserLogin = (username, password) =>
  Axios.post("/api/users/login", { username, password });
