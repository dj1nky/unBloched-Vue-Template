<script setup>
import { computed } from "vue";
import { useIntersectionAnimation } from "~/composables/useIntersectionAnimation";
import styles from "~/styles";
import {
  flexDirection,
  flexGap,
  gridColumn,
  gridStyle,
  gridTemplateColumns,
} from "./styles";

const props = defineProps({
  animation: {
    type: String,
    default: "",
  },
  disableAnimationOnMobile: {
    type: Boolean,
    default: true,
  },
  animationThreshold: {
    type: Number,
    default: 0.6,
  },
  animationTriggerChildren: {
    type: Boolean,
    default: true,
  },
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
    default: "flex-col",
  },
  div: {
    type: String,
    default: "flex",
    validator: value => ["flex", "grid"].includes(value),
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
const computedflexGap = computed(() => flexGap(props));
const computedGridColumn = computed(() => gridColumn(props));
const computedGridTemplateColumns = computed(() => gridTemplateColumns(props));
const computedDisplayClass = computed(() =>
  props.div === "grid" ? gridStyle() : props.div
);

// Composable for animation handling
const { animationRef, isVisible } = useIntersectionAnimation({
  animation: props.animation,
  threshold: props.animationThreshold,
  triggerChildren: props.animationTriggerChildren,
  disableOnMobile: props.disableAnimationOnMobile,
});

const animationClass = computed(() => (props.animation ? props.animation : ""));
</script>

<template>
  <component
    :is="props.tag"
    ref="animationRef"
    :class="[
      computedflexDirection,
      computedDisplayClass,
      computedflexGap,
      props.container ? styles.container : '',
      props.card ? styles.card : '',
      props.header ? styles.header : '',
      props.grow ? 'grow' : '',
      animationClass,
      { 'is-visible': isVisible },
    ]"
    :style="[computedGridColumn, computedGridTemplateColumns]"
  >
    <slot />
  </component>
</template>

<style scoped></style>
