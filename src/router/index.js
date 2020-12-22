import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login")
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () => import("../views/SignUp")
  },
  {
    path: "/my-page",
    name: "MyPage",
    component: () => import("../views/MyPage"),
    children: [
      {
        path: "",
        component: () => import("../views/RequestList")
      },
      {
        path: "request-list",
        component: () => import("../views/RequestList")
      }
    ]
  },
  {
    path: "/my-page/beta-test/:id",
    component: () => import("../views/BetaTest")
  },
  {
    path: "/persona",
    name: "PersonaHome",
    component: () => import("../views/PersonaHome")
  },
  {
    path: "/persona/result",
    name: "PersonaResult",
    component: () => import("../views/PersonaResult")
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
