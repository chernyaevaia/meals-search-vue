import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealDetails from "../views/MealDetails.vue";

const routes = [
  {
    path: "/meals-search-vue/",
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
  history: createWebHistory(),
  routes,
});

export default router;
