<template>
  <div id="tariffs" class="mb-10"></div>
  <div class="bg-primary">
    <div class="w-full mx-auto lg:space-y-16 md:space-y-10 space-y-5 justify-center items-center py-7">
      <h1 class="text-center text-4xl mt-8 font-bold text-white">
        {{ $t("tariff.header") }}
      </h1>
      <div class="slider-container w-full justify-center flex mx-auto items-center relative">
        <div class="slider" :style="sliderStyles">
          <div
              class="slider-item lg:mt-10 mt-5 lg:py-10 py-5"
              v-for="(slide, index) in plans"
              :key="index"
              :style="slideStyles(index)"
          >
            <img :src="slide.img" class="py-12" :alt="slide.title"/>
          </div>
        </div>

        <!-- Навигация для десктопа-->
        <div
            class="hidden lg:flex md:flex slider-navigation absolute top-0 py-4 px-10 bg-white rounded-full w-fit text-center">
          <!-- Кнопки навигации для больших экранов -->
          <div class="hidden lg:flex md:flex space-x-10">
            <button
                v-for="(slide, index) in plans"
                :key="index"
                @click="goToSlide(index)"
                :class="{ active: index === currentIndex }"
            >
              {{ $t(slide.title) }}
            </button>
          </div>
        </div>

        <!-- Дропдаун для мобильных -->
        <div class="sm:hidden slider-navigation absolute top-0 left-0 right-0 p-2 mx-auto bg-white rounded-full w-5/12">
          <div class="justify-between flex px-2">
            <button @touchstart="toggleDropdown" @blur="closeDropdown"
                    class="focus:outline-none focus:border-blue-500 focus:ring focus:border-opacity-50">
              {{ $t(plans[currentIndex].title) }}
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" class="right-3 absolute" width="24" height="24" viewBox="0 0 24 24"
                 @touchstart="toggleDropdown"
            >
              <path d="M12 15.5l-6.3-6.3-1.4 1.4L12 18.4l7.7-7.7-1.4-1.4z"/>
            </svg>
            <ul v-show="showDropdown"
                class="absolute left-0 mt-1 bg-white rounded-lg shadow-lg top-10 w-full text-center z-20 space-y-1">
              <li
                  v-for="(slide, index) in plans"
                  :key="index"
                  @touchstart="goToSlide(index)"
                  :class="{ active: index === currentIndex }"
                  class="cursor-pointer p-1 hover:bg-gray-100 z-50"
              >
                <span class="z-50">{{ $t(slide.title) }}</span>
              </li>
            </ul>
          </div>
        </div>


      </div>
    </div>
    <div
        class="lg:text-3xl text-2xl md:text-3xl lg:mt-5 px-5 text-white font-medium text-center w-full relative lg:-top-24 -top-14"
        v-if="currentIndex !== null">
      {{ $t(plans[currentIndex].describe) }}
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      plans: [
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
      ],
      currentIndex: 0,
      autoSlideInterval: null,
      slideIntervalDuration: 3500,
      showDropdown: false,
    };
  },
  computed: {
    sliderStyles() {
      const offset = -this.currentIndex * 33 + 33;
      return {
        transform: `translateX(${offset}%)`,
      };
    },
  },
  methods: {
    slideStyles(index) {
      const activeIndex = this.currentIndex;
      const currentIndex = index - activeIndex;
      const scaleFactor = Math.abs(currentIndex) === 1 ? 0.55 : 1.4;
      return {
        transform: `translateX(${currentIndex * 20}%) scale(${scaleFactor})`,
        transition: 'transform 0.2s ease-in-out',
      };
    },
    goToSlide(index) {
      this.currentIndex = index;
      clearInterval(this.autoSlideInterval);
      this.autoSlide();
      this.showDropdown = false; // Закрываем дропдаун на мобильных после выбора
    },
    autoSlide() {
      this.autoSlideInterval = setInterval(() => {
        if (this.currentIndex < this.plans.length - 1) {
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
        }
      }, this.slideIntervalDuration);
    },
    toggleDropdown() {
      // Открываем или закрываем дропдаун на мобильных
      this.showDropdown = !this.showDropdown;
    },
    closeDropdown() {
      if (this.showDropdown) {
        // Только закрываем, если showDropdown === true
        this.showDropdown = false;
      }
    },
  },
  created() {
    this.currentIndex = Math.floor(this.plans.length / 2);
  },
  mounted() {
    this.autoSlide();
  },

};
</script>

<style scoped>
.bg-primary {
  overflow: hidden;
}

.slider-container {
  width: 100%;
  position: relative;
}

.slider {
  display: flex;
  align-items: center;
  justify-items: center;
  transition: transform 0.3s ease-in-out;
}

.slider-item {
  flex-shrink: 0;
  width: 33.33%;
  position: relative;
  transform: scale(1);
}

img {
  width: 100%;
  height: auto;
  display: block;
}

.text-3xl {
  width: 100%;
  text-align: center;
}


.slider-navigation button.active {
  font-weight: bolder;
  color: black;
}
</style>
