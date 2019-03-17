import {
  GET_COURSES,
  GET_COURSE,
  COURSE_ERROR,
  COURSE_REQUEST,
  COURSE_SUCCESS,
  GET_COURSE_STEP
} from "../actions/course";
import { AUTH_LOGOUT } from "../actions/auth";
import axios from "axios";

const state = {
  loading: false,
  courses: [],
  course: {},
  courseStep: {}
};

const baseURL = "http://localhost:8080";

const getters = {
  coursesLoading: state => state.loading,
  getCourses: state => state.courses,
  getCourse: state => state.course,
  getCourseStep: state => state.courseStep
};

const courseMock = {
  id: "1",
  name: "Title",
  description: "Description",
  skills: ["Java experience", "java core development"],
  prerequisite: ["Spring", "Java", "git"],
  steps: [
    {
      id: 1,
      title: "Title Java Spring Project 1",
      shortDescription: "1 learn java together"
    },
    {
      id: 2,
      title: "Title Java Spring Project 2",
      shortDescription: "2 learn java together"
    },
    {
      id: 3,
      title: "Title Java Spring Project 3",
      shortDescription: "3 learn java together"
    },
    {
      id: 4,
      title: "Title Java Spring Project 4",
      shortDescription: "4 learn java together"
    },
    {
      id: 5,
      title: "Title Java Spring Project 1",
      shortDescription: "1 learn java together"
    },
    {
      id: 6,
      title: "Title Java Spring Project 2",
      shortDescription: "2 learn java together"
    },
    {
      id: 7,
      title: "Title Java Spring Project 3",
      shortDescription: "3 learn java together"
    },
    {
      id: 8,
      title: "Title Java Spring Project 4",
      shortDescription: "4 learn java together"
    }
  ]
}
const actions = {
  [GET_COURSE_STEP]: ({ dispatch, commit }, id) => {
    return new Promise((resolve, reject) => {
      // axios({
      //   url: `/courses/api/courses/${id}`,
      //   baseURL: baseURL,
      //   method: "GET"
      // })
      //   .then(res => {
      //     if (res.status === 200) {
      //       resolve(res);
      //       commit(COURSE_SUCCESS);
      //       commit(GET_COURSE, res.data);
      //     }
      //   })
      //   .catch(err => {
      //     reject(err);
      //     commit(COURSE_ERROR);
      //     if (err.response.status === 401) {
      //       dispatch(AUTH_LOGOUT);
      //     }
      //   });
      const step = courseMock.steps.filter(item => item.id === id);
      commit(GET_COURSE_STEP, step[0]);
    });
  },
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
  [GET_COURSE]: ({ dispatch, commit }, id) => {
    commit(COURSE_REQUEST);
    return new Promise((resolve, reject) => {
      // axios({
      //   url: `/courses/api/courses/${id}`,
      //   baseURL: baseURL,
      //   method: "GET"
      // })
      //   .then(res => {
      //     if (res.status === 200) {
      //       resolve(res);
      //       commit(COURSE_SUCCESS);
      //       commit(GET_COURSE, res.data);
      //     }
      //   })
      //   .catch(err => {
      //     reject(err);
      //     commit(COURSE_ERROR);
      //     if (err.response.status === 401) {
      //       dispatch(AUTH_LOGOUT);
      //     }
      //   });

      commit(GET_COURSE, {
        ...courseMock
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
