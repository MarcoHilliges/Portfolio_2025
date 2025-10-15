<script lang="ts" setup>
const { t } = useI18n()
</script>

<template>
    <ul class="flex gap-12">
        <li><NuxtLink to="/">{{ t("portfolio.start") }}</NuxtLink></li>
        <li><NuxtLink to="/skills">{{ t("portfolio.skills") }}</NuxtLink></li>
        <li><NuxtLink to="/projects">{{ t("portfolio.projects") }}</NuxtLink></li>
        <li><NuxtLink to="/aboutMe">{{ t("portfolio.aboutMe") }}</NuxtLink></li>
    </ul>
</template>