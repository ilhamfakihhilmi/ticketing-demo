<template>
  <div id="app">
    <Navbar />
    <router-view />

    <!-- Tampilkan hanya saat di halaman home -->
    <div v-if="$route.path === '/'" id="fitur-section">
      <Header />
    </div>
    <div v-if="$route.path === '/'" id="fitur-section">
      <IntroAwal />
    </div>
    <div v-if="$route.path === '/'" id="harga-section">
      <Content />
    </div>
    <div v-if="$route.path === '/'" id="contact-section">
      <Contact />
    </div>
    <div v-if="$route.path === '/'" id="blog-section">
      <Blog />
    </div>
  </div>
</template>

<script>
import Contact from "./components/Contact.vue";
import Blog from "./components/Footer.vue";
import Home from "./components/Home.vue";
import IntroAwal from "./components/IntroAwal.vue";

import Navbar from "./components/Navbar.vue";
import ProductCarousel from "./components/ProductCarousel.vue"; // Perbaikan nama

export default {
  name: "App",
  components: {
    Navbar,
    Home,
    IntroAwal,
    ProductCarousel, // Perbaikan nama
    Contact,
    Blog,
  },
};
</script>
