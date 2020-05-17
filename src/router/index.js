import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Process from "../views/Process";
import Company from "../views/Company";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";

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
      component: Home
    },
    {
      path: "/process",
      component: Process
    },
    {
      path: "/company",
      component: Company
    },
    {
      path: "/signIn",
      component: SignIn
    },
    {
      path: "/signup",
      component: SignUp
    }
  ],
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  }
});
