import axios from "axios";

export const loadUsersApi = () => {
  return axios.get("http://localhost:5000/users");
};

export const createUserApi = (user) => {
  return axios.post("http://localhost:5000/users", user);
};

export const deleteUserApi = (userId) => {
  return axios.delete(`http://localhost:5000/users/${userId}`);
};

export const updateUserApi = (userId, userInfo) => {
  return axios.put(`http://localhost:5000/users/${userId}`, userInfo);
};
