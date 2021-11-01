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
