<template>
  <div class="container mx-auto flex flex-col items-center py-8 md:mt-28">
    <div class="animate-on-scroll text-center">
      <h1 class="mb-6 text-3xl font-bold text-neutral-800">
        Optimalkan Pengelolaan Laporan Anda
      </h1>
      <p class="max-w-2xl text-neutral-600">
        Sistem Pelaporan Tiket yang dirancang untuk mempermudah proses,
        meningkatkan akuntabilitas, dan menyajikan informasi yang terpercaya.
      </p>
    </div>
    <div
      class="grid grid-cols-1 gap-6 text-center sm:grid-cols-2 md:mt-8 lg:grid-cols-3"
    >
      <div
        class="animate-on-scroll flex flex-col items-center rounded-lg bg-white p-4"
      >
        <h2 class="mb-3 text-xl font-semibold text-neutral-800">
          <li class="pi pi-check-circle mr-1"></li>
          Respons Cepat
        </h2>
        <p class="text-neutral-600">
          Dapatkan solusi instan untuk setiap laporan tiket Anda, meningkatkan
          kepuasan pelanggan secara signifikan.
        </p>
      </div>
      <div
        class="animate-on-scroll flex flex-col items-center rounded-lg bg-white p-4"
      >
        <h2 class="mb-3 text-xl font-semibold text-neutral-800">
          <li class="pi pi-slack mr-1"></li>
          Transparansi Tinggi
        </h2>
        <p class="text-neutral-600">
          Setiap langkah proses tiket terlihat jelas, memastikan semua pihak
          terlibat dalam penanganan laporan.
        </p>
      </div>
      <div
        class="animate-on-scroll flex flex-col items-center rounded-lg bg-white p-4"
      >
        <h2 class="mb-3 text-xl font-semibold text-neutral-800">
          <li class="pi pi-chart-bar mr-1"></li>
          Analisis Data Canggih
        </h2>
        <p class="text-neutral-600">
          Gunakan data yang dihasilkan untuk membuat keputusan yang lebih baik
          dan strategis untuk bisnis Anda.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderWithCards",
  mounted() {
    const options = {
      threshold: 0.1, // Elemen akan di-trigger saat 10% terlihat
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target); // Hentikan pengamatan untuk elemen ini
        }
      });
    }, options);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });
  },
};
</script>

<style scoped>
/* Awal posisi sebelum animasi */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease-in-out;
}

/* Posisi setelah animasi */
.animate-fade-in {
  opacity: 1;
  transform: translateY(0);
}
</style>
