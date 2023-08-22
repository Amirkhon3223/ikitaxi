<template>
  <section class="bg-primary text-white py-16">
    <div class="container mx-auto">
      <div class="flex items-center justify-between mb-10">
        <div class="w-1/2">
          <img src="@/assets/images/taxiYellow.png" alt="iki taxi" class="rounded-lg">
        </div>
        <div class="w-1/2 pl-12">
          <h2 class="text-4xl font-bold mb-4">Почему работать с нами круто?</h2>
          <ul class="space-y-4">
            <li v-for="(item, index) in items" :key="index" class="flex space-x-4 items-center">
              <img :src="item.img" class="w-12">
              <span class="text-xl">{{ item.title }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex justify-center">
        <button class="bg-white text-primary px-8 py-3 rounded-full shadow-md hover:shadow-lg transition duration-300">
          Присоединиться к нам
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface Item {
  title: string;
  img: string;
}

const items: Item[] = [
  {
    title: "Большие заработки",
    img: require("@/assets/images/taxiYellow.png"),
  },
  // Добавьте другие плюсы
];
</script>
