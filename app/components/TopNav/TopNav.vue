<script lang="ts" setup>
import Navigation from "./Navigation.vue";

const { t } = useI18n();
</script>

<template>
  <div class="flex items-center justify-between">
    <img
      class="h-[60px] dark:hidden"
      src="~/assets/images/logo.png"
      alt="Logo"
    />
    <img
      class="h-[60px] hidden dark:block"
      src="~/assets/images/logo-dark.png"
      alt="Logo"
    />
    <Navigation />
  </div>
</template>

<style></style>
