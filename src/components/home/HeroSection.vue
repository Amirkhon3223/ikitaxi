<template>
  <div class="bg-white dark:bg-primary relative items-center overflow-hidden py-20">
    <div class="max-w-7xl mx-auto flex relative items-center mt-32">
      <h1 class="uppercase sm:text-8xl font-black text-white w-full items-center">
        <span class="lg:text-7xl sm:text-7xl">{{ $t("heroSection.title") }}</span>
      </h1>
    </div>
    <div class="max-w-7xl mx-auto flex relative">
      <div class="sm:w-2/3 lg:w-2/4 flex flex-col relative mt-10 WOW animate__animated animate__fadeIn animate__delay-1s">
        <span class="w-28 h-2 bg-gray-800 dark:bg-white mb-6"></span>
        <p class="text-xl font-medium text-gray-200">
          {{ $t("heroSection.description") }}
        </p>
      </div>

      <div class="hidden sm:block sm:w-1/3 lg:w-full relative items-center wow animate__animated animate__fadeInLeftBig">
        <img src="@/assets/images/statticSuv.gif" class="m-auto relative -top-28 left-20 scale-[1.2]" alt="iki taxi, iki, taxi, taxi tajikistan"/>
      </div>

    </div>
  </div>


</template>


<script lang="ts" setup>
/* eslint-disable */
import WOW from 'wowjs/dist/wow.min';
import 'animate.css';
import {onMounted, ref} from "vue";

const wow = new WOW.WOW({
  live: false, // Отключаем автоматическую инициализацию
});


const gifImage = ref<HTMLImageElement | null>(null);

onMounted(() => {
  if (gifImage.value) {
    gifImage.value.addEventListener('load', () => {
      gifImage.value?.classList.add('animated');
    });
  }
});

</script>


<style>
.gif-container img {
  animation-iteration-count: 1; /* Указывает, что анимация проигрывается только один раз */
}

.gif-container img.animated {
  animation-name: playGif;
}

@keyframes playGif {
  0% {
    opacity: 1; /* Начальная прозрачность */
  }
  100% {
    opacity: 0; /* Конечная прозрачность */
  }
}
</style>
