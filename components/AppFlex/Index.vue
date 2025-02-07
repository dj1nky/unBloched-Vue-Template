<script setup lang="ts">
const props = defineProps({
  colSpan: {
    type: Number,
    default: 6,
  },
  gap: {
    type: String,
    default: "gap-16",
  },
});
</script>

<template>
  <div
    class="flex flex-col"
    :style="{
      gap: props.gap,
      gridColumn: `span ${props.colSpan}`,
    }"
  >
    <slot />
  </div>
</template>

<style scoped></style>
