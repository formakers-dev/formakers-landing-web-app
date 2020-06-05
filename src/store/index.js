import Vue from "vue";
import Vuex from "vuex";
import DB from "../api/data.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    db: []
  },
  mutations: {
    setDB(state, data) {
      state.db = data;
    }
  },
  actions: {
    dbInit({ commit }) {
      const res = DB;
      commit("setDB", res);
    }
  },
  modules: {}
});
