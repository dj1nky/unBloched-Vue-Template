<script setup lang="ts">
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
});

const parts = computed(() => createParts(props.text));
</script>

<template>
  <component
    :is="props.tag"
    :class="textSize"
  >
    <template
      v-for="(part, index) in parts"
      :key="index"
    >
      <span
        v-if="part.type === 'normal'"
        :class="textSize"
      >{{ part.content }}</span>
      <em
        v-else-if="part.type === 'italic'"
        :class="textSize"
      >{{ part.content }}</em>
      <span
        v-else-if="part.type === 'colored'"
        class="colored"
        :class="textSize"
      >{{ part.content }}</span>
      <em
        v-else-if="part.type === 'italic-colored'"
        class="colored"
        :class="textSize"
      >{{ part.content }}</em>
      <br v-else-if="part.type === 'linebreak'">
    </template>
  </component>
</template>

<style scoped>
.colored {
  color: v-bind("textColor");
  font-weight: bold;
}
</style>
