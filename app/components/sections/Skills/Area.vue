<script lang="ts" setup>
const props = defineProps<{
  skills: { name: string; iconPath?: string }[];
  title: string;
}>();

const { t } = useI18n();

</script>

<template>
    <div class="flex flex-col items-center max-w-[1000px] gap-24">
      <h2>
        {{ props.title }}
      </h2>
      <div class="flex flex-wrap gap-16 justify-center">
        <SectionsSkillsCard
          v-for="(skill, index) in props.skills"
          :key="index"
          :skill="skill"
        />
      </div>
    </div>
</template>