<script lang="ts" setup>
const { t } = useI18n();

const frontendSkills = [
  { name: "JavaScript", iconPath: "~/assets/images/js.png" },
  { name: "TypeScript", iconPath: "~/assets/images/ts.png" },
  { name: "Vue.js", iconPath: "~/assets/images/vue.png" },
  { name: "Nuxt.js", iconPath: "~/assets/images/nuxt.png" },
  { name: "HTML", iconPath: "~/assets/images/html.png" },
  { name: "CSS", iconPath: "~/assets/images/css.png" },
  { name: "SCSS", iconPath: "~/assets/images/scss.png" },
  { name: "Tailwind CSS", iconPath: "~/assets/images/tailwind.png" },
];

const backendSkills = [
  { name: "C#", iconPath: "~/assets/images/csharp.png" },
  { name: ".NET", iconPath: "~/assets/images/dotnet.png" },
  { name: "Node.js", iconPath: "~/assets/images/node.png" },
  { name: "Docker", iconPath: "~/assets/images/docker.png" },
  { name: "MySQL", iconPath: "~/assets/images/mysql.png" },
  { name: "Microservices", iconPath: "~/assets/images/microservices.png" },
];

const sideSkills = [
  { name: "Git", iconPath: "~/assets/images/git.png" },
  { name: "GitHub", iconPath: "~/assets/images/github.png" },
  { name: "Figma", iconPath: "~/assets/images/figma.png" },
  { name: "Scrum", iconPath: "~/assets/images/scrum.png" },
];
</script>

<template>
  <div class="flex flex-col items-center gap-24">
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
