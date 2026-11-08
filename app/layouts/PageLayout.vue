<script setup>
import UiToast from "../components/ui-toast/ui-toast.vue";
import { useToastStore } from "../stores/toast.js";

const toastStore = useToastStore();
</script>

<template>
  <slot />
  <ui-toast
    :toasts="toastStore.activeToasts"
    @close="toastStore.hideToast"
  />
</template>
