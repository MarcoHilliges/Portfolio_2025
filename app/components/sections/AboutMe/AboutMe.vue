<script setup>
const { t } = useI18n();
</script>

<template>
  <div>
    <h1>
      {{ t("portfolio.aboutMe") }}
    </h1>

    <div>
      <div>image here</div>
      <div>
        <p>
          {{ t("portfolio.aboutMeFirstDescription") }}
        </p>
      </div>
    </div>

    <div>
      <div>
        <!-- Start der "Reise" -->
        2008 Erste Programmiererfahrung mit Siemens S7 und Logo! in der
        Ausbildung zum Mechatroniker
      </div>

      <div>2015 Meisterbrief im Kraftfahrzeugtechniker-Handwerk</div>

      <div>2022 Weiterbildung an der Developer Akademie zum Web-Developer</div>

      <div>2022 Anstellung als Software-Entwickler bei Sellerpoint GmbH</div>
    </div>
  </div>
</template>
