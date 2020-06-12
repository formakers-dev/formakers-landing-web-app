import Vue from "vue";
import Vuex from "vuex";
// 1: 데이터 읽어오기
import ProductList from "../api/standardData.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productList: [] // 2: 저장소
  },
  mutations: {
    setDB(state, data) {
      // 3: state에 저장된 데이터 상태 변경시에 사용한다. data 변수를 db에 할당한다.
      state.productList = data;
    }
  },
  actions: {
    // 3.5 : actions 에서는 비동기 로직을 다룬다.
    getData({ commit }) {
      // 4: 컴포넌트의 methods 처럼 불러온다. mutation에 대한 commit 을 한다.
      const res = ProductList;
      commit("setDB", res); // ㄴcommit 할때, data.json의 데이터를 담은 변수를 전달한다.
    }
  },
  modules: {}
});
