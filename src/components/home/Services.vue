<template>
  <div class="flex max-w-7xl">
    <div class="w-1/2 p-4 overflow-y-scroll">
      <div
          v-for="(item, index) in items"
          :key="index"
          class="cursor-pointer flex items-center p-2 hover:bg-gray-100"
          @click="selectItem(item)"
      >
        <div class="w-8 h-8 mr-2">
          <i :class="item.icon"></i>
        </div>
        <div>
          <h3 class="text-3xl font-bold underline">{{ item.title }}</h3>
          <p class="text-gray-500">{{ item.summary }}</p>
        </div>
      </div>
    </div>
    <div class="w-1/2 p-4">
      <div v-if="selectedItem">
        <h2 class="text-xl font-semibold">{{ selectedItem.title }}</h2>
        <p class="text-gray-500">{{ selectedItem.summary }}</p>
        <!-- Other content specific to the selected item -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  /* eslint-disable */
  name: 'ServiceDetails',
  data() {
    return {
      items: [
        { title: 'Сервис Заказ такси', icon: '@/logo.png', summary: 'Описание первого пункта' },

      ],
      selectedItem: null
    };
  },

});
</script>

<style scoped>
/* Tailwind classes or custom styles */
</style>
