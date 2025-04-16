<script setup lang="ts">
const props = defineProps({
  colSpan: {
    type: Number,
    default: 6,
  },
  flexDirection: {
    type: String,
    default: "flex-col",
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
const flexClasses = computed(() => {
  return [props.gap, props.flexDirection];
});

const gridStyles = computed(() => {
  return {
    gridColumn: `span ${props.colSpan}`,
  };
});

</script>

<template>
  <component
    :is="props.tag"
    class="flex"
    :class="flexClasses"
    :style="gridStyles"
  >
    <slot />
  </component>
</template>

<style scoped></style>
