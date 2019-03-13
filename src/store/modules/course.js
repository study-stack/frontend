import {
  GET_COURSES,
  GET_COURSE,
  COURSE_ERROR,
  COURSE_REQUEST,
  COURSE_SUCCESS
} from "../actions/course";
import { AUTH_LOGOUT } from "../actions/auth";
import axios from "axios";

const state = {
  loading: false,
  courses: [],
  course: {}
};

const baseURL = "http://localhost:8080";

const getters = {
  coursesLoading: state => state.loading,
  getCourses: state => state.courses
};

const actions = {
  [GET_COURSES]: ({ dispatch, commit }) => {
    commit(COURSE_REQUEST);
    return new Promise((resolve, reject) => {
      axios({
        url: `/courses/api/courses`,
        baseURL: baseURL,
        method: "GET"
      })
        .then(res => {
          if (res.status === 200) {
            resolve(res);
            commit(COURSE_SUCCESS);
            commit(GET_COURSES, res.data);
          }
        })
        .catch(err => {
          reject(err);
          commit(COURSE_ERROR);
          if (err.response.status === 401) {
            dispatch(AUTH_LOGOUT);
          }
        });
    });
  },
  [GET_COURSE]: ({ dispatch, commit }) => {

  }
};

const mutations = {
  [GET_COURSES]: (state, courses) => {
    state.courses = courses;
  },
  [COURSE_REQUEST]: state => {
    state.loading = true;
  },
  [COURSE_SUCCESS]: state => {
    state.loading = false;
  },
  [COURSE_ERROR]: state => {
    state.loading = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
