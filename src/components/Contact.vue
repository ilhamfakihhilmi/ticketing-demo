<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="flex w-full max-w-4xl rounded-lg bg-white p-8 shadow-lg">
      <div
        class="flex w-full max-w-md flex-col items-center justify-center text-center"
      >
        <h2 class="mb-6 text-2xl font-bold text-gray-800">Kontak Kami</h2>
        <p class="text-gray-700">
          Jika Anda memiliki pertanyaan atau membutuhkan bantuan lebih lanjut,
          jangan ragu untuk menghubungi kami melalui kontak yang tersedia. Kami
          siap membantu Anda dengan segala informasi yang diperlukan.
        </p>
        <p class="mt-4 text-gray-700">
          <i class="fas fa-envelope text-blue-500"></i>
          <a href="mailto:support@example.com" class="text-blue-500">
            punyadev30@gmail.com
          </a>
        </p>
        <!-- <p class="mt-4 text-gray-700">
          <i class="fas fa-phone-alt text-blue-500"></i> +62 123 456 7890
        </p> -->
        <div class="mt-6">
          <a href="https://wa.me/your_phone_number" target="_blank">
            <button
              class="flex items-center rounded-lg bg-blue-500 px-4 py-2 text-white shadow-lg hover:bg-blue-700"
            >
              <i class="fas fa-phone-alt mr-2"></i>
              Hubungi Sekarang
            </button>
          </a>
        </div>
      </div>
      <div class="ml-8 hidden h-96 w-full max-w-md md:block">
        <img
          src="@/assets/images/contact.svg"
          alt="Contact Image"
          class="rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* Tidak perlu menambahkan gaya khusus karena menggunakan kelas Tailwind */
</style>
