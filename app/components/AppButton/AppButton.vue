<script setup lang="ts">
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
    type: String,
    default: "button",
  },
});
</script>

<template>
  <!-- Disabled button -->
  <button
    v-if="disabled"
    disabled
    class="cursor-default rounded-lg bg-gray-400 p-2 text-center font-medium"
    :class="bgColor"
  >
    {{ text }}
  </button>

  <!-- Secondary button (when not disabled) -->
  <NuxtLink
    v-else-if="variant === 'secondary' && link"
    target="_blank"
    :to="link"
    class="hover:bg-dark cursor-pointer rounded-lg bg-white p-2 text-center font-medium text-black hover:text-white"
    :class="bgColor"
  >
    {{ text }}
  </NuxtLink>

  <!-- Tertiary button (when not disabled) -->
  <NuxtLink
    v-else-if="variant === 'tertiary'"
    target="_blank"
    class="bg-dark rounded-lg p-2 text-center font-medium text-white"
    :class="bgColor"
  >
    {{ text }}
  </NuxtLink>

  <!-- Primary button without link (for form submission) -->
  <AppFlex
    v-else-if="type === 'submit' && !link"
    :tag="'button'"
    :flex-direction="'flex-row'"
    type="submit"
    class="hover:bg-burnt cursor-pointer justify-center rounded-lg bg-indigo-500 p-2 text-center font-medium"
    :class="bgColor"
  >
    <slot v-if="icon ? icon : ''" />
    {{ text }}
  </AppFlex>

  <!-- Primary button (when not disabled and not secondary) -->
  <NuxtLink
    v-else
    target="_blank"
    :to="link"
    type="submit"
    class="hover:bg-burnt cursor-pointer rounded-lg bg-indigo-500 p-2 text-center font-medium"
    :class="bgColor"
  >
    {{ text }}
  </NuxtLink>
</template>

<style scoped></style>
