import Vue from 'vue';
import Buefy from 'buefy';

import 'buefy/dist/buefy.css';
import 'mdi/css/materialdesignicons.min.css';

import App from './App.vue';

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
