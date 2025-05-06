<script setup>
import { aosInit } from "../utils/aos";

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
