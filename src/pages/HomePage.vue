<template>
  <div>
    <HeroSection />
    <Services />
    <Adventage />
    <Tarif />
  </div>
</template>

<script lang="ts">
import Services from "@/components/home/Services.vue";
import Tarif from "@/components/home/Tariff.vue";
import HeroSection from "@/components/home/HeroSection.vue";
import Adventage from "@/components/home/Advantage.vue";

export default {
  components:{
    HeroSection,
    Tarif,
    Adventage,
    Services
  }

}
</script>


<style scoped>

</style>
