<script lang="ts" setup>
import { Moon, Sun, Monitor, type LucideProps } from "lucide-vue-next";
import type { FunctionalComponent } from "vue";

type ThemeMode = "light" | "dark" | "system";

const modes: {
  value: ThemeMode;
  icon: FunctionalComponent<LucideProps>;
}[] = [
  { value: "system", icon: Monitor },
  { value: "light", icon: Sun },
  { value: "dark", icon: Moon },
];

const systemIsDarkMode = computed(() => {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
});

const themeModeInLocalStorage = ref(getThemeModeFromLocalStorage());

onBeforeMount(() => {
  setThemeModeToDocument(themeModeInLocalStorage.value);
});

function toggleThemeMode(value: ThemeMode) {
  setThemeModeInLocalStorage(value);
  document.body?.classList.add("theme-change");
  themeModeInLocalStorage.value = value;
  setTimeout(() => {
    document.body?.classList.remove("theme-change");
  }, 600);
}

function getThemeModeFromLocalStorage(): ThemeMode {
  const themeFromStorage = localStorage.getItem("theme");
  return themeFromStorage === "light" ||
    themeFromStorage === "dark" ||
    themeFromStorage === "system"
    ? themeFromStorage
    : "system";
}

function setThemeModeInLocalStorage(value: ThemeMode) {
  localStorage.setItem("theme", value);
}

function setThemeModeToDocument(value: ThemeMode) {
  if (value === "dark") {
    document.documentElement.classList.add("dark");
  } else if (value === "light") {
    document.documentElement.classList.remove("dark");
  } else if (value === "system" && systemIsDarkMode.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

watch(themeModeInLocalStorage, (newValue) => {
  setThemeModeToDocument(newValue);
});
</script>

<template>
  <div class="fixed top-0 right-0 h-full z-50">
    <div class="flex flex-col justify-center h-full gap-6 mr-16">
      <button
        v-for="mode in modes"
        :key="mode.value"
        @click="toggleThemeMode(mode.value)"
        class="border rounded p-4"
      >
        <component :is="mode.icon" />
      </button>
    </div>
  </div>
</template>
