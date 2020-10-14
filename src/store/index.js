import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedOptions: {
      gender: [],
      ageGroup: [],
      playStyle: [],
      payStyle: []
    }
  },
  mutations: {
    SET_SELECTED_OPTIONS(state, options) {
      state.selectedOptions = options;
    }
  }
});
