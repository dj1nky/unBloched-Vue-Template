<script setup lang="ts">
import styles from "../../styles";
const props = defineProps({
  colSpan: {
    type: Number,
    default: 6,
  },
  card: {
    type: Boolean,
    default: false,
  },
  container: {
    type: Boolean,
    default: false,
  },
  flexDirection: {
    type: String,
    default: "flex-col",
  },
  gap: {
    type: String,
    default: "gap-6",
  },
  header: {
    type: Boolean,
    default: false,
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
    :class="[
      flexClasses,
      props.container ? styles.container : '',
      props.card ? styles.card : '',
      props.header ? styles.header : '',
    ]"
    :style="gridStyles"
  >
    <slot />
  </component>
</template>

<style scoped></style>
