<template>
  <div class="flex flex-col max-w-7xl mx-auto mt-10 mb-10">
    <div class="w-full p-4 space-y-5">
      <div class="space-y-3 pb-6">
        <h2 class="text-4xl font-bold text-center">
          {{ $t("tariff.header") }}
        </h2>
        <p class="text-md text-center sm:text-sm md:text-md">
          {{ $t("tariff.headerDescribe") }}
        </p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-8">
        <!-- Блоки тарифов -->
        <div v-for="plan in plans.slice(0, 6)" :key="plan.title"
             class="bg-white rounded-md shadow-md cursor-pointer p-5 space-y-5 group hover:bg-primary transition duration-300">
          <div class="w-16 relative h-16 bg-primary rounded-lg flex items-center justify-center">
            <img :src="plan.img" alt="iki taxi" class="w-full scale-[2.2] ml-[6rem] group-hover:scale-[3] group-hover:ml-[10rem] transition-all duration-300">
          </div>
          <div class="flex-grow">
            <h3 class="font-bold group-hover:scale-105 group-hover:text-white transition">{{ $t(plan.title) }}</h3>
            <p class="text-gray-600 group-hover:scale-105 group-hover:text-white leading-5 transition">{{ $t(plan.describe) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const plans = [
  {
    title: "tariff.plans.0.title",
    describe: "tariff.plans.0.describe",
    img: require('@/assets/images/cars/compact2.png')
  },
  {
    title: "tariff.plans.1.title",
    describe: "tariff.plans.1.describe",
    img: require('@/assets/images/cars/comfort.png')
  },
  {
    title: "tariff.plans.2.title",
    describe: "tariff.plans.2.describe",
    img: require('@/assets/images/cars/hatchback.png')
  },
  {
    title: "tariff.plans.3.title",
    describe: "tariff.plans.3.describe",
    img: require('@/assets/images/cars/WAN.png')
  },
  {
    title: "tariff.plans.4.title",
    describe: "tariff.plans.4.describe",
    img: require('@/assets/images/cars/compact.png')
  },
  {
    title: "tariff.plans.5.title",
    describe: "tariff.plans.5.describe",
    img: require('@/assets/images/cars/SUV.png')
  },
]


</script>

<style scoped>
/* Стили для адаптивности */
@media (max-width: 640px) {
  .max-w-7xl {
    padding: 0 1rem;
  }
}
</style>
