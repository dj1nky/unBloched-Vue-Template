<script setup>
import { aosInit } from "../utils/aos";
import seoConfig from './seoConfig.json';

// SEO and head metadata configuration
useHead(seoConfig);

onMounted(() => {
  aosInit();
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped></style>
