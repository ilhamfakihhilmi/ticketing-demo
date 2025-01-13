<template>
  <div>
    <Navbar />
    <Banner />
    <Header />
    <PorductCrousel />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Content from "./components/Content.vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import Banner from "./components/Banner.vue";
import PorductCrousel from "./components/ProoductCorousel.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Banner,
    Header,
    PorductCrousel,
    Content,
    Footer,
  },
};
</script>

<style></style>
