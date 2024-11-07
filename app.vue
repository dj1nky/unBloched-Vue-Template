<script setup lang="ts">
import AppContainer from "@/components/AppContainer.vue";
import AppFlex from "@/components/AppFlex.vue";
import AppGrid from "@/components/AppGrid.vue";
</script>

<template>
  <AppContainer class="mt-16">
    <AppGrid :gap="48" :grid-cols="6">
      <AppFlex :col-span="2" class="justify-evenly bg-red-500">
        <div class="h-24 w-24 bg-blue-500"></div>
        <div class="h-24 w-24 bg-blue-500"></div>
        <div class="h-24 w-24 bg-blue-500"></div>
      </AppFlex>
      <AppFlex :col-span="4" class="bg-red-500">
        <div class="h-24 w-24 bg-blue-500"></div>
        <div class="h-24 w-24 bg-blue-500"></div>
        <div class="h-24 w-24 bg-blue-500"></div>
      </AppFlex>
    </AppGrid>
  </AppContainer>
</template>

<style scoped></style>
