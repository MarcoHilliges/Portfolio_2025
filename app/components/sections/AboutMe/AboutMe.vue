<script setup>
import { SmilePlus, Heart, GraduationCap, PlaneTakeoff } from 'lucide-vue-next';
const { t } = useI18n();

const sections = [
  {
    title: t("portfolio.aboutMeSectionOneTitle"),
    icon: SmilePlus,
    text: t("portfolio.aboutMeSectionOne"),
  },
  {
    title: t("portfolio.aboutMeSectionTwoTitle"),
    icon: Heart,
    text: t("portfolio.aboutMeSectionTwo"),
  },
  {
    title: t("portfolio.aboutMeSectionThreeTitle"),
    icon: GraduationCap,
    text: t("portfolio.aboutMeSectionThree"),
  },
  {
    title: t("portfolio.aboutMeSectionFourTitle"),
    icon: PlaneTakeoff,
    text: t("portfolio.aboutMeSectionFour"),
  },
];
</script>

<template>
  <div id="aboutMe" class="section page-2">
    <h1>
      {{ t("portfolio.aboutMe") }}
    </h1>

    <div class="flex gap-16">
      <div class="w-1/2 flex justify-center items-center">image here</div>
      <div class="w-1/2">
        <p class="whitespace-pre-wrap">
          {{ t("portfolio.aboutMeFirstDescription") }}
        </p>
      </div>
    </div>

    <div class="flex gap-16">
      <div v-for="section in sections" :key="section.title">
        <component :is="section.icon" :size="24" />
        <h3>
          {{ section.title }}
        </h3>
        <p class="whitespace-pre-wrap">
          {{ section.text }}
        </p>
      </div>
    </div>
  </div>
</template>
