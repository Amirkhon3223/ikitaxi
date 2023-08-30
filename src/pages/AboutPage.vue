<template>
  <div>
    <HeroSection/>
    <Partners/>
  </div>
</template>

<script lang="ts">

import Partners from "@/components/about/Partners.vue";
import HeroSection from "@/components/home/HeroSection.vue";

export default {
  components: {HeroSection, Partners}

}
</script>


<style scoped>

</style>
