<script lang="ts" setup>
type ThemeMode = "light" | "dark" | "system";

const { t } = useI18n();

useHead({
  title: t("portfolio.portfolio"),
});

const systemIsDarkMode = computed(() => {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
});

const themeModeInLocalStorage = ref(getThemeModeFromLocalStorage());

onMounted(() => {
  setThemeModeToDocument(themeModeInLocalStorage.value);
});

function toggleThemeMode(value: ThemeMode) {
  setThemeModeInLocalStorage(value);
  themeModeInLocalStorage.value = value;
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
  <div class="">
    <TopNav />
    <h1>{{ t("common.welcome") }}</h1>

    <h1>{{ themeModeInLocalStorage }}</h1>

    <div class="flex gap-6">
      <button
        @click="toggleThemeMode('system')"
        class="px-4 py-2 bg-primary text-white rounded"
      >
        System Mode
      </button>
      <button
        @click="toggleThemeMode('light')"
        class="px-4 py-2 bg-primary text-white rounded"
      >
        Light Mode
      </button>
      <button
        @click="toggleThemeMode('dark')"
        class="px-4 py-2 bg-primary text-white rounded"
      >
        Dark Mode
      </button>
    </div>
  </div>
</template>
