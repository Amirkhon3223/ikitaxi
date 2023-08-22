<template>
  <div class="mt-5">
    <div class="flex max-w-7xl mx-auto justify-center">

      <div class="w-5/12 p-4 space-y-4">

        <div class="w-full space-y-2 shadow-sm p-2">
          <h1 class="text-4xl font-bold">Getting set up</h1>
          <h3 class="text-3xl font-medium">Requirements</h3>
          <p class="font-medium">
            You can also use variant modifiers to target media queries like responsive breakpoints, dark mode,
            prefers-reduced-motion, and more. For example, use md:stroke-2 to apply the stroke-2 utility at only
            medium screen sizes and above.
          </p>
        </div>

        <div class="overflow-y-scroll p-1 space-y-3 max-h-96">
          <a v-for="(item, index) in items"
             :key="index"
             @click="selectItem(item)"
             class="group block cursor-pointer rounded-lg p-4 bg-white w-3/4
             ring-1 ring-slate-900/5 shadow-lg space-y-2 hover:bg-sky-500 hover:ring-sky-500"
          >
            <div class="flex items-center space-x-3">
              <img src="../../assets/images/logo/taxi1.svg" class="w-10" alt="Сервис такси"/>
              <h3 class="text-secondary group-hover:text-white text-xl font-semibold">{{ item.title }}</h3>
            </div>
            <p class="text-slate-500 group-hover:text-white text-md">
              {{ item.titleText.slice(0, 122) }}...
            </p>
          </a>
        </div>
      </div>

      <div v-if="selectedItem" class="w-7/12 flex-col bg-white shadow-lg rounded-lg overflow-hidden relative">
        <div class="p-4 space-y-2 w-12/12">
          <h2 class="text-4xl font-bold text-primary">{{ selectedItem.title }}</h2>
          <p class="text-xl text-secondary">{{ selectedItem.titleText }}</p>
        </div>

        <div class="p-4 rounded-lg text-start w-4/12">
          <h3 class="text-2xl font-semibold text-primary">{{ selectedItem.listTitle }}</h3>
          <ul class="mt-4 space-y-2">
            <li v-for="(item, index) in selectedItem.listItems" :key="index"
                class="marker:text-sky-400 text-secondary font-medium pl-4">
              {{ item }}
            </li>
          </ul>
        </div>


        <div class="absolute bottom-0 -mb-12 right-0 ml-10 w-5/12 h-fit z-0">
          <img :src="selectedItem.img" alt="iki Taxi" class="absolute bottom-0 right-0 h-[450px] float-right">
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue';

interface Item {
  title: string;
  img: string | null;
  titleText: string;
  listItems: string[];
  listTitle: string;
}

  export default defineComponent({
  /* eslint-disable */
  name: 'Service',
  data() {
    return {
      items: [
        {
          title: 'Сервис Заказ такси1',
          titleText: 'All of the components in Tailwind UI are designed for the latest version of Tailwind CSS, which is currently Tailwind CSS v3.3. To make sure that you are on the latest version of Tailwind, update via npm',
          listTitle: 'Hello Title',
          listItems: [
            'Hello',
            'Hello',
            'Hello'
          ],
          img: require('@/assets/images/01.png')
        },
        {
          title: 'Сервис Заказ такси2',
          titleText: 'Creation and administration of templates wordpress or Shopify - Modify and create wordpress or Shopify templates - Manage and configure wordpress or Shopify templates ',
          listTitle: 'Hello Title',
          listItems: [
            'Hello',
            'Hello',
            'Hello'
          ],
          img: require('@/assets/images/01.jpg')
        },
        {
          title: 'Сервис Заказ такси1',
          titleText: 'All of the components in Tailwind UI are designed for the latest version of Tailwind CSS, which is currently Tailwind CSS v3.3. To make sure that you are on the latest version of Tailwind, update via npm',
          listTitle: 'Hello Title',
          listItems: [
            'Hello',
            'Hello',
            'Hello'
          ],
          img: require('@/assets/images/01.png')
        },
        {
          title: 'Сервис Заказ такси2',
          titleText: 'Creation and administration of templates wordpress or Shopify - Modify and create wordpress or Shopify templates - Manage and configure wordpress or Shopify templates ',
          listTitle: 'Hello Title',
          listItems: [
            'Hello',
            'Hello',
            'Hello'
          ],
          img: require('@/assets/images/01.jpg')
        },


      ],
      selectedItem: null as Item | null,
    };
  },
  methods: {
    selectItem(item: Item) {
      this.selectedItem = item;
    },
  },
  created() {
    if (this.items.length > 0) {
      this.selectedItem = this.items[0]; // Выбрать первый элемент по умолчанию
    }
  },

});
</script>

<style scoped>
/* Tailwind classes or custom styles */
</style>
