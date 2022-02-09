import axios from "axios";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const TOKEN = "token";

const SET_AUTH = "SET_AUTH";

const setAuth = (auth) => ({ type: SET_AUTH, auth });

export const me = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    const res = await axios.get("/auth/me", {
      headers: {
        authorization: token,
      },
    });
    return dispatch(setAuth(res.data));
  }
};

export const authenticate =
  (method, email, password, firstName, lastName) => async (dispatch) => {
    try {
      let res;
      if (method === "signup") {
        res = await axios.post(`/auth/${method}`, {
          email,
          password,
          firstName,
          lastName,
        });
      } else {
        res = await axios.post(`/auth/${method}`, { email, password });
      }
      window.localStorage.setItem(TOKEN, res.data.token);
      dispatch(me());
    } catch (authError) {
      return dispatch(setAuth({ error: authError }));
    }
  };

export const logout = () => {
  window.localStorage.removeItem(TOKEN);
  return {
    type: SET_AUTH,
    auth: {},
  };
};

export default function authReducer(state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    default:
      return state;
  }
}
