<template>
  <div class="flex h-screen w-full">
    <!-- Kartu Kiri (Teks Intro) -->
    <div class="flex w-1/2 flex-col items-start justify-center bg-white p-8">
      <h1
        class="text-left text-xl font-bold text-gray-700 md:mb-1 md:mt-5 md:text-5xl"
      >
        Revolusi Pengelolaan Tiket Anda
      </h1>
      <p class="mt-4 text-left text-lg text-gray-700 md:mb-5 md:text-base">
        Sistem Pelaporan Tiket yang dirancang untuk mempercepat prosedur,
        meningkatkan visibilitas, dan menyediakan data yang terpercaya.
      </p>
    </div>

    <!-- Kartu Kanan (Carousel Gambar) -->
    <div class="relative h-full w-full overflow-hidden">
      <!-- Gambar Carousel -->
      <div
        class="absolute inset-0 transition-opacity"
        v-bind:style="{
          backgroundImage: `url('${images[currentIndex].src}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
        :class="{ 'opacity-100': isVisible, 'opacity-0': !isVisible }"
      ></div>

      <!-- Teks Carousel -->
      <p
        class="absolute bottom-16 left-0 right-0 bg-white py-2 text-center text-neutral-800 transition-transform duration-500"
        :class="{ 'fade-in': isTextVisible, 'fade-out': !isTextVisible }"
      >
        {{ images[currentIndex].text }}
      </p>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import image1 from "@/assets/images/image-cticket.png";
import image2 from "@/assets/images/image-cticket1.png";
import image3 from "@/assets/images/image-cticket2.png";

const images = ref([
  { src: image1, text: "Tampilan User Friendly yang mudah digunakan." },
  {
    src: image2,
    text: "Fitur Chatbot yang dapat langsung membantu kendala user.",
  },
  {
    src: image3,
    text: "Integrasi antar divisi yang mempermudah komunikasi secara realtime.",
  },
]);

const currentIndex = ref(0);
const isVisible = ref(true);
const isTextVisible = ref(true);

const changeImage = () => {
  isVisible.value = false; // Sembunyikan gambar saat ini
  isTextVisible.value = false; // Sembunyikan teks saat ini
  setTimeout(() => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length; // Ganti ke gambar berikutnya
    isVisible.value = true; // Tampilkan gambar baru
    isTextVisible.value = true; // Tampilkan teks baru
  }, 500); // Durasi sinkron dengan animasi CSS
};

onMounted(() => {
  setInterval(changeImage, 6000); // Ganti gambar setiap 6 detik
});
</script>
<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.relative {
  height: 100%; /* Pastikan kontainer carousel mengambil seluruh tinggi */
}

.transition-opacity {
  transition: opacity 0.3s ease-in-out;
}

/* Animasi teks */
.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.fade-out {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.5s ease-in-out,
    transform 0.5s ease-in-out;
}

/* Awal posisi teks */
.absolute p {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.5s ease-in-out,
    transform 0.5s ease-in-out;
}
</style>
