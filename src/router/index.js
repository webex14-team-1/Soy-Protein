import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SamplepageView from "../views/SamplepageView.vue";
import FavoriteView from "../views/FavoriteView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/samplepage",
    name: "samplepage",
    component: SamplepageView,
  },
  {
    path: "/favorite",
    name: "favorite",
    component: FavoriteView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
