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
    },
    isLoggedIn: false,
    accessToken: ""
  },
  mutations: {
    SET_SELECTED_OPTIONS(state, options) {
      state.selectedOptions = options;
    },

    SET_ACCESS_TOKEN(state, token) {
      state.accessToken = token;
    },
    UNSET_ACCESS_TOKEN(state) {
      state.accessToken = "";
    },

    SET_COOKIE(state, token) {
      const expires = "1d";
      const secure = true;
      const sameSite = "none";
      this.$cookies.set(
        "access_token",
        token,
        expires,
        null,
        null,
        secure,
        sameSite
      );
      this.$cookies.set("access_token", token, expires);
    },
    REMOVE_COOKIE() {
      this.$cookies.remove("access_token");
    }
  }
});
