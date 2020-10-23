import Axios from "axios";

export const CheckUser = () => Axios.get("/api/users");
export const UserLogin = (username, password) =>
  Axios.post("/api/users/login", { username, password });
export const UserRegister = (fullname, username, password, email) =>
  Axios.post("/api/users", { fullname, username, password, email });
export const UserLogout = () => Axios.post("/api/users/logout");
