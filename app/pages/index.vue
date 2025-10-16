<script lang="ts" setup>
const { t } = useI18n();

useHead({
  title: t("portfolio.portfolio"),
});
</script>

<template>
  <div>
    <SectionsStart />
    <SectionsSkills />
  </div>
</template>
