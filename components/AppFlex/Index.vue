<script setup lang="ts">
const props = defineProps({
  colSpan: {
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
    class="flex flex-col"
    :class="`${props.gap}`"
    :style="{
      gridColumn: `span ${props.colSpan}`,
    }"
  >
    <slot />
  </div>
</template>

<style scoped></style>
