import Contact from "@/components/Contact.vue";
import { default as Blog, default as Harga } from "@/components/Footer.vue";
import Home from "@/components/Home.vue";
import LandingPage from "@/views/LandingPage.vue";
import FeatureView from "@/views/FeatureView.vue";
import Keunggulan from "@/views/Keunggulan.vue";
import Kontak from "@/views/Kontak.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/keunggulan", component: Keunggulan },
  { path: "/kontak", component: Kontak },
  { path: "/blog", component: Blog },
  { path: "/feature", component: FeatureView },
  { path: "/landingPage", component: LandingPage }, // Pastikan ini ada// Gunakan '/feature/:id' bukan '/fitur/:id'
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
