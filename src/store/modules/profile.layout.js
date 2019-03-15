const state = {
  sidebarIsSmall: false
};

const getters = {
  getSidebarIsSmall: state => state.sidebarIsSmall
};

const actions = {
  ["UPDATE_SIDEBAR"]: ({ commit }, state) => {
    const status = state.toLowerCase() === "small" ? true : false;
    commit("UPDATE_SIDEBAR", status);
  }
};

const mutations = {
  ["UPDATE_SIDEBAR"]: (state, status) => {
    state.sidebarIsSmall = status;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
