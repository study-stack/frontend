import Vue from "vue";
import Vuex from "vuex";
import auth from "./store/modules/auth";
import course from "./store/modules/course";
import profileLayout from "./store/modules/profile.layout";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    auth,
    course,
    profileLayout
  },
  strict: debug
});
