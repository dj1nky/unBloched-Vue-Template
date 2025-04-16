<script setup lang="ts">
const props = defineProps({
  tag: {
    type: String,
    default: "section",
  },
});
</script>

<template>
  <component
    :is="props.tag"
    class="container mx-auto flex flex-col gap-6 md:w-[75%]"
  >
    <slot />
  </component>
</template>

<style scoped></style>
