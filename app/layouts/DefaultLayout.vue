<script setup lang="ts">
import unHeader from "~/components/unHeader/Index.vue";
import unFooter from "~/components/unFooter/unFooter.vue";
import unDiv from "~/components/unDiv/unDiv.vue";
import unToast from "~/components/unToast/unToast.vue";
</script>

<template>
  <unHeader />
  <unDiv class="my-6 flex min-h-screen flex-col">
    <slot />
  </unDiv>
  <unFooter />
  <unToast />
</template>

<style scoped></style>
