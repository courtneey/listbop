import { AppDispatch } from "./index";
import { Reducer } from "redux";
import axios from "axios";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const TOKEN = "token";

const SET_AUTH = "SET_AUTH";

interface Auth {
  id?: number;
  firstName?: string;
  email?: string;
  error?: any;
}

const setAuth = (auth: Auth) => ({
  type: SET_AUTH,
  auth: { id: auth.id, firstName: auth.firstName, email: auth.email },
});

export const me = () => async (dispatch: AppDispatch) => {
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
  (
    method?: string,
    email?: string,
    password?: string,
    firstName?: string,
    lastName?: string
  ) =>
  async (dispatch: AppDispatch) => {
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

const initialState = {
  id: null,
  firstName: null,
  email: null,
};

export const authReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    default:
      return state;
  }
};
