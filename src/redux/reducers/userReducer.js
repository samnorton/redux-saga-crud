import * as type from "../actionType";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.LOAD_USERS_START:
    case type.CREATE_USER_START:
    case type.DELETE_USER_START:
    case type.UPDATE_USER_START:
      return {
        ...state,
        loading: true,
      };
    case type.LOAD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case type.CREATE_USER_SUCCESS:
    case type.UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case type.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.filter((item) => item.id !== action.payload),
      };
    case type.LOAD_USERS_ERROR:
    case type.CREATE_USER_ERROR:
    case type.DELETE_USER_ERROR:
    case type.UPDATE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
