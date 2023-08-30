<template>
  <div class="relative overflow-hidden bg-primary py-20 space-y-24">
    <div class="relative">
      <h1 class="text-4xl font-bold text-white text-center pb-5">
        Преимущества
      </h1>
      <div v-for="(achievement, index) in achievements" :key="index"
           class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
        <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
          <div class="wow animate__animated animate__fadeIn animate__delay-1s">
            <div>
              <span class="w-24 items-center">
                <img src="@/assets/images/splash.svg" class="w-24" alt="iki taxi">
              </span>
            </div>
            <div class="mt-6">
              <h2 class="text-3xl font-bold tracking-tight text-white">
                {{ $t(achievement.title) }}
              </h2>
              <p class="mt-4 text-lg text-gray-200">
                {{ $t(achievement.description) }}
              </p>
            </div>
          </div>
        </div>

        <div class="mt-12 sm:mt-16 lg:mt-0">
          <div class="-mr-40 lg:pl-6 md:-mr-16 lg:scale-125 lg:relative flex items-center justify-center lg:m-0 lg:h-full lg:px-0">
            <img class="w-2/4 lg:absolute lg:left-0 lg:w-auto lg:max-w-auto wow animate__animated animate__fadeInLeftBig"
                 style="color:transparent"
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
    imageSrc: require('@/assets/images/cars/compact.png'),
  },
  {
    title: "advantage.achievements.1.title",
    description: "advantage.achievements.1.description",
    imageSrc: require('@/assets/images/cars/comfort.png'),
  },
  {
    title: "advantage.achievements.2.title",
    description: "advantage.achievements.2.description",
    imageSrc: require('@/assets/images/cars/WAN.png'),
  }
];


</script>

<style scoped>
/* Adjust styles for mobile devices */

</style>

