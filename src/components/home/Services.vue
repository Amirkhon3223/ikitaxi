<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 mt-20 animate__animated animate__fadeIn">
    <div class="max-w-3xl mx-auto text-center pb-12 md:pb-12">
      <h2 class="text-4xl font-bold">
        {{ $t("service.sectionTitle") }}
      </h2>
      <p class="text-xl text-gray-600 font-medium mt-3">
        {{ $t("service.sectionDescription") }}
      </p>
    </div>
    <div
        class="mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 md:max-w-7xl lg:max-w-none"
    >
      <div
          class="relative flex flex-col items-center wow animate__animated animate__bounceInUp"
          v-for="(item, index) in items"
          :key="index"
      >
        <div class="w-12 p-2 m-1 items-center justify-center bg-primary rounded-full">
          <img :src="item.img" :alt="'iki taxi'" class="scale-[3]">
        </div>
        <h4 class="mb-2 text-primary font-bold text-xl">{{ $t(item.title) }}</h4>
        <p class="text-lg text-secondary text-center">
          {{ $t(item.titleText) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import WOW from 'wowjs/dist/wow.min'; // Используйте относительный путь
import { ref, onMounted } from 'vue';
import 'animate.css';

onMounted(() => {
  new WOW.WOW().init();
});


const items = [
  {
    title: "service.items.0.title",
    titleText: "service.items.0.titleText",
    img: require('@/assets/images/icons/compact.png')
  },
  {
    title: "service.items.1.title",
    titleText: "service.items.0.titleText",
    img: require('@/assets/images/icons/compact.png')
  },
  {
    title: "service.items.2.title",
    titleText: "service.items.2.titleText",
    img: require('@/assets/images/icons/compact.png')
  },
  {
    title: "service.items.3.title",
    titleText:"service.items.3.titleText" ,
    img: require('@/assets/images/icons/compact.png')
  },
  {
    title: "service.items.4.title",
    titleText: "service.items.4.titleText",
    img: require('@/assets/images/icons/compact.png')
  },
  {
    title: "service.items.5.title",
    titleText: "service.items.5.titleText",
    img: require('@/assets/images/icons/compact.png')
  },
]

</script>
