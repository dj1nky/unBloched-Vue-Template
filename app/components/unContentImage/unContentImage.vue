<script setup lang="ts">
import unDiv from "../unDiv/unDiv.vue";

defineProps({
  animation: {
    type: Boolean,
    default: false,
  },
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
    :gap="0"
    class="overflow-hidden md:max-h-96"
    :container="container"
    :animation="animation ? 'fade-in' : ''"
  >
    <unDiv
      :col-span="colSpan"
      :animation="animation ? 'fade-in-up' : ''"
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
