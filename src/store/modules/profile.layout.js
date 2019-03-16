const state = {
  sidebarIsSmall: false,
  headerBack: null
};

const getters = {
  getSidebarIsSmall: state => state.sidebarIsSmall,
  getHeaderBack: state => state.headerBack
};

const actions = {
  ["UPDATE_SIDEBAR"]: ({ commit }, state) => {
    const status = state.toLowerCase() === "small" ? true : false;
    commit("UPDATE_SIDEBAR", status);
  },
  ["UPDATE_HEADER_BACK"]: ({commit}, state) => {
    commit("UPDATE_HEADER_BACK", state);
  }
};

const mutations = {
  ["UPDATE_SIDEBAR"]: (state, status) => {
    state.sidebarIsSmall = status;
  },
  ["UPDATE_HEADER_BACK"]: (state, obj) => {
    state.headerBack = obj;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
