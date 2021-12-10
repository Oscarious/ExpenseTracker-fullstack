import axios from "axios";
import {
  USER_LOADED,
  AUTH_ERROR,
  USER_LOADING,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
} from "./types";
import { errorMessage } from "./messages";
import { tokenConfig } from "../common/auth-config";

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  const config = tokenConfig(getState);
  axios
    .get("/api/v1/auth/user", config)
    .then((res) =>
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: AUTH_ERROR,
      })
    );
};

export const register =
  ({ username, email, password }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ username, email, password });
    axios
      .post("/api/v1/auth/register", body, config)
      .then((res) => {
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch(
          errorMessage(REGISTER_ERROR, err.response.data, err.response.status)
        );
      });
  };

export const login =
  ({ username, password }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ username, password });
    axios
      .post("/api/v1/auth/login", body, config)
      .then((res) => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch(
          errorMessage(LOGIN_ERROR, err.response.data, err.response.status)
        );
      });
  };

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
};