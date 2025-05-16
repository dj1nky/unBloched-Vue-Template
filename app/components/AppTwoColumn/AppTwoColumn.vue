<script setup lang="ts">
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
  <AppGrid
    :grid-cols="12"
    :gap="gap"
  >
    <AppFlex
      :class="[
        order ? '' : 'md:order-first',
        alignment ? 'items-center md:items-start' : '',
      ]"
      :data-aos="animation ? 'fade-right' : ''"
      :col-span="firstColSpan"
      data-aos-easing="linear"
    >
      <slot name="first-column" />
    </AppFlex>
    <AppFlex
      :class="[
        order ? 'md:order-first' : '',
        alignment ? 'items-center md:items-start' : '',
      ]"
      :data-aos="animation ? 'fade-left' : ''"
      data-aos-easing="linear"
      :col-span="secondColSpan"
    >
      <slot name="second-column" />
    </AppFlex>
  </AppGrid>
</template>

<style scoped></style>
