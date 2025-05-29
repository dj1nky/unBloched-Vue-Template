<script setup lang="ts">
import unDiv from "../unDiv/unDiv.vue";

defineProps({
  container: {
    type: Boolean,
    default: false,
  },
  colSpan: {
    type: Number,
    default: 6,
  },
  reverse: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <unDiv
    div="grid"
    :grid-cols="12"
    gap="gap-0"
    class="overflow-hidden"
    :container="container"
  >
    <unDiv
      :col-span="colSpan"
      :class="[
        reverse ? 'md:order-last' : container ? '' : 'md:ms-auto md:w-[77%]',
      ]"
    >
      <slot name="content" />
    </unDiv>
    <unDiv :col-span="colSpan">
      <slot name="image" />
    </unDiv>
  </unDiv>
</template>

<style scoped></style>
