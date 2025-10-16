<script lang="ts" setup>
const props = defineProps<{
  skill: { name: string; icon?: string };
}>();

const { t } = useI18n();
</script>

<template>
  <div
    class="relative border rounded-xl w-[180px] h-[100px] my-36 mx-18 flex items-center justify-center font-semibold colors"
  >
    <div
      v-if="props.skill.icon"
      class="absolute top-[-30px] h-60 w-60 font-semibold border rounded-full flex items-center justify-center shadow-md colors"
    >
      <img :src="props.skill.icon" class="h-36" />
    </div>
    <span>{{ props.skill.name }}</span>
  </div>
</template>

<style scoped>
.colors {
  @apply bg-pageDark dark:bg-page text-primary-light dark:text-primary;
}
</style>
