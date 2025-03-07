<template>
  <FeatureSection :features="features1" />
  <FeatureSection :features="features2" />
  <FeatureSection :features="features3" />
  <FeatureSection :features="features4" />
  <FeatureSection :features="features5" />
  <FeatureSection :features="features6" />
</template>

<script setup>
//image chatbot
import feature1 from "@/assets/images/1chatbot/feature1-2.png";
import feature1_2 from "@/assets/images/1chatbot/feature1.png";

//image dashboard
import feature2_2 from "@/assets/images/2dashboard/feature2-2.png";
import feature2 from "@/assets/images/2dashboard/feature2.png";

//Catat aktivitas pekerja
import feature3_2 from "@/assets/images/3catatAktivitas/feature3-2.png";
import feature3_3 from "@/assets/images/3catatAktivitas/feature3-3.png";
import feature3_4 from "@/assets/images/3catatAktivitas/feature3-4.png";
import feature3 from "@/assets/images/3catatAktivitas/feature3.png";

// Pemantauan Tiket
import feature4_2 from "@/assets/images/4pemantauanTiket/feature4-2.png";
import feature4_4 from "@/assets/images/4pemantauanTiket/feature4-4.png";
import feature4 from "@/assets/images/4pemantauanTiket/feature4.png";

//Laporan Tiket
import feature5_2 from "@/assets/images/5laporanTiket/feature5-2.png";
import feature5 from "@/assets/images/5laporanTiket/feature5.png";

// Solusi Teknis
import feature6_2 from "@/assets/images/6solusiTeknis/feature6-1.png";
import feature6 from "@/assets/images/6solusiTeknis/feature6.png";

import FeatureSection from "@/components/FeatureSection.vue";

// Data untuk Fitur 1: Chatbot
const features1 = [
  {
    title: "Chatbot Cerdas untuk Bisnis Anda",
    subTitles: [
      "Respon Cepat 24/7 - Siap membantu pelanggan kapan saja tanpa menunggu",
      "Integrasi dengan Sistem Lain - Terhubung dengan CRM, e-commerce, dan platform lainnya",
      "Dukungan Multi-bahasa - Berinteraksi dengan pelanggan dalam berbagai bahasa",
      "Antarmuka Ramah Pengguna - Desain intuitif untuk pengalaman terbaik",
      "Analisis Data Otomatis - Mengolah data percakapan untuk wawasan yang lebih baik",
    ],
    buttonName: "Chatbot Cerdas",
    description:
      "Chatbot kami hadir dengan teknologi cerdas untuk meningkatkan efisiensi komunikasi bisnis Anda, memberikan layanan cepat, akurat, dan mudah diintegrasikan dengan sistem yang Anda gunakan.",
    image: feature1_2,
  },
  {
    title: "Asisten Cerdas Pusat Bantuan",
    subTitles: [
      "Respon Efisien & Tepat Sasaran",
      "Analisis Interaksi Mendalam",
      "Personalisasi Berbasis AI",
      "Otomatisasi Efektif",
      "Keamanan & Privasi Terjamin",
    ],
    buttonName: "Pusat Bantuan",
    description:
      "Tingkatkan kepuasan pelanggan dengan chatbot AI yang cerdas, responsif, dan mampu beradaptasi dengan kebutuhan bisnis Anda.",
    image: feature1,
  },
];

// Data untuk Fitur 2: Dashboard
const features2 = [
  {
    title: "Dashboard Monitoring",
    subTitles: [
      "Data Real-time: Pantau informasi terkini secara instan untuk pengambilan keputusan yang lebih cepat dan akurat.",
      "Antarmuka Interaktif: Desain simpel dan mudah digunakan, cocok untuk semua tingkat pengguna.",
      "Widget Customizable: Sesuaikan tampilan dashboard sesuai kebutuhan bisnis Anda dengan widget yang fleksibel.",

      "Notifikasi Otomatis: Dapatkan pemberitahuan real-time untuk setiap aktivitas penting, meminimalkan risiko dan meningkatkan respons.",
    ],
    buttonName: "Insights Harian",
    description:
      "Tingkatkan efisiensi dan kontrol bisnis Anda dengan dashboard monitoring kami. Solusi lengkap untuk memantau aktivitas dan data penting dalam satu tempat.",
    image: feature2,
  },
  {
    title: "Analisis Akumulasi Tiket",
    subTitles: [
      "Visualisasi Data Tiket yang Interaktif",
      "Keamanan Data Tiket Terjamin",
    ],
    buttonName: "Akumulasi Tiket",
    description:
      "Dapatkan insight mendalam tentang akumulasi tiket Anda dengan fitur analisis canggih yang membantu Anda melacak, menganalisis, dan mengoptimalkan manajemen tiket.",
    image: feature2_2,
  },
];

