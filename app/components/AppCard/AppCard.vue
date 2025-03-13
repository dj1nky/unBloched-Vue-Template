<script setup lang="ts">
const props = defineProps({
  bgColour: {
    type: String,
    default: "bg-linear-45 from-indigo-500 to-pink-500",
  },
  colSpan: {
    type: Number,
    default: 6,
  },
});
</script>

<template>
  <AppFlex
    :class="bgColour"
    :col-span="colSpan"
    class="rounded p-6 text-white"
  >
    <slot />
  </AppFlex>
</template>

<style scoped></style>
