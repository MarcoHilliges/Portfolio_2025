<script lang="ts" setup>
const { t } = useI18n();

useHead({
  title: t("portfolio.portfolio"),
});
</script>

<template>
  <div class="flex flex-col gap-48 pb-48">
    <SectionsStart />
    <SectionsSkills />
    <SectionsProjects />
  </div>
</template>
