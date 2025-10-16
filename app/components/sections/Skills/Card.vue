<script lang="ts" setup>
const props = defineProps<{
  skill: { name: string; icon?: string };
}>();

const { t } = useI18n();
</script>

<template>
  <div
    class="relative border rounded-xl w-[180px] h-[100px] my-36 mx-18 flex items-center justify-center bg-pageDark dark:bg-page text-primary-light dark:text-primary font-semibold"
  >
    <div
      class="absolute top-[-30px] h-60 w-60 bg-pageDark dark:bg-page text-primary-light dark:text-primary font-semibold border rounded-full flex items-center justify-center"
    >
      test
    </div>
    <span>{{ props.skill.name }}</span>
  </div>
</template>
