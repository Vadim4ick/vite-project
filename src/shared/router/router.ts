import HomePage from "@/pages/HomePage.vue";
import Hotel from "@/pages/Hotel.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: HomePage },
  { path: "/hotel", component: Hotel },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
