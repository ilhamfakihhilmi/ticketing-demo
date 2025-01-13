<template>
  <div class="flex min-h-screen flex-col bg-gray-100">
    <header class="bg-blue-600 p-4 text-white">
      <h1 class="text-3xl font-bold">Landing Page</h1>
    </header>
    <main class="flex flex-grow flex-col items-center justify-center">
      <h2 class="mb-4 text-2xl font-semibold">
        Selamat Datang di Landing Page Kami!
      </h2>
      <p class="mb-6 text-center">
        Kami menyediakan solusi terbaik untuk kebutuhan Anda.
      </p>
      <Button
        label="Daftar Sekarang"
        class="p-button-rounded p-button-success"
      />
    </main>
    <footer class="bg-gray-800 p-4 text-center text-white">
      <p>&copy; 2023 Perusahaan Anda. Semua hak dilindungi.</p>
    </footer>
  </div>
</template>

<script>
import { Button } from "primevue/button";

export default {
  components: {
    Button,
  },
};
</script>

<style scoped>
/* Tambahkan gaya khusus di sini jika diperlukan */
</style>
