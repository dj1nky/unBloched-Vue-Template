<script setup lang="ts">
import AppContainer from "~/components/AppContainer/AppContainer.vue";
import AppGrid from "~/components/AppGrid/AppGrid.vue";
import AppCard from "@/components/AppCard/AppCard.vue";
import AppHeader from "@/components/AppHeader/AppHeader.vue";
</script>

<template>
  <AppHeader />
  <AppContainer class="my-6 flex min-h-screen flex-col">
    <slot />
  </AppContainer>
</template>

<style scoped></style>
