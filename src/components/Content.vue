<template>
  <div class="flex h-screen w-full flex-col md:flex-row">
    <!-- Kartu Kiri (Teks Intro) -->
    <div
      class="flex w-full flex-col items-start justify-center bg-white p-8 md:w-1/2"
    >
      <h1
        class="text-left text-3xl font-bold text-gray-700 md:mb-1 md:mt-5 md:text-5xl"
      >
        Revolusi Pengelolaan Tiket Anda
      </h1>
      <p class="mt-4 text-left text-base text-gray-700 md:mb-5 md:text-lg">
        Sistem Pelaporan Tiket yang dirancang untuk mempercepat prosedur,
        meningkatkan visibilitas, dan menyediakan data yang terpercaya.
      </p>
    </div>

    <!-- Kartu Kanan (Carousel Gambar) -->
    <div class="md:full relative h-64 w-full overflow-hidden md:h-full">
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

  <div class="flex min-h-screen items-center justify-center px-6">
    <div
      class="flex w-full max-w-5xl flex-col rounded-3xl bg-white p-6 shadow-xl transition-transform duration-300 hover:scale-105 md:flex-row md:p-10"
    >
      <!-- Bagian Kiri: List -->
      <div class="flex w-full flex-col justify-center md:w-1/2">
        <h2
          class="mb-6 cursor-pointer text-2xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600 md:text-3xl"
        >
          Kelebihan Aplikasi Ticketing Yang Kami Tawarkan
        </h2>

        <ul class="space-y-3 text-base text-gray-700">
          <li
            class="flex cursor-pointer items-center transition-transform duration-300 hover:scale-105"
          >
            <i class="pi pi-check-circle mr-3 text-xl text-blue-500"></i>
            <span class="font-medium"
              >Pencatatan Masalah yang Efisien: Semua pengaduan tersimpan dalam
              satu sistem yang terorganisir.</span
            >
          </li>
          <li
            class="flex cursor-pointer items-center transition-transform duration-300 hover:scale-105"
          >
            <i class="pi pi-check-circle mr-3 text-xl text-blue-500"></i>
            <span class="font-medium"
              >Akses Mudah Kapan Saja: Pengguna dapat mengajukan pengaduan dari
              mana saja, kapan saja.</span
            >
          </li>
          <li
            class="flex cursor-pointer items-center transition-transform duration-300 hover:scale-105"
          >
            <i class="pi pi-check-circle mr-3 text-xl text-blue-500"></i>
            <span class="font-medium"
              >Tindak Lanjut Jelas dan Cepat: Pengguna menerima pembaruan status
              untuk setiap pengaduan yang diajukan.</span
            >
          </li>
          <li
            class="flex cursor-pointer items-center transition-transform duration-300 hover:scale-105"
          >
            <i class="pi pi-check-circle mr-3 text-xl text-blue-500"></i>
            <span class="font-medium"
              >Laporan Analitis untuk Tren: Analisis data membantu memahami pola
              pengaduan dan meningkatkan layanan.</span
            >
          </li>
          <li
            class="flex cursor-pointer items-center transition-transform duration-300 hover:scale-105"
          >
            <i class="pi pi-check-circle mr-3 text-xl text-blue-500"></i>
            <span class="font-medium"
              >Dukungan Pelanggan Responsif: Tim dukungan siap membantu
              menyelesaikan masalah dengan cepat dan efisien.</span
            >
          </li>
        </ul>
      </div>

      <!-- Bagian Kanan: Gambar -->
      <div
        class="mt-6 flex w-full items-center justify-center md:mt-0 md:w-1/2"
      >
        <img
          src="@/assets/images/sss.png"
          alt="Contact Image"
          class="h-48 w-full max-w-screen-xl cursor-pointer rounded-lg object-cover transition-opacity duration-500 ease-in-out hover:opacity-75 md:h-72"
        />
      </div>
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

/* Media Queries untuk responsivitas */
@media (max-width: 768px) {
  .flex-col {
    flex-direction: column;
  }

  .w-full {
    width: 100%;
  }

  .h-64 {
    height: 16rem;
  }

  .text-3xl {
    font-size: 1.875rem;
  }

  .text-2xl {
    font-size: 1.5rem;
  }

  .p-8 {
    padding: 2rem;
  }

  .p-6 {
    padding: 1.5rem;
  }

  .h-48 {
    height: 12rem;
  }
}
</style>
