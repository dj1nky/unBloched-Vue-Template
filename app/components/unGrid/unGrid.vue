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
  tag: {
    type: String,
    default: "div",
  },
});

// Use computed properties to enhance reactivity
const gridStyles = computed(() => {
  return {
    gridTemplateColumns: `repeat(${props.gridCols}, 1fr)`,
  };
});
</script>

<template>
  <component
    :is="props.tag"
    class="flex flex-col xl:grid"
    :class="`${props.gap}`"
    :style="gridStyles"
  >
    <slot />
  </component>
</template>

<style scoped></style>
