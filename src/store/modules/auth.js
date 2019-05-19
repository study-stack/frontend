import {
  AUTH_REQUEST,
  AUTH_ERROR,
  AUTH_SUCCESS,
  AUTH_LOGOUT
} from "../actions/auth";
import axios from "axios";
import router from "../../router";

const state = {
  token: localStorage.getItem("stack.user-token") || "",
  refresh_token: localStorage.getItem("stack.refresh_token") || "",
  expires_in: localStorage.getItem("stack.expires_in") || "",
  status: "",
  response: "",
  statusCode: ""
};

const baseURL = "https://stdstack.appspot.com/";

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
  authResponse: state => state.response,
  refreshToken: state => state.refresh_token,
  statusCode: state => state.statusCode,
  expiresIn: state => state.expiresIn
};

const actions = {
  [AUTH_REQUEST]: ({ commit }, user) => {
    return new Promise((resolve, reject) => {
      const auth = new FormData();
      auth.set("username", user.username);
      auth.set("password", user.password);
      commit(AUTH_REQUEST);
      axios({
        url: "/oauth/oauth/token",
        baseURL: baseURL,
        data: `grant_type=password&password=${user.password}&username=${
          user.username
        }`,
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic Zm9vQ2xpZW50SWRQYXNzd29yZDpzZWNyZXQ"
        }
      })
        .then(resp => {
          localStorage.setItem("stack.user-token", resp.data.access_token);
          localStorage.setItem("stack.refresh_token", resp.data.refresh_token);
          localStorage.setItem("stack.expires_in", resp.data.expires_in);
          axios.defaults.headers.common["Authorization"] = `Bearer ${
            resp.data.access_token
          }`;
          commit(AUTH_SUCCESS, resp);
          // dispatch(USER_REQUEST); // for get user info in profile
          resolve(resp);
        })
        .catch(err => {
          commit(AUTH_ERROR, err);
          localStorage.removeItem("stack.user-token");
          localStorage.removeItem("stack.refresh_token");
          localStorage.removeItem("stack.expires_in");
          reject(err);
        });
    });
  },
  [AUTH_LOGOUT]: ({ commit }) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_LOGOUT);
      axios({
        url: `/logout`,
        baseURL: baseURL,
        method: "GET"
      })
        .then(() => {
          resolve();
        })
        .catch(() => {
          reject();
        })
        .finally(() => {
          localStorage.removeItem("stack.user-token");
          localStorage.removeItem("stack.refresh_token");
          localStorage.removeItem("stack.expires_in");
          delete axios.defaults.headers.common["Authorization"];

          router.push(`/login?redirect=${router.currentRoute.fullPath}`);
        });
    });
  }
};

const mutations = {
  [AUTH_REQUEST]: state => {
    state.status = "loading";
  },
  [AUTH_SUCCESS]: (state, resp) => {
    state.status = "success";
    state.token = resp.data.access_token;
    state.refresh_token = resp.data.refresh_token;
    state.expires_in = resp.data.expires_in;
    state.statusCode = resp.status;
  },
  [AUTH_ERROR]: (state, resp) => {
    state.status = "error";
    state.response = resp.response;
    state.statusCode = resp.status;
  },
  [AUTH_LOGOUT]: state => {
    state.token = "";
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
