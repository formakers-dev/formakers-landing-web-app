import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: () => import("../views/Home")
    },
    {
      path: "/process",
      component: () => import("../views/Process")
    },
    {
      path: "/company",
      component: () => import("../views/Company")
    },
    {
      path: "/signin",
      component: () => import("../views/SignIn")
    },
    {
      path: "/signup",
      component: () => import("../views/SignUp")
    },
    {
      path: "/policy",
      component: () => import("../views/Policy")
    },
    {
      path: "/SignupPrivacy",
      component: () => import("../views/SignupPrivacy")
    },
    {
      path: "/findPassword",
      component: () => import("../views/FindPassword")
    },
    {
      path: '/plan',
      component: () => import('../views/Plan')
    },
    {
      path: "*",
      component: () => import("../views/NotFoundPage")
    },
  ],
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  }
});
