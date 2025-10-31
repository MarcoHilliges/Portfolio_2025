<script setup>
const { locale, locales, setLocale } = useI18n();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<template>
  <div class="flex justify-center h-full">
    <button
      v-for="language in locales"
      :key="language.code"
      @click="setLocale(language.code)"
      class="nav-icon-button"
      :class="{
        'is-active': locale === language.code,
        selectable: locale !== language.code,
      }"
    >
      {{ language.code }}
    </button>
  </div>
</template>
