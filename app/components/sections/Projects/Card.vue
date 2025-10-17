<script lang="ts" setup>
const props = defineProps<{
  project: {
    name: string;
    description: string;
    image: string;
    github: string | null;
    link: string | null;
    demo: boolean;
  };
}>();
const { t } = useI18n();
</script>

<template>
  <div class="relative w-[400px] h-[300px] rounded-xl overflow-hidden">
    <img
      :src="project.image"
      :alt="project.name"
      class="object-cover w-full h-full"
    />

    <div
      class="absolute top-0 left-0 right-0 h-full opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-80 text-white flex flex-col justify-between items-center p-32"
    >
      <h3>{{ project.name }}</h3>
      <p class="text-center whitespace-pre">{{ project.description }}</p>

      <div class="flex gap-24">
        <NuxtLink v-if="project.github" :href="project.github" target="_blank" class="button_link">
          GitHub
        </NuxtLink>
        <NuxtLink v-if="project.link" :href="project.link" target="_blank" class="button_link">
          {{ project.demo ? t("portfolio.demo") : t("portfolio.visit") }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.button_link {
  @apply w-[150px] h-[50px] flex justify-center items-center border rounded-lg hover:text-neutral-300 hover:border-neutral-300 active:text-neutral-500 active:border-neutral-500;
}
</style>
