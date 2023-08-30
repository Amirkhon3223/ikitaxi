<template>
  <div class="max-w-7xl mx-auto sm:mt-32 md:mt-10 lg:mt-24">
    <h1 class="text-secondary text-4xl font-bold text-center mt-24">{{ $t("advantage.header") }}</h1>
    <div class="grid sm:gap-24 md:gap-32 lg:py-16 mt-10">
      <div v-for="(achievement, index) in achievements" :key="index">
        <div class="md:grid md:grid-cols-12 items-center">
          <div
              class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0"
              :class="{ 'md:order-1': index % 2 === 0, 'rtl': index % 2 === 1}"
              :data-aos="achievement.aos">
            <img
                :alt="'Features ' + (index + 1)"
                loading="lazy"
                decoding="async"
                data-nimg="1"
                class=""
                style="color:transparent"
                :src="achievement.imageSrc">
          </div>
          <div
              class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              :class="{ 'aos-init aos-animate': true, 'md:order-1': index % 2 === 1, 'rtl': index % 2 === 0 }"
              :data-aos="index % 2 === 0 ? 'fade-up' : 'fade-down'">
            <div class="font-architects-daughter font-bold text-3xl text-primary mb-2">
              {{ $t(achievement.title) }}
            </div>
            <p class="text-xl text-secondary font-medium mb-4">
              {{ $t(achievement.description) }}
            </p>
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
    aos: 'fade-up'
  },
  {
    title: "advantage.achievements.1.title",
    description: "advantage.achievements.1.description",
    imageSrc: require('@/assets/images/cars/comfort.png'),
    aos: 'fade-down'
  },
  {
    title: "advantage.achievements.2.title",
    description: "advantage.achievements.2.description",
    imageSrc: require('@/assets/images/cars/WAN.png'),
    aos: 'fade-up'
  }
];



</script>

<style scoped>
/* Adjust styles for mobile devices */

</style>

