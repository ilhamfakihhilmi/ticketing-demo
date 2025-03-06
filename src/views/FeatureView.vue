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
import feature1_2 from "@/assets/images/1chatbot/feature1.png";
import feature1 from "@/assets/images/1chatbot/feature1-2.png";

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
import feature4_3 from "@/assets/images/4pemantauanTiket/feature4-3.png";
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
      "Data Real-time",
      "Antarmuka Interaktif",
      "Customizable Widgets",
      "Integrasi dengan Sistem Lain",
      "Notifikasi Otomatis",
    ],
    buttonName: "Lihat Dashboard",
    description:
      "Pantau semua aktivitas dan data penting dalam satu tempat dengan dashboard kami.",
    image: feature2,
  },
  {
    title: "Dashboard Analytics",
    subTitles: [
      "Visualisasi Data Menarik",
      "Laporan Otomatis",
      "Export Data Mudah",
      "Keamanan Data Terjamin",
      "Dukungan Multi-perangkat",
    ],
    buttonName: "Analisis Data",
    description:
      "Dapatkan insight mendalam dari data Anda dengan fitur analisis canggih.",
    image: feature2_2,
  },
];

// Data untuk Fitur 3: Catat Aktivitas Pekerja
const features3 = [
  {
    title: "Catat Aktivitas Harian",
    subTitles: [
      "Input Data Cepat",
      "Pelaporan Real-time",
      "Notifikasi Pengingat",
      "Integrasi dengan Kalender",
      "Keamanan Data Terjamin",
    ],
    buttonName: "Catat Sekarang",
    description:
      "Mencatat aktivitas pekerja menjadi lebih mudah dan terorganisir.",
    image: feature3,
  },
  {
    title: "Analisis Aktivitas",
    subTitles: [
      "Visualisasi Data",
      "Laporan Bulanan",
      "Identifikasi Masalah",
      "Optimasi Proses",
      "Dukungan Multi-perangkat",
    ],
    buttonName: "Lihat Laporan",
    description:
      "Analisis aktivitas pekerja untuk meningkatkan produktivitas dan efisiensi.",
    image: feature3_2,
  },
  {
    title: "Analisis Aktivitas",
    subTitles: [
      "Visualisasi Data",
      "Laporan Bulanan",
      "Identifikasi Masalah",
      "Optimasi Proses",
      "Dukungan Multi-perangkat",
    ],
    buttonName: "Lihat Laporan2",
    description:
      "Analisis aktivitas pekerja untuk meningkatkan produktivitas dan efisiensi.",
    image: feature3_3,
  },
  {
    title: "Analisis Aktivitas",
    subTitles: [
      "Visualisasi Data",
      "Laporan Bulanan",
      "Identifikasi Masalah",
      "Optimasi Proses",
      "Dukungan Multi-perangkat",
    ],
    buttonName: "Lihat Laporan3",
    description:
      "Analisis aktivitas pekerja untuk meningkatkan produktivitas dan efisiensi.",
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
    title: "Analisis Tiket",
    subTitles: [
      "Laporan Performa Tiket",
      "Identifikasi Masalah Berulang",
      "Optimasi Proses",
      "Export Data Mudah",
      "Dukungan Multi-perangkat",
    ],
    buttonName: "Lihat Analisis",
    description:
      "Dapatkan insight dari data tiket untuk meningkatkan layanan pelanggan.",
    image: feature4_2,
  },
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
    image: feature4_3,
  },
  {
    title: "Analisis Tiket",
    subTitles: [
      "Laporan Performa Tiket",
      "Identifikasi Masalah Berulang",
      "Optimasi Proses",
      "Export Data Mudah",
      "Dukungan Multi-perangkat",
    ],
    buttonName: "Lihat Analisis",
    description:
      "Dapatkan insight dari data tiket untuk meningkatkan layanan pelanggan.",
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
    buttonName: "Lihat Laporan",
    description:
      "Dapatkan laporan tiket harian secara otomatis dan terperinci.",
    image: feature5,
  },
  {
    title: "Laporan Tiket Bulanan",
    subTitles: [
      "Analisis Tren Bulanan",
      "Identifikasi Masalah",
      "Optimasi Proses",
      "Dukungan Multi-perangkat",
      "Notifikasi Otomatis",
    ],
    buttonName: "Analisis Laporan",
    description:
      "Analisis laporan tiket bulanan untuk meningkatkan kualitas layanan.",
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
      "Dukungan Multi-bahasa",
    ],
    buttonName: "Cari Solusi",
    description: "Dapatkan solusi teknis cepat dan tepat untuk masalah Anda.",
    image: feature6,
  },
  {
    title: "Database Solusi Teknis",
    subTitles: [
      "Pencarian Cepat",
      "Update Rutin",
      "Dokumentasi Lengkap",
      "Dukungan Multi-perangkat",
      "Integrasi dengan Chatbot",
    ],
    buttonName: "Cari di Database",
    description:
      "Akses database solusi teknis untuk menemukan jawaban atas masalah Anda.",
    image: feature6_2,
  },
];
</script>
