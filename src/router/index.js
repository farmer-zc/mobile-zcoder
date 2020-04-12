import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/index.vue";
import login from "../views/login/index.vue";
import list from "../views/list/index.vue";
import detail from "../views/detail/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/list",
    name: "list",
    component: list
  },
  {
    path: "/detail",
    name: "detail",
    component: detail
  },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: () => {
  //     import("../views/login/index.vue")
  //   }
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
