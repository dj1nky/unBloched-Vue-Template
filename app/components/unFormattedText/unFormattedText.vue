<script setup>
import { useIntersectionAnimation } from "~/composables/useIntersectionAnimation";

import { createParts } from "./formatText";

const props = defineProps({
  tag: {
    type: String,
    default: "p",
  },
  text: {
    type: String,
    default: "span",
  },
  textColor: {
    type: String,
    default: "yellow",
  },
  textSize: {
    type: String,
    default: "", // Default text size, you can use "sm", "base", "lg", etc.
  },
  animation: {
    type: String,
    default: "",
  },
  animationThreshold: {
    type: Number,
    default: 0.6,
  },
  disableAnimationOnMobile: {
    type: Boolean,
    default: true,
  },
});

const parts = computed(() => createParts(props.text));

const { animationRef, isVisible } = useIntersectionAnimation({
  animation: props.animation,
  threshold: props.animationThreshold,
  disableOnMobile: props.disableAnimationOnMobile,
  triggerChildren: false,
});
</script>

<template>
  <component
    :is="props.tag"
    ref="animationRef"
    :class="[
      textSize,
      props.animation ? props.animation : '',
      { 'is-visible': isVisible },
    ]"
  >
    <template
      v-for="(part, index) in parts"
      :key="index"
    >
      <span
        v-if="part.type === 'normal'"
        :class="textSize"
      >
        {{ part.content }}
      </span>
      <em
        v-else-if="part.type === 'italic'"
        :class="textSize"
      >
        {{ part.content }}
      </em>
      <span
        v-else-if="part.type === 'colored'"
        class="colored"
        :class="textSize"
      >
        {{ part.content }}
      </span>
      <em
        v-else-if="part.type === 'italic-colored'"
        class="colored"
        :class="textSize"
      >
        {{ part.content }}
      </em>
      <br v-else-if="part.type === 'linebreak'" />
    </template>
  </component>
</template>

<style scoped>
.colored {
  color: v-bind("textColor");
  font-weight: bold;
}
</style>
