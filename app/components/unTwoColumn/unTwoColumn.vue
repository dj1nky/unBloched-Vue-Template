<script setup lang="ts">
import unDiv from "../unDiv/unDiv.vue";

defineProps({
  animation: {
    type: Boolean,
    default: true,
  },
  alignment: {
    type: Boolean,
    default: true,
  },
  delay: {
    type: String,
    default: "500",
  },
  firstColSpan: {
    type: Number,
    default: 6,
  },
  gap: {
    type: String,
    default: "md:gap-12 gap-8",
  },
  order: {
    type: Boolean,
    default: false,
  },
  secondColSpan: {
    type: Number,
    default: 6,
  },
});
</script>

<template>
  <unDiv
    div="grid"
    :grid-cols="12"
    :gap="gap"
  >
    <unDiv
      :class="[
        order ? '' : 'md:order-first',
        alignment ? 'items-center md:items-start' : '',
      ]"
      :col-span="firstColSpan"
    >
      <slot name="first-column" />
    </unDiv>
    <unDiv
      :class="[
        order ? 'md:order-first' : '',
        alignment ? 'items-center md:items-start' : '',
      ]"
      :col-span="secondColSpan"
    >
      <slot name="second-column" />
    </unDiv>
  </unDiv>
</template>

<style scoped></style>
