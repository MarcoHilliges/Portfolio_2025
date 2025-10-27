<script lang="ts" setup>
import { Mail } from "lucide-vue-next";

const { t } = useI18n();
</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-50">
    <div
      class="flex items-center justify-between px-24 py-16 bg-liniar bg-page50 dark:bg-pageDark50"
    >
      <div class="w-1/4">
        <img
          class="h-[60px] dark:hidden"
          src="~/assets/images/logo.png"
          alt="Logo"
        />
        <img
          class="h-[60px] hidden dark:block"
          src="~/assets/images/logo-dark.png"
          alt="Logo"
        />
      </div>

      <TopNavNavigation />

      <div class="flex items-center gap-24 w-1/4 justify-end">
        <a
          href="mailto:marco.hilliges@gmx.de"
          class="nav-icon-button selectable"
        >
          <Mail :size="16" />
        </a>
        <TopNavThemeSwitches />
      </div>
    </div>
  </div>
</template>
