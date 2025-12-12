<script setup>
import { ClientOnly } from "#components";
import AppButton from "@/components/AppButton/AppButton.vue";
import AppDiv from "~/components/AppDiv/AppDiv.vue";
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
    <AppDiv
      div="grid"
      :grid-cols="2"
    >
      <AppButton
        text="Success Toast"
        class="bg-green-500 hover:bg-green-600"
        @click="showSuccessToast"
      />

      <AppButton
        text="Error Toast"
        class="bg-red-500 hover:bg-red-600"
        @click="showErrorToast"
      />

      <AppButton
        text="Warning Toast"
        class="border-dark text-dark border-1 bg-yellow-500 hover:bg-yellow-600"
        @click="showWarningToast"
      />

      <AppButton
        text="Info Toast"
        class="bg-blue-500 hover:bg-blue-600"
        @click="showInfoToast"
      />

      <AppButton
        text="Custom Duration (10s)"
        class="bg-purple-500 hover:bg-purple-600"
        @click="showCustomToast"
      />

      <AppButton
        text="Clear All Toasts"
        class="bg-gray-500 hover:bg-gray-600"
        @click="clearAllToasts"
      />
    </AppDiv>
  </ClientOnly>
</template>
