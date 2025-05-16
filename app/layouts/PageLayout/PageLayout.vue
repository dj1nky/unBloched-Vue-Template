<script setup lang="ts">
import AppHeader from "@/components/AppHeader/AppHeader.vue";
</script>

<template>
  <AppHeader />
  <AppFlex
    data-aos="fade-up"
    class="my-6 flex min-h-screen flex-col"
    :container="true"
  >
    <AppFlex
      class="flex-grow p-6"
      :card="true"
    >
      <slot />
    </AppFlex>
    <AppFlex
      :card="true"
      class="mt-auto"
    >
      <h1>Footer</h1>
    </AppFlex>
  </AppFlex>
</template>

<style scoped></style>
