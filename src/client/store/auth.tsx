import { AppDispatch } from "./index";
import { Reducer } from "redux";
import axios from "axios";
import { API_ID, API_KEY, OAUTH2_BASE_URL } from "../../secret";
import { Buffer } from "buffer";

const TOKEN = "token";
const SET_AUTH = "SET_AUTH";

interface Auth {
  id?: number;
  firstName?: string;
  email?: string;
  krogerToken?: string;
  error?: any;
}

const setAuth = (auth: Auth, krogerToken?: string) => ({
  type: SET_AUTH,
  auth: {
    id: auth.id,
    firstName: auth.firstName,
    email: auth.email,
    krogerToken,
  },
});

export const me = () => async (dispatch: AppDispatch) => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    const res = await axios.get("/auth/me", {
      headers: {
        authorization: token,
      },
    });

    if (res.data) {
      const encoded = Buffer.from(`${API_ID}:${API_KEY}`);
      const authorization = `Basic ${encoded.toString("base64")}`;

      let krogerToken = "";

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      myHeaders.append("Authorization", `${authorization}`);

      const urlencoded = new URLSearchParams();
      urlencoded.append("grant_type", "client_credentials");
      urlencoded.append("scope", "product.compact");

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
      };

      await fetch(`${OAUTH2_BASE_URL}/token`, requestOptions as any)
        .then((response) => response.text())
        .then((result) => {
          const { access_token } = JSON.parse(result);
          krogerToken = access_token;
        })
        .catch((err) =>
          console.log("There was an issue fetching the token:", err)
        );

      window.localStorage.setItem("krogerToken", krogerToken);

      return dispatch(setAuth(res.data, krogerToken));
    }
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
  window.localStorage.removeItem("krogerToken");
  return {
    type: SET_AUTH,
    auth: {},
  };
};

const initialState = {
  id: null,
  firstName: null,
  email: null,
  krogerToken: null,
};

export const authReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    default:
      return state;
  }
};
