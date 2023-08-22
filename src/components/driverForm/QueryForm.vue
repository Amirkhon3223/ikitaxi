<template>
  <section class="py-12">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center justify-between space-x-5">
        <div class="md:w-1/2 mb-6 md:mb-0">
          <h2 class="text-3xl font-semibold text-center  mb-4">
            Отправьте заявку на работу таксистом
          </h2>
          <div class="bg-white rounded-lg p-6 shadow-md">
            <form @submit.prevent="submitForm">
              <div class="mb-4">
                <label
                    type="text"
                    class="block text-gray-700 text-sm font-semibold mb-2">
                  Ваше имя
                </label>
                <input
                    type="text"
                    v-model="fullName"
                    class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-semibold mb-2">
                  Номер телефона
                </label>
                <input
                    v-model="phoneNumber"
                    type="tel"
                    class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-semibold mb-2">
                  Марка машины
                </label>
                <input
                    type="text"
                    v-model="carBrand"
                    class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-semibold mb-2">
                  Есть ли лицензия на такси?
                </label>
                <div class="flex items-center space-x-2">
                  <input v-model="hasLicense" type="radio" class="form-radio" name="license" value="ДА"/>
                  <label class="text-gray-700">Да</label>
                  <input v-model="hasLicense" type="radio" class="form-radio" name="license" value="НЕТ"/>
                  <label class="text-gray-700">Нет</label>
                </div>
              </div>
              <button
                  type="submit"
                  class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
        <div class="md:w-1/2">
          <div class="flex justify-center md:justify-end">
            <img src="@/assets/images/slider1.png" alt="Фото для заявки" class="max-w-full"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script lang="ts" setup>

import {ref} from 'vue';
import axios from 'axios';

const fullName = ref(' ');
const phoneNumber = ref(' ');
const carBrand = ref(' ');
const hasLicense = ref(' ');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const submitForm = async () => {

  const TELEGRAM_BOT_TOKEN = '6150631239:AAGPHrU-0a8LmDI0sS2BxivRDVDqUAAIyWY';
  const chatId = '948069343'; // Замените на ваш ID чата
  const text = `
  Запрос на работу Такси водитель:
  fullName: ${fullName.value},
  phoneNumber: ${phoneNumber.value},
  carBrand: ${carBrand.value},
  hasLicense: ${hasLicense.value},
`;

  if (fullName.value && phoneNumber.value && carBrand.value && hasLicense.value) {
    const requestData = {
      fullName: fullName.value,
      phoneNumber: phoneNumber.value,
      carBrand: carBrand.value,
      hasLicense: hasLicense.value,
      chat_id: chatId,
      text: text,
    };
    console.log(requestData)

    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Прокси-сервер для обхода CORS
    const targetUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
      console.log('Before sending request');
      const response = await axios.post(`${targetUrl}`, requestData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response:', response);
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
    }
  }
};


</script>
