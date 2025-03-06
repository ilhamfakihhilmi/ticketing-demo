<template>
  <div class="relative mx-auto w-full max-w-2xl overflow-hidden">
    <div
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="flex min-w-full justify-center"
      >
        <img
          :src="image"
          alt=""
          class="h-64 w-full rounded-lg object-cover "
        />
      </div>
    </div>
    <button
      @click="prev"
      class="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2  transition duration-200 hover:bg-gray-100"
    >
      &#9664;
    </button>
    <button
      @click="next"
      class="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 transition duration-200 hover:bg-gray-100"
    >
      &#9654;
    </button>
    <div
      class="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2"
    >
      <span
        v-for="(image, index) in images"
        :key="index"
        :class="[
          'h-2 w-2 rounded-full',
          currentIndex === index ? 'bg-blue-600' : 'bg-gray-300',
        ]"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import image1 from "@/assets/images/image1.png";
import image2 from "@/assets/images/image2.png";
import image3 from "@/assets/images/image3.png";

const images = ref([image1, image2, image3]);

const currentIndex = ref(0);

// Function to go to the next image
const next = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

// Function to go to the previous image
const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.value.length) % images.value.length;
};

// Automatic slide every 5 seconds
const startAutoSlide = () => {
  setInterval(next, 5000);
};

onMounted(() => {
  startAutoSlide();
});
</script>

<style scoped>
/* Additional styles if necessary */
.h-64 {
  height: 26rem; /* Adjust height as necessary */
}
</style>
