<script setup lang="ts">
import AppLayout from "~/layouts/PageLayout/PageLayout.vue";
</script>

<template>
  <AppLayout>
    <AppGrid>
      <AppCard :col-span="3">
        <h1>About</h1>
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
  </AppLayout>
</template>

<style scoped></style>
