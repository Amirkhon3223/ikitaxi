<template>
  <div>
    <Services />

    <Tarif />
  </div>
</template>

<script lang="ts">
import Services from "@/components/home/Services.vue";
import Tarif from "@/components/home/Tarif.vue";

export default {
  components:{
    Tarif,
    Services
  }

}
</script>


<style scoped>

</style>
