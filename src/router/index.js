import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Banner.vue";
import Fitur from "../components/Header.vue";
import Harga from "../components/Footer.vue";
import Contact from "../components/Contact.vue";
import Blog from "../components/Footer.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/fitur", component: Fitur },
  { path: "/harga", component: Harga },
  { path: "/contact", component: Contact },
  { path: "/blog", component: Blog },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});

export default router;
