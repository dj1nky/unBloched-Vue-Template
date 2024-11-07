<script setup lang="ts">
const props = defineProps({
  colSpan: {
    type: Number,
    default: 6,
  },
  gap: {
    type: Number,
    default: 16,
  },
});
</script>

<template>
  <div
    class="flex flex-col"
    :style="{
      gap: `${props.gap}px`,
      gridColumn: `span ${props.colSpan}`,
    }"
  >
    <slot />
  </div>
</template>

<style scoped></style>
