<template>
  <div id="advantage"></div>
  <div class="relative overflow-hidden pt-20 space-y-20">
    <div class="relative">
      <h1 class="text-4xl font-bold text-black text-center pb-5">
        {{ $t("advantage.header") }}
      </h1>
      <div
          v-for="(achievement, index) in achievements"
          :key="index"
          class="lg:mx-auto lg:max-w-7xl lg:grid lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
      >
        <div
            class="mx-auto max-w-4xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0"
            :class="index % 2 === 1 ? 'lg:order-last' : ''"
        >
          <div class="wow animate__animated animate__fadeIn animate__delay-1s">
            <div class="flex justify-center lg:justify-start mt-10 lg:mt-0">
              <span class="w-24 items-center">
                <img :src="achievement.icon" class="w-24 fill-primary stroke-primary" alt="iki taxi">
              </span>
            </div>
            <div class="mt-6">
              <h2
                  class="text-3xl font-bold tracking-tight text-secondary text-center lg:text-left"
                  :class="index % 2 === 1 ? 'lg:text-right' : ''"
              >
                {{ $t(achievement.title) }}
              </h2>
              <p
                  class="mt-4 text-lg text-secondary text-center lg:text-left md:text-left"
                  :class="index % 2 === 1 ? 'lg:text-right' : ''"
              >
                {{ $t(achievement.description) }}
              </p>
            </div>
          </div>
        </div>

        <div class="mt-12 sm:mt-0 lg:mt-0">
          <div class="lg:pl-6 lg:scale-125 md:mx-auto md:w-[50%] lg:w-[100%] lg:relative sm:flex sm:items-center sm:justify-center lg:h-full lg:px-0">
            <img
                class="hidden sm:block md:block relative right-0 sm:items-center lg:max-w-auto wow animate__animated animate__fadeInLeftBig"
                style="color: transparent"
                :src="achievement.imageSrc"
                alt="iki taxi"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>

const achievements = [
  {
    title: "advantage.achievements.0.title",
    description: "advantage.achievements.0.description",
    imageSrc: require('@/assets/images/cars/hatchback.png'),
    icon: require('@/assets/images/icons/Black.svg')
  },
  {
    title: "advantage.achievements.1.title",
    description: "advantage.achievements.1.description",
    imageSrc: require('@/assets/images/cars/comfort.png'),
    icon: require('@/assets/images/icons/Black-1.svg')

  },
  {
    title: "advantage.achievements.2.title",
    description: "advantage.achievements.2.description",
    imageSrc: require('@/assets/images/cars/WAN.png'),
    icon: require('@/assets/images/icons/Black-2.svg')

  }
];
</script>


<style scoped>
/* Медиа-запрос для мобильных устройств */
@media (max-width: 767px) {
  .lg\:grid-cols-2 {
    grid-template-columns: 1fr; /* Изменяем количество колонок на одну на мобильных устройствах */
  }
  .lg\:order-last {
    order: initial; /* Восстанавливаем порядок на мобильных устройствах */
  }
  .lg\:text-right {
    text-align: center; /* Центрируем текст на мобильных устройствах */
  }
}
</style>


