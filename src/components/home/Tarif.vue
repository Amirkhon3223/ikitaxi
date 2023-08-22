<template class="">
  <div class="flex max-w-7xl mx-auto justify-center mt-20 mb-20">
    <!-- левый блок с изображением -->
    <div class="w-5/12 p-4 flex flex-col justify-center items-center relative">
      <div class="relative w-full h-full items-center justify-center flex p-5">
        <div class="bg-primary rounded-sm w-7/12 mx-auto m-2 -rotate-12 absolute inset-0 flex items-center justify-center" style="z-index: -1;"></div>
        <img src="@/assets/images/phone.png" alt="Телефон" class="h-full z-40 relative">
      </div>
    </div>


    <div class="w-7/12">
      <!-- правый блок с информацией -->
      <div class="px-5 rounded-lg bg-gray-100 space-y-16 py-5">
        <div class="space-y-3">
          <h2 class="text-4xl font-bold">
            Выберите подходящий тариф для ваших потребностей
          </h2>
          <p class="text-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eveniet laboriosam magnam neque pariatur praesentium qui saepe voluptates? Dolorem eos omnis quibusdam rerum sequi tempore voluptate. Amet dolorum laboriosam ratione?
          </p>
        </div>

        <div class="flex space-x-4">
          <!-- Блок 1 -->
          <div class="flex flex-col bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-200 p-3 space-y-5">
            <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </div>
            <div class="flex-grow">
              <p class="text-gray-600 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <!-- Блок 1 -->
          <div class="flex flex-col bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-200 p-3 space-y-5">
            <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </div>
            <div class="flex-grow">
              <p class="text-gray-600 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <!-- Блок 1 -->
          <div class="flex flex-col bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-200 p-3 space-y-5">
            <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </div>
            <div class="flex-grow">
              <p class="text-gray-600 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>

import {defineComponent} from "vue";

export default defineComponent({
  name: 'Tarif',
  data() {
    return {

    }
  }
})

</script>

<style>
</style>
