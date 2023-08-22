<template>
  <div class="mt-20">
    <DriverPlus />
    <QueryForm />
  </div>
</template>

<script lang="ts">

import DriverPlus from "@/components/driverForm/DriverPlus.vue";
import QueryForm from "@/components/driverForm/QueryForm.vue";

export default{
  components: {QueryForm, DriverPlus}

}
</script>

<style scoped>

</style>
