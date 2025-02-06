<template>
  <div id="app">
    <Navbar />
    <Banner />
    <div id="fitur-section">
      <Header />
    </div>
    <div id="harga-section">
      <Content />
    </div>

    <div id="contact-section">
      <Contact />
    </div>
    <div id="blog-section">
      <Blog />
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
import Contact from "./components/Contact.vue";
import Blog from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
import PorductCrousel from "./components/ProoductCorousel.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Banner,
    Header,
    PorductCrousel,
    Contact,
    Blog,
  },
};
</script>

<style></style>
