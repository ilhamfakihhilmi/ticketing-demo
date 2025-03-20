<template>
  <nav class="navbar">
    <img src="@/assets/logo.svg" alt="Logo Kiri" class="logo left-logo" />
    <div class="menu" :class="{ active: isMenuActive }">
      <router-link to="/" exact-active-class="active">Home</router-link>
      <router-link to="/feature" active-class="active">Fitur</router-link>
      <router-link to="/keunggulan" active-class="active"
        >Keunggulan</router-link
      >
      <router-link to="/kontak" active-class="active">Kontak</router-link>
      <a href="http://82.25.108.179:8080/" target="_blank">Blog</a>
    </div>
    <button class="menu-toggle" @click="toggleMenu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isMenuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
  },
};
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.logo {
  height: 40px;
}

.menu {
  display: flex;
  gap: 1.5rem;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
}

.menu-toggle .bar {
  width: 100%;
  height: 3px;
  background-color: #000;
}

a {
  text-decoration: none;
  color: #000;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: color 0.3s;
}

a:hover {
  color: #007bff;
}

.router-link-active {
  color: #0a0820;
}

.active {
  font-weight: bold;
  color: #007bff;
}

@media (max-width: 768px) {
  .menu {
    display: none;
    flex-direction: column;
    width: 100%;
    background-color: #fff;
    position: absolute;
    top: 60px;
    left: 0;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .menu.active {
    display: flex;
  }

  .menu-toggle {
    display: flex;
  }
}
</style>
