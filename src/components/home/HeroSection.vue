<template>
  <div class="max-w-7xl mx-auto p-6 sm:py-12 lg:pt-32 flex flex-col lg:flex-row justify-between ">
    <div class="lg:mb-0 lg:w-5/12 lg:pr-12 animate__animated animate__fadeIn animate__delay-1s">

      <h1 class="w-full text-4xl text-secondary font-bold text-center lg:text-5xl lg:text-left lg:leading-tight mb-5">
        {{ $t("heroSection.title") }}
      </h1>

      <p class="w-full text-xl text-center text-secondary lg:text-left">
        {{ $t("heroSection.description") }}
      </p>

    </div>

    <div class="lg:w-7/12 pl-3 animate__animated animate__fadeInLeft">
      <img src="@/assets/images/cars/SUV.png" class="h-auto md:hidden " alt="iki taxi">
      <img src="@/assets/images/cars/SUV.png" class="hidden md:block mx-auto w-full float-right " alt="iki taxi">
    </div>

  </div>
</template>


<script lang="ts" setup>

import WOW from 'wowjs/dist/wow.min';
import 'animate.css';

const wow = new WOW.WOW({
  live: false, // Отключаем автоматическую инициализацию
});


</script>
