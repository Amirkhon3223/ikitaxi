<template class="bg-dark">
  <div>

    <TheNavbar />

    <Router-view />

    <TheFooter />

  </div>
</template>

<script lang="ts">

import TheNavbar from "@/components/sharing-component/TheNavbar.vue";
import TheFooter from "@/components/sharing-component/TheFooter.vue";

export default {
  name: 'App',
  components: {
    TheFooter,
    TheNavbar,

  }
}
</script>
