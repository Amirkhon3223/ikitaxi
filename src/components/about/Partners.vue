<template>
    <div class="flex my-20 max-w-7xl mx-auto">
        <div class="relative w-6/12 md:w-full sm:w-full flex-col md:items-center md:justify-center ">
            <div v-for="(block, index) in blocks" :key="index" class="mb-14 relative">
                <div class="absolute h-full w-0.5 bg-gray-900 left-4 top-0"></div>
                <h2 class="text-2xl font-bold text-secondary pl-8 mt-4">
                    {{$t(block.title) }}
                </h2>
                <p class="text-gray-900 pl-8 mt-2 font-medium">{{ $t(block.description) }}</p>
            </div>
        </div>
        <div class="hidden md:block md:w-5/12 h-auto items-center">
            <img src="@/assets/images/cars/topview.png" alt="Company Image" class="flex items-center scale-125 wow animate__animated animate__fadeInUpBig animate__delay-1s" />
        </div>
    </div>
</template>

<script lang="ts" setup>

const blocks = [
  {
    title: "partners.blocks.0.title",
    description: "partners.blocks.0.description",
  },
  {
    title: "partners.blocks.1.title",
    description: "partners.blocks.1.description",
  },
  {
    title: "partners.blocks.2.title",
    description: "partners.blocks.2.description",
  },
  {
    title: "partners.blocks.3.title",
    description: "partners.blocks.3.description",
  },
];

</script>
