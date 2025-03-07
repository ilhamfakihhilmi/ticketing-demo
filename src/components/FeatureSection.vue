<template>
  <div
    class="flex min-h-screen flex-col items-center justify-center px-4 sm:px-6"
  >
    <div
      class="max-w-8xl relative flex w-full flex-col items-center rounded-3xl bg-white p-6 shadow-xl sm:p-14"
    >
      <div class="flex w-full flex-col lg:flex-row">
        <!-- Konten Kiri (Daftar Fitur) -->
        <div class="flex w-full flex-col justify-center lg:w-1/2">
          <h2 class="mb-6 mt-3 text-3xl font-bold text-gray-800 sm:text-4xl">
            {{ currentFeature.title }}
          </h2>
          <div class="mt-0 flex flex-wrap gap-2">
            <button
              v-for="(feature, index) in features"
              :key="index"
              @click="setFeatureIndex(index)"
              class="rounded-lg px-4 py-2 text-black transition duration-300"
              :class="{
                'bg-[#ffc547] shadow-lg': currentFeatureIndex === index,
                'bg-[#fff4dd] hover:bg-[#ffe1b4]':
                  currentFeatureIndex !== index,
              }"
            >
              {{ feature.buttonName }}
            </button>
          </div>
          <ul class="mb-10 mt-5 space-y-4 text-base text-gray-700 sm:text-lg">
            <li
              class="flex items-center"
              v-for="(subTitle, index) in currentFeature.subTitles"
              :key="index"
            >
              <i class="pi pi-check-circle mr-4 text-2xl text-blue-500"></i>
              <span class="font-medium">{{ subTitle }}</span>
            </li>
          </ul>
        </div>

        <!-- Konten Kanan (Gambar dan Deskripsi Fitur) -->
        <div class="relative mt-6 w-full overflow-hidden lg:mt-0 lg:w-1/2">
          <button
            @click="prevFeature"
            class="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-blue-200 p-3 text-white transition duration-300 hover:bg-blue-600"
          >
            <i class="pi pi-angle-left text-2xl"></i>
          </button>

          <img
            :src="currentFeature.image"
            alt="Feature Image"
            class="h-100 w-full rounded-lg object-cover transition-opacity duration-500 ease-in-out"
            :class="{
              'opacity-100': isFeatureVisible,
              'opacity-0': !isFeatureVisible,
            }"
          />

          <button
            @click="nextFeature"
            class="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-blue-200 p-3 text-white transition duration-300 hover:bg-blue-600"
          >
            <i class="pi pi-angle-right text-2xl"></i>
          </button>

          <p class="mt-4 text-center text-gray-700">
            {{ currentFeature.description }}
          </p>
        </div>
      </div>

      <button
        class="mt-6 w-full rounded-lg bg-blue-500 p-3 font-semibold text-white transition duration-300 hover:bg-blue-600"
        onclick="window.open('https://wa.me/628998770102', '_blank')"
      >
        Hubungi Kami
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  features: {
    type: Array,
    required: true,
  },
});

const currentFeatureIndex = ref(0);
const isFeatureVisible = ref(true);

const currentFeature = computed(
  () => props.features[currentFeatureIndex.value],
);

const setFeatureIndex = (index) => {
  isFeatureVisible.value = false;
  setTimeout(() => {
    currentFeatureIndex.value = index;
    isFeatureVisible.value = true;
  }, 300);
};

const prevFeature = () => {
  const newIndex =
    currentFeatureIndex.value === 0
      ? props.features.length - 1
      : currentFeatureIndex.value - 1;
  setFeatureIndex(newIndex);
};

const nextFeature = () => {
  const newIndex =
    currentFeatureIndex.value === props.features.length - 1
      ? 0
      : currentFeatureIndex.value + 1;
  setFeatureIndex(newIndex);
};
</script>
