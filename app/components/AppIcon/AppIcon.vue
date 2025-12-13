<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
  iconColor: {
    type: String,
    default: "text-white",
  },
  iconName: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <Icon
    :class="props.iconColor"
    :icon="props.iconName"
    width="52"
    height="52"
  />
</template>

<style lang="scss" scoped></style>
