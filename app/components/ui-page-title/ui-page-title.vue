<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <h1
    v-if="props.title || $slots.default"
    class="large-h1 font-bold"
  >
    <slot>
      {{ props.title }}
    </slot>
  </h1>
</template>
