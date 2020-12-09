import Vue from "vue";
import Buefy from "buefy";
import VueGtag from "vue-gtag";

import "buefy/dist/buefy.css";
import "@mdi/font/css/materialdesignicons.min.css";
import "mdi/css/materialdesignicons.min.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import config from "../config";

Vue.use(Buefy);

Vue.use(VueGtag, {
  config: {
    id: config.gtagId
  }
});

Vue.config.productionTip = false;

const VueModel = new Vue({
  router,
  store,
  render: h => h(App)
});

VueModel.$mount("#app");

export default VueModel;
