import HomePage from "@/pages/HomePage.vue";
import Hotel from "@/pages/Hotel.vue";
import SomeOfTheHotels from "@/pages/SomeOfTheHotels.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: HomePage },
  { path: "/hotel", component: Hotel },
  { path: "/someHotels", component: SomeOfTheHotels },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
