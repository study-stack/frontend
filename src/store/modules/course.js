import {
  GET_COURSES,
  GET_COURSE_REQUEST,
  GET_COURSE,
  COURSE_ERROR,
  COURSE_REQUEST,
  COURSE_SUCCESS,
  GET_COURSE_STEP,
  NEXT_COURSE_STEP,
  PUSH_COURSE_ANSWER
} from "../actions/course";
import { AUTH_LOGOUT } from "../actions/auth";
import axios from "axios";

const state = {
  loading: false,
  courses: [],
  course: null,
  courseStep: null
};

const baseURL = "https://stdstack.appspot.com/";

const getters = {
  coursesLoading: state => state.loading,
  getCourses: state => state.courses,
  getCourse: state => state.course,
  getCourseStep: state => state.courseStep
};

const actions = {
  [NEXT_COURSE_STEP]: ({ dispatch, commit }, id) => {
    return new Promise((resolve, reject) => {
      axios({
        url: `/api/courses/${id}/next`,
        baseURL: baseURL,
        method: "POST"
      })
        .then(res => {
          if (res.status === 200) {
            resolve(res);
            commit(COURSE_SUCCESS);
            commit(GET_COURSE_STEP, res.data);
          }
        })
        .catch(err => {
          reject(err);
          commit(COURSE_ERROR);
          if (err.response.status === 401) {
            dispatch(AUTH_LOGOUT);
          }
        });
      // const step = courseMock.steps.filter(item => item.id === id);
      // commit(GET_COURSE_STEP, step[0]);
    });
  },
  [GET_COURSE_STEP]: ({ dispatch, commit }, id) => {
    return new Promise((resolve, reject) => {
      axios({
        url: `/api/courses/${id}`,
        baseURL: baseURL,
        method: "POST"
      })
        .then(res => {
          if (res.status === 200) {
            resolve(res);
            commit(COURSE_SUCCESS);
            commit(GET_COURSE_STEP, res.data);
          }
        })
        .catch(err => {
          reject(err);
          commit(COURSE_ERROR);
          if (err.response.status === 401) {
            dispatch(AUTH_LOGOUT);
          }
        });
      // const step = courseMock.steps.filter(item => item.id === id);
      // commit(GET_COURSE_STEP, step[0]);
    });
  },
  [GET_COURSES]: ({ dispatch, commit }) => {
    commit(COURSE_REQUEST);
    return new Promise((resolve, reject) => {
      axios({
        url: `/api/courses`,
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
  [GET_COURSE]: ({ dispatch, commit }, id) => {
    commit(COURSE_REQUEST);
    commit(GET_COURSE_REQUEST);

    return new Promise((resolve, reject) => {
      axios({
        url: `/api/courses/${id}`,
        baseURL: baseURL,
        method: "GET"
      })
        .then(res => {
          if (res.status === 200) {
            resolve(res);
            commit(COURSE_SUCCESS);
            commit(GET_COURSE, res.data);
          }
        })
        .catch(err => {
          reject(err);
          commit(COURSE_ERROR);
          if (err.response.status === 401) {
            dispatch(AUTH_LOGOUT);
          }
        });

      // commit(GET_COURSE, {
      //   ...courseMock
      // });
    });
  },
  [PUSH_COURSE_ANSWER]: ({ dispatch, commit }, { id, answer }) => {
    commit(COURSE_REQUEST);
    return new Promise((resolve, reject) => {
      axios({
        url: `/api/courses/${id}/submit?input=${answer}/`,
        baseURL: baseURL,
        method: "GET"
      })
        .then(res => {
          if (res.status === 200) {
            resolve(res);
            commit(COURSE_SUCCESS);
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
  }
};

const mutations = {
  [GET_COURSE_STEP]: (state, step) => {
    state.courseStep = step;
  },
  [GET_COURSES]: (state, courses) => {
    state.courses = courses;
  },
  [GET_COURSE_REQUEST]: (state) => {
    state.course = null;
  },
  [GET_COURSE]: (state, course) => {
    state.course = course;
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
