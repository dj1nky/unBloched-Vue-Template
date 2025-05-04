<script setup lang="ts">

import { createParts } from "../../../utils/createContentParts"

const parts = computed(() => createParts(props.text));

const props = defineProps({
  tag: {
    type: String,
    default: "p",
  },
  text: {
    type: String,
    default: "",
  },
});

</script>

<template>
  <component
    :is="props.tag"
  >
    <template
      v-for="(part, index) in parts"
      :key="index"
    >
      <span v-if="part.type === 'normal'">{{ part.content }}</span>
      <em v-else-if="part.type === 'italic'">{{ part.content }}</em>
      <span
        v-else-if="part.type === 'colored'"
        class="colored"
      >{{ part.content }}</span>
      <em
        v-else-if="part.type === 'italic-colored'"
        class="colored"
      >{{ part.content }}</em>
      <br v-else-if="part.type === 'linebreak'">
    </template>
  </component>
</template>

<style scoped>
.colored {
  color: yellow;
  font-weight: bold;
}
</style>