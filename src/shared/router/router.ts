import HomePage from "@/pages/HomePage.vue";
import Hotel from "@/pages/Hotel.vue";
import SomeOfTheHotels from "@/pages/SomeOfTheHotels.vue";
import Bespoke from "@/pages/Bespoke.vue";
import Luxury from "@/pages/Luxury.vue";
import DigitalTravel from "@/pages/DigitalTravel.vue";
import Contact from "@/pages/Contact.vue";
import About from "@/pages/About.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: HomePage },
  { path: "/hotel", component: Hotel },
  { path: "/someHotels", component: SomeOfTheHotels },
  { path: "/bespoke", component: Bespoke },
  { path: "/luxury", component: Luxury },
  { path: "/digital", component: DigitalTravel },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
