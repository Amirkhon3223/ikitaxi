<template>
  <div class="relative text-center">
    <button
        class="text-white font-semibold cursor-pointerbg-gray-300 hover:bg-gray-40 py-2 px-4 mr-4 inline-flex items-center "
        @click="toggleMenu">

      <!-- {{ $t('navbar.changeLanguage') }} -->
      <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
           stroke="#ffffff" class="rotate-135">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
              d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C12 21 16 18 16 12C16 6 12 3 12 3M12 21C12 21 8 18 8 12C8 6 12 3 12 3M3 12C3 7.02944 7.02944 3 12 3"
              stroke="#fffffff" stroke-width="1.5"></path>
        </g>
      </svg>
    </button>

    <div class="absolute z-50 bg-white mt-1 w-full font-semibold rounded-md shadow-lg transition" v-if="isOpen">
      <button class="block text-center py-2 w-full text-secondary hover:text-white
             hover:bg-primary hover:rounded-md hover:text-lg hover:scale-105 transition"
              v-for="(option, index) in options" :key="index" @click="selectOption(index)">
        {{ option }}
      </button>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'dropdown-menu',
  data() {
    return {
      isOpen: false,
      selected: '',
      options: ['English', 'Русский', 'Тоҷикӣ'],
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    selectOption(index: number) {
      this.selected = this.options[index];
      this.isOpen = false;
      switch (index) {
        case 0:
          this.$i18n.locale = 'en';
          break;
        case 1:
          this.$i18n.locale = 'ru';
          break;
        case 2:
          this.$i18n.locale = 'tj';
          break;
        default:
          break;
      }
    },
  },
});
</script>
