<script lang="ts" setup>
const { t } = useI18n();
</script>

<template>
  <div class="flex justify-evenly items-center gap-24 h-screen">
    
    <h1 class="whitespace-pre" v-html="t('portfolio.welcomeText')"></h1>
    <img class="rounded-full" src="~/assets/images/profile.png" alt="">
  </div>
</template>
