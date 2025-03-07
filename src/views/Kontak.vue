<template>
  <div
    class="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50"
  >
    <!-- Lebarkan card dengan menyesuaikan max-w-4xl menjadi max-w-5xl atau lebih -->
    <div
      class="flex w-full max-w-5xl transform rounded-xl bg-white p-8 shadow-lg transition-all duration-500 hover:scale-105"
    >
      <div
        class="flex w-full max-w-md flex-col items-center justify-center text-center"
      >
        <h2
          class="mb-6 transform text-2xl font-bold text-gray-800 transition-all duration-300 hover:scale-110"
        >
          Kontak Kami
        </h2>
        <p class="text-gray-700">
          Jika Anda memiliki pertanyaan atau membutuhkan bantuan lebih lanjut,
          jangan ragu untuk menghubungi kami melalui kontak yang tersedia. Kami
          siap membantu Anda dengan segala informasi yang diperlukan.
        </p>
        <p
          class="mt-4 transform text-gray-700 transition-all duration-300 hover:scale-105"
        >
          <i class="fas fa-envelope text-blue-500"></i>
          <a
            href="mailto:punyadev30@gmail.com"
            class="text-blue-500 hover:text-blue-700"
          >
            punyadev30@gmail.com
          </a>
        </p>
        <div class="mt-6 transform transition-all duration-300 hover:scale-105">
          <a href="https://wa.me/+628998770102" target="_blank">
            <button
              class="flex transform items-center rounded-lg bg-blue-500 px-4 py-2 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-700"
            >
              <i class="fas fa-phone-alt mr-2"></i>
              Hubungi Sekarang
            </button>
          </a>
        </div>
      </div>
      <div
        class="ml-8 hidden h-96 w-full max-w-md transform overflow-hidden rounded-lg transition-all duration-500 hover:scale-105 md:block"
      >
        <img
          src="@/assets/images/contact.svg"
          alt="Contact Image"
          class="h-full w-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// Tidak perlu menambahkan logika khusus untuk animasi karena menggunakan kelas Tailwind
</script>

<style scoped>
/* Tidak perlu menambahkan gaya khusus karena menggunakan kelas Tailwind */
</style>
