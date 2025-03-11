<script setup lang="ts">
import AppContainer from "@/components/AppContainer/Index.vue";
import AppFlex from "@/components/AppFlex/Index.vue";
import AppGrid from "@/components/AppGrid/Index.vue";
</script>

<template>
  <AppContainer>
    <AppGrid class="bg-light p-12">
      <AppFlex class="bg-maroon p-6 text-white">
        <h1>Col Span 3</h1>
      </AppFlex>
      <AppFlex class="bg-light-green p-6 text-white">
        <h2 class="font-bold uppercase">
          Col Span 3
        </h2>
      </AppFlex>
    </AppGrid>
  </AppContainer>
</template>

<style scoped></style>
