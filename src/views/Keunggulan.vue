<script setup>
import { CheckCircleIcon } from "lucide-vue-next";
import { ref } from "vue";

const features = ref([
  {
    title: "Chatbot Cerdas untuk Bisnis Anda",
    description:
      "Respon Cepat 24/7 - Siap membantu pelanggan kapan saja tanpa menunggu",
    icon: "🤖",
  },
  {
    title: "Dashboard Pemantauan",
    description: "Dashboard interaktif untuk memantau performa dan aktivitas.",
    icon: "📊",
  },
  {
    title: "Cepat & Efisien",
    description: "Memproses tiket dengan cepat dan responsif.",
    icon: "🚀",
  },
  {
    title: "Notifikasi Otomatis",
    description: "Dapatkan pemberitahuan real-time.",
    icon: "🔔",
  },
  {
    title: "Keamanan Terjamin",
    description: "Sistem dengan enkripsi tingkat tinggi.",
    icon: "🔒",
  },
  {
    title: "Analitik & Laporan",
    description: "Lihat performa dengan laporan terperinci.",
    icon: "📈",
  },
]);
</script>

<template>
  <div class="flex min-h-screen flex-col items-center bg-gray-100 py-10">
    <h1 class="fade-in mb-6 text-4xl font-bold text-gray-800">
      Keunggulan Ticketing System Kami
    </h1>

    <div class="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-2">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="fade-in flex items-center space-x-4 rounded-2xl bg-white p-6 shadow-md"
        :style="{ animationDelay: `${index * 200}ms` }"
      >
        <div class="text-4xl">{{ feature.icon }}</div>
        <div>
          <h2 class="text-xl font-semibold text-gray-700">
            {{ feature.title }}
          </h2>
          <p class="text-gray-500">{{ feature.description }}</p>
        </div>
      </div>
    </div>

    <Button
      class="fade-in mt-8 rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
      onclick="window.open('https://wa.me/628998770102', '_blank')"
    >
      <CheckCircleIcon class="mr-2 inline-block h-5 w-5" /> Mulai Sekarang
    </Button>
  </div>
</template>

<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(-10px);
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
