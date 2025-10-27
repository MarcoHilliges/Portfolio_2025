<script setup>
import { Mail } from "lucide-vue-next";
const { t } = useI18n();
</script>

<template>
  <div id="contact" class="flex flex-col items-center gap-24">
    <a href="mailto:marco.hilliges@gmx.de" class="button light-effect">
      <Mail />
      {{ t("portfolio.contactMe") }}
    </a>
  </div>
</template>

<style scoped>
.button {
  @apply flex items-center gap-8 p-16 rounded-xl text-16 font-bold bg-success hover:bg-success-hover active:bg-success-active transition-all duration-150 ease-in-out;
}
</style>
