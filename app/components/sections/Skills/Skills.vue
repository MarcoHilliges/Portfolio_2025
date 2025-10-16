<script lang="ts" setup>
import JSIcon from "~/assets/images/JavaScript.png"
import TSIcon from "~/assets/images/TypeScript.png"
// import VueIcon from "~/assets/images/Vue.png"
// import NuxtIcon from "~/assets/images/Nuxt.png"
import HTMLIcon from "~/assets/images/HTML.png"
import CSSIcon from "~/assets/images/CSS.png"
import SCSSIcon from "~/assets/images/SCSS.png"
// import TailwindIcon from "~/assets/images/Tailwind.png"

import GitIcon from "~/assets/images/git.png"
import MicrocontrollerIcon from "~/assets/images/microcontroller.png"


const { t } = useI18n();

const frontendSkills = [
  { name: "JavaScript", icon: JSIcon },
  { name: "TypeScript", icon: TSIcon },
  { name: "Vue.js" },
  { name: "Nuxt.js"},
  { name: "HTML", icon: HTMLIcon },
  { name: "CSS", icon: CSSIcon },
  { name: "SCSS", icon: SCSSIcon },
  { name: "Tailwind CSS" },
];

const backendSkills = [
  { name: "C#" },
  { name: ".NET" },
  { name: "Node.js" },
  { name: "Docker" },
  { name: "MySQL" },
  { name: "Microservices" },
];

const sideSkills = [
  { name: "Git", icon: GitIcon },
  { name: "GitHub" },
  { name: "Figma" },
  { name: "Scrum" },
  { name: t("portfolio.microcontrollers"), icon: MicrocontrollerIcon },
  { name: "Arduino" },
  { name: "Raspberry Pi" },
];
</script>

<template>
  <div id="skills" class="flex flex-col items-center gap-24">
    <SectionsSkillsArea
      :skills="frontendSkills"
      :title="t('portfolio.frontend')"
    />
    <SectionsSkillsArea
      :skills="backendSkills"
      :title="t('portfolio.backend')"
    />
    <SectionsSkillsArea
      :skills="sideSkills"
      :title="t('common.others')"
    />
  </div>
</template>
