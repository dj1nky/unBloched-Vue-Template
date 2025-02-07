<script setup lang="ts">
const props = defineProps({
  gridCols: {
    type: Number,
    default: 6,
  },
  gap: {
    type: String,
    default: "gap-6",
  },
});
</script>

<template>
  <div
    class="flex flex-col xl:grid"
    :style="{
      gap: props.gap,
      gridTemplateColumns: `repeat(${props.gridCols}, 1fr)`,
    }"
  >
    <slot />
  </div>
</template>

<style scoped></style>
