<script setup>
import AppDiv from "~/components/AppDiv/AppDiv.vue";

defineProps({
  animation: {
    type: Boolean,
    default: false,
  },
  container: {
    type: Boolean,
    default: false,
  },
  flexContent: {
    type: Number,
    default: 1,
  },
  flexImg: {
    type: Number,
    default: 1,
  },
  reverse: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <AppDiv
    div="flex"
    gap="gap-0"
    class="overflow-hidden h-auto"
    direction="md:flex-row flex-col"
    :container="container"
    :animation="animation ? 'fade-in' : ''"
  >
    <AppDiv
      :animation="animation ? 'fade-in-up' : ''"
      :style="{
        flex: container ? flexContent : 0.4,
      }"
      :class="[
        reverse ? 'md:order-last' : container ? '' : 'md:ms-auto md:w-[77%]',
      ]"
    >
      <slot name="content" />
    </AppDiv>
    <AppDiv
      :style="{
        flex: container ? flexImg : 0.5,
      }"
    >
      <slot name="image" />
    </AppDiv>
  </AppDiv>
</template>

<style scoped></style>
