<script setup lang="ts">
import unHeader from "@/components/unHeader/unHeader.vue";
import unFooter from "~/components/unFooter/unFooter.vue";
import unDiv from "~/components/unDiv/unDiv.vue";
</script>

<template>
  <unHeader />
  <unDiv class="my-6 flex min-h-screen flex-col">
    <slot />
  </unDiv>
  <unFooter />
</template>

<style scoped></style>
