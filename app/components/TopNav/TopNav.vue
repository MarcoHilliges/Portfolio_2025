<template>
  <div class="sticky top-0 left-0 right-0 z-50 ">
    <div class="flex items-center justify-between px-24 py-16 bg-liniar bg-page50 dark:bg-pageDark50">
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
      <TopNavNavigation />
    </div>
  </div>
</template>
