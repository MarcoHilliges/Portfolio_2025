<script lang="ts" setup>
import JSIcon from "~/assets/images/JavaScript.svg"
import TSIcon from "~/assets/images/TypeScript.svg"
import VueIcon from "~/assets/images/Vue.svg"
import NuxtIcon from "~/assets/images/Nuxt.svg"
import HTMLIcon from "~/assets/images/HTML.svg"
import CSSIcon from "~/assets/images/CSS.svg"
import SCSSIcon from "~/assets/images/SCSS.png"
import TailwindIcon from "~/assets/images/Tailwind CSS.svg"

import CPlusPlusIcon from "~/assets/images/C++.svg"
import NodeJSIcon from "~/assets/images/NodeJS.svg"
import DockerIcon from "~/assets/images/Docker.svg"
import MySQLIcon from "~/assets/images/MySQL.svg"

import GitIcon from "~/assets/images/git.svg"
import GitHubIcon from "~/assets/images/GitHub.svg"
import FigmaIcon from "~/assets/images/Figma.svg"
import ArduinoIcon from "~/assets/images/Arduino.svg"
import RaspberryPiIcon from "~/assets/images/Raspberry Pi.svg"
import MicrocontrollerIcon from "~/assets/images/microcontroller.png"


const { t } = useI18n();

const frontendSkills = [
  { name: "JavaScript", icon: JSIcon },
  { name: "TypeScript", icon: TSIcon },
  { name: "Vue.js", icon: VueIcon },
  { name: "Nuxt.js", icon: NuxtIcon },
  { name: "HTML", icon: HTMLIcon },
  { name: "CSS", icon: CSSIcon },
  { name: "SCSS", icon: SCSSIcon },
  { name: "Tailwind CSS", icon: TailwindIcon },
];

const backendSkills = [
  { name: "C++", icon: CPlusPlusIcon },
  { name: "Node.js", icon: NodeJSIcon },
  { name: "Docker", icon: DockerIcon },
  { name: "MySQL", icon: MySQLIcon },
  { name: "Microservices" },
];

const sideSkills = [
  { name: "Git", icon: GitIcon },
  { name: "GitHub", icon: GitHubIcon },
  { name: "Figma", icon: FigmaIcon },
  { name: "Scrum" },
  { name: t("portfolio.microcontrollers"), icon: MicrocontrollerIcon },
  { name: "Arduino", icon: ArduinoIcon },
  { name: "Raspberry Pi", icon: RaspberryPiIcon },
];
</script>

<template>
  <div id="skills" class="flex flex-col items-center gap-24">
    <h1>{{ t('portfolio.skills') }}</h1>
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
