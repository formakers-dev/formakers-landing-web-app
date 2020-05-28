import Vue from "vue";
import App from "./App.vue";
import { router } from "./router/index";
import store from "./store";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.use(Buefy);

Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhoLfrNWG70DezPBPLnLtPnx-NtKMA4gM",
  authDomain: "dragonserver-627cc.firebaseapp.com",
  databaseURL: "https://dragonserver-627cc.firebaseio.com",
  projectId: "dragonserver-627cc",
  storageBucket: "dragonserver-627cc.appspot.com",
  messagingSenderId: "695409197169",
  appId: "1:695409197169:web:3e8c483f80c14a6a79dbd0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
