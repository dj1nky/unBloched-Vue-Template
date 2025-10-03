<script setup>
import styles from "../../styles";
import {
  flexDirection,
  flexGap,
  gridStyle,
  gridTemplateColumns,
  gridColumn,
} from "./styles";
import { ref, onMounted, onUnmounted, computed } from "vue";
import { ANIMATIONS } from "./animations.js";

const props = defineProps({
  animation: {
    type: String,
    default: "",
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
    default: "col",
  },
  div: {
    type: String,
    default: "flex",
    validator: value => ["flex", "grid"].includes(value),
  },
  gap: {
    type: Number,
    default: 6,
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

// Animation state
const rootEl = ref(null);
const isVisible = ref(false);
let observer = null;

const animationClass = computed(() => {
  if (!props.animation) return "";
  return props.animation;
});

onMounted(() => {
  if (!rootEl.value) return;
  if (!props.animation) return;

  const key = props.animation;
  const config = ANIMATIONS[key];
  if (!config) return;

  // Ensure starting class present
  rootEl.value.classList.add(config.class);

  observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          entry.target.classList.add("is-visible");

          // Trigger children if requested
          if (props.animationTriggerChildren) {
            // Different-type triggers
            if (config.triggers && config.triggers.length) {
              config.triggers.forEach(t => {
                const childNodes = entry.target.querySelectorAll(
                  `.${ANIMATIONS[t].class}`
                );
                childNodes.forEach(c => c.classList.add("is-visible"));
              });
            }
            // Same-type nested descendants
            const sameType = entry.target.querySelectorAll(`.${config.class}`);
            sameType.forEach(c => {
              if (c !== entry.target) c.classList.add("is-visible");
            });
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: props.animationThreshold }
  );
  observer.observe(rootEl.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <component
    :is="props.tag"
    ref="rootEl"
    :class="[
      computedflexDirection,
      computedDisplayClass,
      computedflexGap,
      props.container ? styles.container : '',
      props.card ? styles.card : '',
      props.header ? styles.header : '',
      props.grow ? 'flex-grow' : '',
      animationClass,
      { 'is-visible': isVisible },
    ]"
    :style="[computedGridColumn, computedGridTemplateColumns]"
  >
    <slot />
  </component>
</template>

<style scoped></style>
