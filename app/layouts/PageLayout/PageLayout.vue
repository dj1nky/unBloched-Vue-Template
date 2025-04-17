<script setup lang="ts">
import AppContainer from "~/components/AppContainer/AppContainer.vue";
import AppHeader from "@/components/AppHeader/AppHeader.vue";
</script>

<template>
  <AppHeader />
  <AppContainer
    data-aos="fade-up"
    class="my-6 flex min-h-screen flex-col"
  >
    <slot />
  </AppContainer>
</template>

<style scoped></style>
