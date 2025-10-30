<script setup>
import { SmilePlus, Heart, GraduationCap, PlaneTakeoff } from "lucide-vue-next";
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
    <div class="section max-w-[1200px]">
      <h1>
        {{ t("portfolio.aboutMe") }}
      </h1>

      <div class="flex gap-16">
        <div class="w-1/2 flex justify-center items-center">
          <img class="-mt-[50px] rounded-full h-[250px] w-[250px] object-cover" style="object-position: 0px -20px;"  src="~/assets/images/jugger-profile.jpg" alt="" />
          <img class="-ml-[50px] mt-[50px] rounded-full h-[250px] w-[250px] object-cover" src="~/assets/images/jugger-playing.jpg" alt="" />
        </div>
        <div class="w-1/2 flex items-center">
          <p class="whitespace-pre-wrap">
            {{ t("portfolio.aboutMeFirstDescription") }}
          </p>
        </div>
      </div>

      <div class="flex mt-36">
        <div
          v-for="section in sections"
          :key="section.title"
          class="relative w-1/4 m-16 p-16 pt-36 rounded-xl flex flex-col items-center card-color light-effect"
        >
          <div
            class="absolute top-[-30px] h-60 w-60 flex items-center justify-center border rounded-full shadow-md card-color light-effect"
          >
            <component :is="section.icon" :size="24" />
          </div>

          <h3 class="mb-24">
            {{ section.title }}
          </h3>
          <p class="whitespace-pre-wrap text-center">
            {{ section.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
