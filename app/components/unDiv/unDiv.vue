<script setup>
import styles from "../../styles";
import {
  flexDirection,
  gridStyle,
  gridTemplateColumns,
  gridColumn,
} from "./styles";

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
  direction: {
    type: String,
    default: "col",
  },
  div: {
    type: String,
    default: "flex",
    validator: (value) => ["flex", "grid"].includes(value),
  },
  gap: {
    type: String,
    default: "gap-6",
  },
  gridCols: {
    type: Number,
    default: 12,
  },
  grow: {
    type: Boolean,
    default: false,
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

// Create computed properties that call your style functions
const computedflexDirection = computed(() => flexDirection(props));
const computedGridColumn = computed(() => gridColumn(props));
const computedGridTemplateColumns = computed(() => gridTemplateColumns(props));
const computedDisplayClass = computed(() =>
  props.div === "grid" ? gridStyle() : props.div,
);
</script>

<template>
  <component
    :is="props.tag"
    :class="[
      computedflexDirection,
      computedDisplayClass,
      props.container ? styles.container : '',
      props.card ? styles.card : '',
      props.header ? styles.header : '',
      props.grow ? 'flex-grow' : '',
    ]"
    :style="[computedGridColumn, computedGridTemplateColumns]"
  >
    <slot />
  </component>
</template>

<style scoped></style>