// Data untuk Fitur 3: Catat Aktivitas Pekerja
const features3 = [
  {
    title: "Mendata Kehadiran Petugas",
    subTitles: [
      "Input Data Cepat dan Akurat",
      "Pelaporan Kehadiran Real-time",
      "Notifikasi Pengingat Absensi",
      "Integrasi dengan Jadwal Kerja",
      "Keamanan Data Absensi Terjamin",
    ],
    buttonName: "Absensi Petugas",
    description:
      "Memudahkan pencatatan dan pengelolaan kehadiran petugas secara terorganisir dan efisien.",
    image: feature3,
  },
  {
    title: "Rekap Kegiatan Harian",
    subTitles: [
      "Pemantauan Aktivitas Harian",
      "Evaluasi Kinerja",
      "Pelacakan Waktu",
      "Peningkatan Produktivitas",
    ],
    buttonName: "Rekap Harian",
    description:
      "Pantau dan analisis kegiatan harian untuk meningkatkan efisiensi dan kinerja tim.",
    image: feature3_2,
  },
  {
    title: "Monitoring Kehadiran Petugas",
    subTitles: [
      "Visualisasi Data",
      "Laporan Bulanan",
      "Identifikasi Masalah",
      "Optimasi Proses",
      "Dukungan Multi-perangkat",
    ],
    buttonName: "Preview Absensi Harian",
    description:
      "Analisis aktivitas pekerja untuk meningkatkan produktivitas dan efisiensi.",
    image: feature3_3,
  },
  {
    title: "Rekap Kegiatan Bulanan",
    subTitles: [
      "Visualisasi Data Bulanan",
      "Laporan Aktivitas Bulanan",
      "Identifikasi Masalah Bulanan",
      "Optimasi Proses Bulanan",
    ],
    buttonName: "Rekap Bulanan",
    description:
      "Analisis dan rekap aktivitas pekerja bulanan untuk meningkatkan produktivitas dan efisiensi.",
    image: feature3_4,
  },
];

// Data untuk Fitur 4: Pemantauan Tiket
const features4 = [
  {
    title: "Pemantauan Tiket Real-time",
    subTitles: [
      "Pelacakan Status Tiket",
      "Notifikasi Otomatis",
      "Integrasi dengan Sistem Lain",
      "Antarmuka Mudah Digunakan",
      "Keamanan Data Terjamin",
    ],
    buttonName: "Pantau Tiket",
    description:
      "Pantau status tiket secara real-time dan pastikan masalah terselesaikan dengan cepat.",
    image: feature4,
  },
  {
    title: "Riwayat Aktivitas Tiket",
    subTitles: [
      "Analisis Riwayat Tiket",
      "Pelacakan Status Tiket",
      "Evaluasi Waktu Tanggapan",
      "Identifikasi Tren Masalah",
      "Riwayat Interaksi Tiket",
    ],
    buttonName: "Lihat Riwayat Tiket",
    description:
      "Akses riwayat lengkap tiket untuk melacak perkembangan dan meningkatkan efisiensi layanan tiketing.",
    image: feature4_2,
  },

  {
    title: "Notifikasi Tiket Otomatis",
    subTitles: [
      "Pemberitahuan Tiket Real-time",
      "Pengingat Otomatis untuk Tiket Tertunda",
      "Prioritaskan Tiket Berdasarkan Urgensi",
      "Integrasi dengan Sistem Layanan Pelanggan",
      "Notifikasi via Email & Aplikasi",
    ],
    buttonName: "Notifikasi Tiket",
    description:
      "Terima notifikasi otomatis untuk tiket layanan pelanggan, pantau status tiket, dan tangani masalah dengan lebih efisien.",
    image: feature4_4,
  },
];

// Data untuk Fitur 5: Laporan Tiket
const features5 = [
  {
    title: "Laporan Tiket Harian",
    subTitles: [
      "Pelaporan Otomatis",
      "Visualisasi Data Menarik",
      "Export Data Mudah",
      "Integrasi dengan Sistem Lain",
      "Keamanan Data Terjamin",
    ],
    buttonName: "Laporan Harian",
    description:
      "Dapatkan laporan tiket harian secara otomatis dan terperinci.",
    image: feature5,
  },
  {
    title: "Preview Laporan Tiketing",
    subTitles: [
      "Analisis Tren Tiket Bulanan",
      "Identifikasi Puncak Permintaan",
      "Evaluasi Waktu Respon",
      "Insight untuk Peningkatan Layanan",
    ],
    buttonName: "Preview Laporan",
    description:
      "Tinjau laporan tiket bulanan untuk mendapatkan insight mendalam tentang kinerja layanan dan area perbaikan.",
    image: feature5_2,
  },
];

// Data untuk Fitur 6: Solusi Teknis
const features6 = [
  {
    title: "Solusi Teknis Cepat",
    subTitles: [
      "Respon Cepat 24/7",
      "Dukungan Teknis Profesional",
      "Integrasi dengan Sistem Lain",
      "Keamanan Data Terjamin",
    ],
    buttonName: "Solusi Teknis",
    description:
      "Temukan solusi teknis yang cepat dan efisien untuk kebutuhan bisnis Anda. Tim ahli kami siap membantu 24/7 dengan dukungan profesional dan integrasi sistem yang mulus.",
    image: feature6,
  },
  {
    title: "Preview Solusi Teknis",
    subTitles: [
      "Pencarian Cepat dan Akurat",
      "Pembaruan Rutin untuk Solusi Terkini",
      "Dokumentasi Terstruktur dan Mudah Dipahami",
      "Kompatibel dengan Berbagai Perangkat",
      "Integrasi Lancar dengan Chatbot AI",
    ],
    buttonName: "Preview Solusi",
    description:
      "Jelajahi database solusi teknis kami untuk menemukan jawaban cepat dan tepat atas masalah teknis Anda.",
    image: feature6_2,
  },
];
</script>
