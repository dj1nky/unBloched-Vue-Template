<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

/**
 * Reveal-on-scroll wrapper. Wrap anything that should animate in:
 *
 *   <ui-animate>...</ui-animate>                          renders a <div>
 *   <ui-animate :as="UiDiv" gap="gap-3">...</ui-animate>  renders UiDiv (props/classes pass through)
 *
 * The element fades in while easing into place the first time it scrolls into view.
 */
const props = defineProps({
  // Tag name or component to render (e.g. "section", UiDiv).
  as: {
    type: [String, Object],
    default: "div",
  },
  // Where the element travels from: up | down | left | right | none (fade only).
  direction: {
    type: String,
    default: "up",
    validator: value => ["up", "down", "left", "right", "none"].includes(value),
  },
  // Wait before starting (ms). Use for staggering siblings.
  delay: {
    type: [Number, String],
    default: 0,
  },
  // Length of the animation (ms).
  duration: {
    type: [Number, String],
    default: 700,
  },
  // Pass true to turn the animation off and render normally.
  disabled: {
    type: Boolean,
    default: false,
  },
});

const root = ref(null);
const mounted = ref(false);
const visible = ref(false);
const settled = ref(false);
let observer = null;

const reveal = () => {
  visible.value = true;
  observer?.disconnect();
  // Drop the transition once finished so hover effects etc. stay snappy.
  setTimeout(
    () => (settled.value = true),
    Number(props.delay) + Number(props.duration) + 50
  );
};

onMounted(() => {
  // Inline timing is set after mount so server and client markup match.
  mounted.value = true;
  // `as` can be a component whose root is a fragment or comment, so $el is
  // not always an element: walk forward to the first real element.
  let node = root.value?.$el ?? root.value ?? null;
  while (node && node.nodeType !== 1) node = node.nextSibling;
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (
    props.disabled ||
    reduceMotion ||
    !node ||
    !("IntersectionObserver" in window)
  ) {
    visible.value = true;
    settled.value = true;
    return;
  }

  observer = new IntersectionObserver(
    entries => {
      if (entries.some(entry => entry.isIntersecting)) reveal();
    },
    { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
  );
  observer.observe(node);
});

onBeforeUnmount(() => observer?.disconnect());

const classes = computed(() => {
  if (props.disabled || settled.value) return [];
  return [
    "ui-animate",
    `ui-animate--${props.direction}`,
    { "ui-animate--visible": visible.value },
  ];
});

const styles = computed(() =>
  props.disabled || settled.value || !mounted.value
    ? {}
    : {
        transitionDuration: `${props.duration}ms`,
        transitionDelay: `${props.delay}ms`,
      }
);
</script>

<template>
  <component
    :is="as"
    ref="root"
    :class="classes"
    :style="styles"
  >
    <slot />
  </component>
</template>

<style scoped>
.ui-animate {
  opacity: 0;
  transition-property: opacity, transform;
  transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
  will-change: opacity, transform;
}

.ui-animate--up {
  transform: translate3d(0, 28px, 0);
}

.ui-animate--down {
  transform: translate3d(0, -28px, 0);
}

.ui-animate--left {
  transform: translate3d(28px, 0, 0);
}

.ui-animate--right {
  transform: translate3d(-28px, 0, 0);
}

.ui-animate--visible {
  opacity: 1;
  transform: none;
}
</style>
