import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Main from "../views/Main.vue";
import Home from "../views/Home.vue";
import Handover from "../views/Handover";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
    children: [
      {
        path: "home",
        name: "Home",
        component: Home
      },
      {
        path: "handover",
        name: "Handover",
        component: Handover
      }
    ]
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
