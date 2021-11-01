import axios from "axios";

export const loadUsersApi = () => {
  return axios.get("http://localhost:5000/users");
};
