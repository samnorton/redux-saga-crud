import * as type from "../actionType";

export const loadUsersStart = () => ({
  type: type.LOAD_USERS_START,
});

export const loadUsersSuccess = (users) => ({
  type: type.LOAD_USERS_SUCCESS,
  payload: users,
});

export const loadUsersError = (error) => ({
  type: type.LOAD_USERS_ERROR,
  payload: error,
});

export const createUserStart = (user) => ({
  type: type.CREATE_USER_START,
  payload: user,
});

export const createUserSuccess = () => ({
  type: type.CREATE_USER_SUCCESS,
});

export const createUserError = (error) => ({
  type: type.CREATE_USER_ERROR,
  payload: error,
});

export const deleteUserStart = (userId) => ({
  type: type.DELETE_USER_START,
  payload: userId,
});

export const deleteUserSuccess = (userId) => ({
  type: type.DELETE_USER_SUCCESS,
  payload: userId,
});

export const deleteUserError = (error) => ({
  type: type.DELETE_USER_ERROR,
  payload: error,
});

export const updateUserStart = (userInfo) => ({
  type: type.UPDATE_USER_START,
  payload: userInfo,
});

export const updateUserSuccess = () => ({
  type: type.UPDATE_USER_SUCCESS,
});

export const updateUserError = (error) => ({
  type: type.UPDATE_USER_ERROR,
  payload: error,
});
