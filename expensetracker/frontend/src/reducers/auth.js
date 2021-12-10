import {
  AUTH_ERROR,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  USER_LOADED,
  USER_LOADING,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: null,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
      };
    case AUTH_ERROR:
    case LOGOUT_SUCCESS:
    case LOGIN_ERROR:
    case REGISTER_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        token: null,
        user: null,
      };
    default:
      return state;
  }
};
