<template>
  <div class="">
    <HeroSection />
    <DriverPlus />
    <QueryForm />
  </div>
</template>

<script lang="ts">

import DriverPlus from "@/components/driverForm/DriverPlus.vue";
import QueryForm from "@/components/driverForm/QueryForm.vue";
import HeroSection from "@/components/home/HeroSection.vue";

export default{
  components: {HeroSection, QueryForm, DriverPlus}

}
</script>

<style scoped>

</style>
