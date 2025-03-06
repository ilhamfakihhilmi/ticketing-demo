<template>
  <div class="iframe-container">
    <iframe
      src="http://147.93.105.148:8040/"
      frameborder="0"
      class="fullscreen-iframe"
    ></iframe>
  </div>
</template>

<script setup>
// Tidak perlu logika tambahan untuk iframe ini
</script>

<style scoped>
/* Gaya khusus untuk container iframe */
.iframe-container {
  width: 100vw; /* Lebar penuh sesuai viewport */
  height: 100vh; /* Tinggi penuh sesuai viewport */
  margin: 0;
  padding: 0;
  overflow: hidden; /* Menghilangkan scrollbar */
}

/* Gaya khusus untuk iframe */
.fullscreen-iframe {
  width: 100%;
  height: 100%;
  border: none; /* Menghilangkan border iframe */
}
</style>
