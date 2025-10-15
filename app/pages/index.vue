<script lang="ts" setup>
import TopNav from '~/components/TopNav/TopNav.vue';

const { t } = useI18n()

useHead({
  title: t("portfolio.portfolio"),
})
</script>

<template>
  <div>
    <TopNav />
    <h1>{{ t("common.welcome") }}</h1>
    <h1>{{ t("portfolio.portfolio") }}</h1>
  </div>
</template>
    