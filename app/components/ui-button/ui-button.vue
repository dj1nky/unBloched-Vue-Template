<script setup>
import { computed } from "vue";
import { NuxtLink } from "#components";
import { useButtonLogic } from "./composables/useButtonLogic";
import { BASE_CLASS, SIZE_CLASS_MAP } from "./styles";
import UiDiv from "../ui-div/ui-div.vue";

const props = defineProps({
  bgColor: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  link: {
    type: String,
    default: "",
  },
  variant: {
    type: String,
    default: "primary",
    validator: value =>
      ["primary", "secondary", "tertiary", "info", "error"].includes(value),
  },
  size: {
    type: String,
    default: "md",
    validator: value => Object.keys(SIZE_CLASS_MAP).includes(value),
  },
  text: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "button",
  },
});

const { isLink, componentAttrs, buttonClass } = useButtonLogic(props);

const componentTag = computed(() => (isLink.value ? NuxtLink : "button"));
</script>

<template>
  <component
    :is="componentTag"
    v-bind="componentAttrs"
    :class="[
      BASE_CLASS,
      SIZE_CLASS_MAP[props.size],
      buttonClass,
      props.bgColor,
    ]"
  >
    <ui-div
      class="items-center justify-center"
      direction="flex-row"
      gap="gap-2"
    >
      {{ props.text }}
      <slot />
    </ui-div>
  </component>
</template>

<style scoped></style>
