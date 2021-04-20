import api from "./AuthAPI";
import axios from "axios";

export const ACTION_TYPES = {
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAIL: "REGISTER_FAIL",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
  LOGOUT: "LOGOUT",
};

export const register = (data, OnSuccess) => (dispatch) => {
  api
    .auth()
    .register(data)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.REGISTER_SUCCESS,
        payload: response.data,
      });
      OnSuccess();
    })
    .catch((err) => {
      dispatch({
        type: ACTION_TYPES.REGISTER_FAIL,
        payload: null,
      });
      console.log(err);
    });
};

export const login = (data, OnSuccess) => (dispatch) => {
  console.log(data);
  api
    .auth()
    .login(data)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.LOGIN_SUCCESS,
        payload: response.data,
      });
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      OnSuccess();
    })
    .catch((err) => {
      dispatch({
        type: ACTION_TYPES.LOGIN_FAIL,
        payload: null,
      });
      console.log(err);
    });
};

export const logout = (dispatch) => {
  localStorage.removeItem("user");
  dispatch({
    type: ACTION_TYPES.LOGOUT,
  });
};
