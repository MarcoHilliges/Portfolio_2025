<script lang="ts" setup>
const { t } = useI18n();
</script>

<template>
  <div
    id="start"
    class="flex justify-evenly items-center gap-24 h-[calc(100vh-60px)]"
  >
    <span class="text-[50px] font-bold whitespace-pre" v-html="t('portfolio.welcomeText')"></span>
    <img class="rounded-full" src="~/assets/images/profile.png" alt="" />
  </div>
</template>
