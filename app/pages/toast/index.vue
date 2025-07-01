<script setup lang="ts">
import DefaultLayout from "~/layouts/DefaultLayout.vue";
import unButton from "~/components/unButton/unButton.vue";
import unDiv from "~/components/unDiv/unDiv.vue";
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
    10000,
  );
};

const clearAllToasts = () => {
  toastStore.clearAllToasts();
};
</script>

<template>
  <DefaultLayout>
    <client-only>
      <unDiv container>
        <unDiv class="mb-8">
          <h1 class="mb-4 text-3xl font-bold">
            Toast Demo
          </h1>
          <p class="text-gray-600">
            This page demonstrates how to use the global toast system. Toasts
            will persist across page navigation and can be triggered from
            anywhere in your app.
          </p>
        </unDiv>

        <unDiv
          div="grid"
          :grid-cols="2"
        >
          <unButton
            text="Success Toast"
            class="bg-green-500 hover:bg-green-600"
            @click="showSuccessToast"
          />

          <unButton
            text="Error Toast"
            class="bg-red-500 hover:bg-red-600"
            @click="showErrorToast"
          />

          <unButton
            text="Warning Toast"
            class="bg-yellow-500 hover:bg-yellow-600"
            @click="showWarningToast"
          />

          <unButton
            text="Info Toast"
            class="bg-blue-500 hover:bg-blue-600"
            @click="showInfoToast"
          />

          <unButton
            text="Custom Duration (10s)"
            class="bg-purple-500 hover:bg-purple-600"
            @click="showCustomToast"
          />

          <unButton
            text="Clear All Toasts"
            class="bg-gray-500 hover:bg-gray-600"
            @click="clearAllToasts"
          />
        </unDiv>
      </unDiv>
      <client-only />
    </client-only>
  </DefaultLayout>
</template>
