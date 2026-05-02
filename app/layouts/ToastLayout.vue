<script setup>
import { ClientOnly } from "#components";
import UiButton from "@/components/ui-button/ui-button.vue";
import UiDiv from "~/components/ui-div/ui-div.vue";
import { useToastStore } from "~/stores/toast.js";

const toastStore = useToastStore();

const showSuccessToast = () => {
  toastStore.success("This is a success message!");
};

const showErrorToast = () => {
  toastStore.error("This is an error message!");
};

const showWarningToast = () => {
  toastStore.warning("This is a warning message!");
};

const showInfoToast = () => {
  toastStore.info("This is an info message!");
};

const showCustomToast = () => {
  toastStore.showToast(
    "This is a custom toast with 10 seconds duration",
    "success",
    10000
  );
};

const clearAllToasts = () => {
  toastStore.clearAllToasts();
};
</script>

<template>
  <ClientOnly>
    <ui-div
      div="grid"
      :grid-cols="2"
    >
      <ui-button
        text="Success Toast"
        class="bg-green-500 hover:bg-green-600"
        @click="showSuccessToast"
      />

      <ui-button
        text="Error Toast"
        class="bg-red-500 hover:bg-red-600"
        @click="showErrorToast"
      />

      <ui-button
        text="Warning Toast"
        class="border-dark text-dark border-1 bg-yellow-500 hover:bg-yellow-600"
        @click="showWarningToast"
      />

      <ui-button
        text="Info Toast"
        class="bg-blue-500 hover:bg-blue-600"
        @click="showInfoToast"
      />

      <ui-button
        text="Custom Duration (10s)"
        class="bg-purple-500 hover:bg-purple-600"
        @click="showCustomToast"
      />

      <ui-button
        text="Clear All Toasts"
        class="bg-gray-500 hover:bg-gray-600"
        @click="clearAllToasts"
      />
    </ui-div>
  </ClientOnly>
</template>
