<script setup lang="ts">
const props = defineProps({
  gridCols: {
    type: Number,
    default: 12,
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
    :class="`${props.gap}`"
    :style="{
      gridTemplateColumns: `repeat(${props.gridCols}, 1fr)`,
    }"
  >
    <slot />
  </div>
</template>

<style scoped></style>
