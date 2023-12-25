<template >
<div id="services" class="bg-primary">
  <div class="max-w-7xl mx-auto sm:px-5 lg:px-5 py-20 animate__animated animate__fadeIn">
    <div class="max-w-3xl mx-auto text-center pb-12 md:pb-12">
      <h2 class="text-4xl font-bold text-white">
        {{ $t("service.sectionTitle") }}
      </h2>
      <p class="text-xl text-gray-100 font-medium mt-3 px-5">
        {{ $t("service.sectionDescription") }}
      </p>
    </div>
    <div
        class="mx-auto grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 md:max-w-7xl space-y-10 lg:space-y-0 md:space-y-5 lg:max-w-none"
    >
      <div
          class="relative flex flex-col items-center wow animate__animated animate__bounceInUp"
          v-for="(item, index) in items"
          :key="index"
      >
        <div class="flex items-center justify-center bg-primary rounded-full">
          <img :src="item.img" :alt="'iki taxi'" class="justify-center items-center">
        </div>
        <h4 class="mt-8 text-white font-bold text-xl">{{ $t(item.title) }}</h4>
        <p class="text-lg text-gray-50 px-5 text-center">
          {{ $t(item.titleText) }}
        </p>
      </div>
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
    img: require('@/assets/images/icons/traced.svg')
  },
  {
    title: "service.items.1.title",
    titleText: "service.items.0.titleText",
    img: require('@/assets/images/icons/Interview.svg')
  },
  {
    title: "service.items.2.title",
    titleText: "service.items.2.titleText",
    img: require('@/assets/images/icons/dog.svg')
  },
  {
    title: "service.items.3.title",
    titleText:"service.items.3.titleText" ,
    img: require('@/assets/images/icons/woman.svg')
  },
  {
    title: "service.items.4.title",
    titleText: "service.items.4.titleText",
    img: require('@/assets/images/icons/arka.svg')
  },
  {
    title: "service.items.5.title",
    titleText: "service.items.5.titleText",
    img: require('@/assets/images/icons/payment.svg')
  },
]

</script>
