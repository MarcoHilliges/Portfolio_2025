<script lang="ts" setup>
const props = defineProps<{
  skill: { name: string; icon?: string };
}>();

const { t } = useI18n();
</script>

<template>
  <div
    class="relative border rounded-xl w-[100px] sm:w-[180px] h-[60px] sm:h-[100px] my-8 sm:my-36 mx-6 sm:mx-18 flex items-center justify-center font-semibold card-color light-effect"
  >
    <div
      v-if="props.skill.icon"
      class="absolute top-[-16px] sm:top-[-30px] h-32 sm:h-60 w-32 sm:w-60 font-semibold border rounded-full flex items-center justify-center shadow-md card-color"
    >
      <img :src="props.skill.icon" class="h-20 sm:h-36" />
    </div>
    <span class="text-12 sm:text-16">{{ props.skill.name }}</span>
  </div>
</template>
