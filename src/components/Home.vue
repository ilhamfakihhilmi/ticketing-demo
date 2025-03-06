<template>
  <div class="flex h-screen w-full">
    <!-- Kartu Kiri (Teks Intro) -->
    <div
      class="mb-28 flex flex-col items-start justify-center bg-white p-8 md:w-1/2"
    >
      <p
        class="rounded-md border border-[#3C9EF8] bg-[#BEE0FF] pb-1 pl-4 pr-4 pt-1 font-medium text-[#3485C5]"
      >
        <i class="pi pi-ticket pr-2"></i>Aplikasi Ticketing Sistem
      </p>

      <h1
        class="text-left text-4xl font-bold text-gray-700 md:mb-1 md:mt-5 md:text-6xl"
      >
        Tingkatkan Efisiensi Laporan Anda
      </h1>
      <p class="mt-4 text-left text-lg text-gray-700 md:mb-5 md:text-base">
        Solusi Ticketing Report System yang dirancang untuk mempercepat proses,
        meningkatkan transparansi, dan memberikan data yang akurat.
      </p>
      <div class="mt-14 flex flex-row md:mt-0">
        <button
          class="mr-4 mt-6 flex items-center gap-2 rounded-lg bg-[#3C9EF8] px-6 py-2 font-semibold text-white transition hover:bg-[#3485C5]"
          @click="goToKontak"
        >
          <i class="pi pi-whatsapp"></i>
          Hubungi Kami
        </button>
        <button
          class="mt-6 flex items-center gap-2 rounded-lg bg-[#3C9EF8] px-6 py-2 font-semibold text-white transition hover:bg-[#3485C5]"
          @click="goToDemo"
        >
          <i class="pi pi-play-circle"></i>
          Live Demo
        </button>
      </div>
    </div>

    <!-- Kartu Kanan (Gambar) -->
    <div
      class="fade-in md:w-1/2 md:bg-cover"
      :style="{ backgroundImage: `url('${backgroundImage}')` }"
    ></div>
  </div>
</template>

<script setup>
import localImage from "@/assets/images/banner-right.png";
import "primeicons/primeicons.css"; // Import PrimeIcons CSS

const goToDemo = () => {
  window.location.href = "https://insight.plniconpln.id/login";
};

const goToKontak = () => {
  window.location.href = "https://wa.me/+628998770102";
};

const backgroundImage = localImage;
</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.fade-in {
  opacity: 0; /* Start hidden */
  animation: fadeIn 1.5s ease-in-out forwards; /* Fade-in animation */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
