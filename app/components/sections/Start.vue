<script lang="ts" setup>
const { t } = useI18n();
</script>

<template>
  <div id="start" class="flex justify-evenly items-center gap-24 h-screen">
    <span
      class="text-[50px] font-bold whitespace-pre"
      v-html="t('portfolio.welcomeText')"
    >
    </span>

    <div class="relative">
      <img class="rounded-full" src="~/assets/images/profile.png" alt="" />

      <div class="mirror mirror-light dark:hidden">
        <img
          class="w-full h-full scale-y-50 rounded-full object-cover"
          src="~/assets/images/profile.png"
          alt=""
        />
      </div>

      <div class="mirror mirror-dark hidden dark:block">
        <img
          class="w-full h-full scale-y-50 rounded-full object-cover"
          src="~/assets/images/profile.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.mirror {
  @apply absolute transform scale-y-[-1] w-full rounded-full object-cover top-[calc(75%+5px)];
}

.mirror-light {
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(255, 250, 235, 0) 10%,
    rgba(255, 250, 235, 0.2) 50%,
    rgba(255, 250, 235, 0.5) 75%,
    rgba(255, 250, 235, 1)
  );
  mask-image: linear-gradient(
    to bottom,
    rgba(255, 250, 235, 0) 30%,
    rgba(255, 250, 235, 0.1) 50%,
    rgba(255, 250, 235, 0.5) 75%,
    rgba(255, 250, 235, 1)
  );

  opacity: 0.5;
}

.mirror-dark {
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 13, 0) 30%,
    rgba(0, 0, 13, 0.1) 50%,
    rgba(0, 0, 13, 0.5) 75%,
    rgba(0, 0, 13, 1)
  );
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 13, 0) 30%,
    rgba(0, 0, 13, 0.1) 50%,
    rgba(0, 0, 13, 0.5) 75%,
    rgba(0, 0, 13, 1)
  );

  opacity: 0.3;
}
</style>
