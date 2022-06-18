import { createRouter, createWebHistory } from "vue-router
import TriviaView from "../views/TriviaView.vue";
import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import CustomView from "../views/CustomView.vue"

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
  {
    path: "/custom",
    name: "Custom",
    component: CustomView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
