import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealDetails from "../views/MealDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/meal/:id",
    name: "mealDetails",
    component: MealDetails,
  },
];

const router = createRouter({
  history: createWebHistory("/meals-search-vue/"),
  routes,
});

export default router;
