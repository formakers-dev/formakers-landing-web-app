import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/persona",
    name: "Home",
    component: () => import("../views/Home")
  },
  {
    path: "/persona/result",
    name: "Result",
    component: () => import("../views/Result")
  },
  {
    path: "*",
    component: () => import("../views/NotFound")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
