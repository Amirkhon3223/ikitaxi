<template>
  <div>

    <TheNavbar />

    <Router-view />

    <TheFooter />

  </div>
</template>

<script lang="ts" setup>
import TheNavbar from "@/components/sharing-component/TheNavbar.vue";
import TheFooter from "@/components/sharing-component/TheFooter.vue";

import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: 'global' })

</script>
