<script setup>
import { computed } from "vue";
import { NuxtLink } from "#components";
import UiDiv from "~/components/ui-div/ui-div.vue";
import { useButtonLogic } from "./composables/useButtonLogic";
import { BASE_CLASS } from "./styles";

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
    validator: value => ["primary", "secondary", "tertiary"].includes(value),
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
    :class="[BASE_CLASS, buttonClass, props.bgColor]"
  >
    <ui-div
      class="justify-center"
      direction="row"
    >
      {{ props.text }}
      <slot />
    </ui-div>
  </component>
</template>

<style scoped></style>
