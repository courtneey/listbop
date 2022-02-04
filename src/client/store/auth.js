import axios from "axios";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const TOKEN = "token";

const SET_AUTH = "SET_AUTH";

const setAuth = (auth) => ({ type: SET_AUTH, auth });

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
    } catch (authError) {
      return dispatch(setAuth({ error: authError }));
    }
  };

export const logout = () => {
  window.localStorage.removeItem(TOKEN);
  history.push("/login");
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
