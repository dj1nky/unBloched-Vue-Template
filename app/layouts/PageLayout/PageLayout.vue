<script setup lang="ts">
import AppHeader from "@/components/AppHeader/AppHeader.vue";
import AppFooter from "~/components/AppFooter/AppFooter.vue";
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
    <AppFooter />
  </AppFlex>
</template>

<style scoped></style>
