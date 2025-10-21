<script setup>
import { NuxtImg, NuxtLink } from "#components";

defineProps({
  borderRadius: {
    type: String,
    default: "",
  },
  height: {
    type: String,
    default: "60",
  },
  src: {
    type: String,
    default: "",
  },
  to: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "60",
  },
});
</script>

<template>
  <NuxtLink :to="to">
    <NuxtImg
      :class="borderRadius"
      :height="height"
      :width="width"
      :src="src"
    />
  </NuxtLink>
</template>
