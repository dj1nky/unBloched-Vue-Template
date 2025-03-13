<script setup lang="ts">
import AppContainer from "~/components/AppContainer/AppContainer.vue";
import AppGrid from "~/components/AppGrid/AppGrid.vue";
import AppCard from "@/components/AppCard/AppCard.vue";
</script>

<template>
  <AppContainer class="my-6 flex min-h-screen flex-col">
    <AppGrid>
      <AppCard :col-span="3">
        <h1>Header 3</h1>
      </AppCard>
      <AppCard :col-span="9">
        <h1>Header 9</h1>
      </AppCard>
    </AppGrid>

    <AppCard class="flex-grow">
      <h1>Body</h1>
    </AppCard>

    <AppCard class="mt-auto">
      <h1>Footer</h1>
    </AppCard>
  </AppContainer>
</template>

<style scoped></style>
