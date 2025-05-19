<script setup lang="ts">
import unHeader from "@/components/unHeader/unHeader.vue";
import unFooter from "~/components/unFooter/unFooter.vue";
import unFlex from "~/components/unFlex/unFlex.vue";
</script>

<template>
  <unHeader />
  <unFlex
    data-aos="fade-up"
    class="my-6 flex min-h-screen flex-col"
    :container="true"
  >
    <unFlex class="flex-grow p-6" :card="true">
      <slot />
    </unFlex>
    <unFooter />
  </unFlex>
</template>

<style scoped></style>
