<template>
  <div class="overflow-hidden">
    <div class="max-w-7xl mx-auto pt-32 pb-8 sm:pt-36 px-10 md:mb-16 sm:mb-32 flex flex-col sm:flex-row items-center justify-between">
      <!-- Левая часть - текстовый контент -->
      <div class="max-w-3xl sm:mr-8 sm:mt-10 md:mt-0 items-center text-center sm:text-left space-y-6">
        <p class="line-text text-3xl lg:text-[3.5rem] md:text-4xl font-bold text-black sm:pt-10 italic w-full">
          {{ $t("heroSection.title") }}
        </p>
        <p class="mt-5 text-lg text-black lg:w-8/12" style="line-height: 26px">
          {{ $t("heroSection.description") }}
        </p>
        <!-- Две кнопки рядом друг с другом под текстом на десктопе и планшете -->
        <div class="hidden lg:flex md:flex lg:justify-start md:justify-start space-x-8 mt-6">
          <a href="" class="text-base text-white text-center font-medium rounded-md">
            <img src="@/assets/images/app-store-apple.svg" class="hover:scale-105 transition">
          </a>
          <a href="" class="text-base text-white text-center font-medium rounded-md">
            <img src="@/assets/images/app-store-google.svg" class="hover:scale-105 transition">
          </a>
        </div>
      </div>

      <!-- Правая часть - изображение -->
      <div class="inset-0 mt-10 sm:mt-0 w-3/4 sm:w-full text-center relative flex-col items-center">
        <img src="@/assets/images/BlueSuv.png" alt="Изображение" class="w-full relative items-center lg:top-8">
        <!-- Убрать масштабирование изображения на планшетах -->
        <!-- Две кнопки рядом друг с другом под картиной на мобильных и планшетах -->
        <div class="sm:hidden flex justify-center space-x-5 mt-6">
          <a href="" class="text-base text-black text-center font-medium rounded-md">
            <img src="@/assets/images/app-store-apple.svg" class="transition">
          </a>
          <a href="" class="text-base text-black text-center font-medium rounded-md">
            <img src="@/assets/images/app-store-google.svg" class="transition">
          </a>
        </div>
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


<style scoped>
.gif-container img {
  animation-iteration-count: 1;
  /* Указывает, что анимация проигрывается только один раз */
}

.gif-container img.animated {
  animation-name: playGif;
}

@keyframes playGif {
  0% {
    opacity: 1;
    /* Начальная прозрачность */
  }

  100% {
    opacity: 0;
    /* Конечная прозрачность */
  }
}

.line-text{
  line-height: 4rem;
}

/* Общие стили */
.bg-primary {
  /* Ваши стили для фона */
}

@media (max-width: 1023px) {
  .line-text {
    line-height: 2.5rem; /* Уменьшаем интерлиньяж для мобильных устройств */
  }
}
</style>
