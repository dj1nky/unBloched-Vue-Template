<script setup lang="ts">
import unDiv from "~/components/unDiv/unDiv.vue";
defineProps({
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
  icon: {
    type: Boolean,
    default: false,
  },
  secondary: {
    type: Boolean,
    default: false,
  },
  tertiary: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: "",
  },
  variant: {
    type: String,
    default: "",
  },
  type: {
    type: String as () => "button" | "submit" | "reset",
    default: "button",
  },
});
</script>

<template>
  <!-- Secondary button -->
  <NuxtLink
    v-if="secondary"
    target="_blank"
    :to="link"
    class="hover:bg-dark cursor-pointer rounded-lg bg-white p-2 text-center font-medium text-black hover:text-white"
    :class="bgColor"
  >
    {{ text }}
  </NuxtLink>

  <!-- Tertiary button -->
  <NuxtLink
    v-else-if="tertiary"
    target="_blank"
    class="bg-dark cursor-pointer rounded-lg p-2 text-center font-medium text-white hover:bg-indigo-500"
    :class="bgColor"
  >
    {{ text }}
  </NuxtLink>

  <!-- Disabled button -->
  <button
    v-else-if="disabled"
    disabled
    class="cursor-default rounded-lg bg-gray-400 p-2 text-center font-medium text-white"
    :class="bgColor"
  >
    {{ text }}
  </button>

  <!-- Button for forms, <NuxtLink> won't work for submission -->
  <button
    v-else-if="!link"
    :type="type"
    class="hover:bg-dark cursor-pointer rounded-lg bg-indigo-500 p-2 text-center font-medium text-white hover:text-white"
    :class="bgColor"
  >
    <unDiv
      class="justify-center"
      direction="row"
    >
      {{ text }}
      <slot v-if="icon ? icon : ''" />
    </unDiv>
  </button>

  <!-- Default Primary button -->
  <NuxtLink
    v-else
    target="_blank"
    :to="link"
    class="hover:bg-dark cursor-pointer rounded-lg bg-indigo-500 p-2 text-center font-medium text-white hover:text-white"
    :class="bgColor"
  >
    {{ text }}
  </NuxtLink>
</template>

<style scoped></style>
