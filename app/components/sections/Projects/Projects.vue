<script lang="ts" setup>
import ElPoloLocoImage from "~/assets/images/ElPoloLoco.jpg";
import PokedexImage from "~/assets/images/pokedex.jpg";
import JoinKanbanBoardImage from "~/assets/images/join.jpg";
import RingOfFireImage from "~/assets/images/ring-of-fire.jpg";
import CRMImage from "~/assets/images/crm.jpg";
import NewProjectImage from "~/assets/images/newProject.jpg";

const { t } = useI18n();

const projects = [
  {
    year: 2025,
    projects: [
      {
        name: "Portfolio",
        description: t("portfolio.portfolio_description"),
        image: NewProjectImage,
        github: "https://github.com/MarcoHilliges/Portfolio_2025",
        link: null,
        demo: false,
      },
      {
        name: "Smart Home System",
        description: t("portfolio.smart_home_system_description"),
        image: NewProjectImage,
        github: null,
        link: null,
        demo: false,
      },
      {
        name: "CAN Bus Monitor",
        description: t("portfolio.can_bus_monitor_description"),
        image: NewProjectImage,
        github: null,
        link: null,
        demo: false,
      },
    ],
  },
  {
    year: 2024,
    projects: [
      {
        name: "Zeiterfassung",
        description: t("portfolio.zeiterfassung_description"),
        image: NewProjectImage,
        github: "https://github.com/MarcoHilliges/zeiterfassung",
        link: "https://zeiterfassung.marcos-tech.de/",
        demo: false,
      },
    ],
  },
  {
    year: 2022,
    projects: [
      {
        name: "El Pollo Loco",
        description: t("portfolio.el_pollo_loco_description"),
        image: ElPoloLocoImage,
        github: "https://github.com/MarcoHilliges/PolloLoco",
        link: "https://elpolloloco.marcos-tech.de/",
        demo: true,
      },
      {
        name: "Pokedex",
        description: t("portfolio.pokedex_description"),
        image: PokedexImage,
        github: "https://github.com/MarcoHilliges/Pokedex",
        link: "https://pokedex.marcos-tech.de/",
        demo: true,
      },
      {
        name: "Join-Kanban-board",
        description: t("portfolio.join_kanban_board_description"),
        image: JoinKanbanBoardImage,
        github: "https://github.com/normanrahmel/Join-Kanban-board",
        link: "https://join.marcos-tech.de/",
        demo: true,
      },
      {
        name: "Ring of Fire",
        description: t("portfolio.ring_of_fire_description"),
        image: RingOfFireImage,
        github: "https://github.com/MarcoHilliges/Ring-of-Fire",
        link: "https://ring-of-fire-2153a.web.app/",
        demo: true,
      },
      {
        name: "CRM",
        description: t("portfolio.crm_description"),
        image: CRMImage,
        github: "https://github.com/MarcoHilliges/simple-crm",
        link: "https://simple-crm-ade31.web.app/",
        demo: true,
      },
    ],
  },
];
</script>

<template>
  <div id="projects" class="flex flex-col items-center gap-24">
    <h1>{{ t("portfolio.projects") }}</h1>
    <div class="flex flex-col items-center max-w-[1300px] gap-24">
      <div
        v-for="projectsCollection in projects"
        :key="projectsCollection.year"
        class="flex flex-col items-center gap-24"
      >
        <h2>{{ projectsCollection.year }}</h2>
        <div class="flex flex-wrap gap-16 justify-center">
          <SectionsProjectsCard
            v-for="project in projectsCollection.projects"
            :key="project.name"
            :project="project"
          />
        </div>
      </div>
    </div>
  </div>
</template>
