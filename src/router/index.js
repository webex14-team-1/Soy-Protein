// <<<<<<< HEAD
import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
// import SamplepageView from "../views/SamplepageView.vue"
import FavoriteView from "../views/FavoriteView.vue"
// =======
// import { createRouter, createWebHistory } from "vue-router
import TriviaView from "../views/TriviaView.vue"
// import { createRouter, createWebHistory } from "vue-router"
// import HomeView from "../views/HomeView.vue"
import CustomView from "../views/CustomView.vue"
// >>>>>>> origin/master

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/trivia",
    name: "trivia",
    component: TriviaView,
  },
  // {
  //   path: "/samplepage",
  //   name: "samplepage",
  //   component: SamplepageView,
  // },
  {
    path: "/favorite",
    name: "favorite",
    component: FavoriteView,
  },
  {
    path: "/custom",
    name: "Custom",
    component: CustomView,
  },
]
// <<<<<<< HEAD
// =======
// >>>>>>> origin/master

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// })
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash }
    } else {
      return { top: 0 }
    }
  },
})

export default router
