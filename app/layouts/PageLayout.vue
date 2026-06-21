<script setup>
import UiToast from "@/components/ui-toast/ui-toast.vue";
import UiDiv from "~/components/ui-div/ui-div.vue";
import { useToastStore } from "~/stores/toast.js";

const toastStore = useToastStore();
</script>

<template>
  <ui-div direction="md:flex-row flex-col">
    <ui-div class="bg-red-500">
      <slot name="left" />
    </ui-div>
    <ui-div
      grow
      class="bg-red-500"
    >
      <slot name="right" />
    </ui-div>
  </ui-div>
  <ui-toast
    :toasts="toastStore.activeToasts"
    @close="toastStore.hideToast"
  />
</template>

<style scoped></style>
