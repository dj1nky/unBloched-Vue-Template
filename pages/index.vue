<script setup lang="ts">
import AppContainer from "@/components/AppContainer/Index.vue";
import AppFlex from "@/components/AppFlex/Index.vue";
import AppGrid from "@/components/AppGrid/Index.vue";
</script>

<template>
  <AppContainer class="mt-4">
    <AppGrid
      class="gap-12"
      :grid-cols="12"
    >
      <AppFlex
        :col-span="8"
        class="bg-maroon text-white p-6"
      >
        Col Span 3
      </AppFlex>
      <AppFlex
        :col-span="4"
        class="bg-maroon text-white p-6"
      >
        Col Span 3
      </AppFlex>
    </AppGrid>
  </AppContainer>
</template>

<style scoped></style>
