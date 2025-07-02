<script setup>
import { useToastStore } from "~/stores/toast.js";

const toastStore = useToastStore();

const getToastClasses = (type) => {
  const baseClasses =
    "fixed bottom-12 left-1/2 z-50 container mx-auto w-full -translate-x-1/2 transform rounded-lg px-6 py-3 text-white shadow-lg md:w-auto";

  switch (type) {
    case "error":
      return `${baseClasses} bg-red-500`;
    case "warning":
      return `${baseClasses} bg-yellow-500`;
    case "info":
      return `${baseClasses} bg-blue-500`;
    case "success":
    default:
      return `${baseClasses} bg-green-500`;
  }
};
</script>

<template>
  <div class="toast-container">
    <transition-group
      name="toast"
      tag="div"
      class="fixed bottom-12 left-1/2 z-50 flex flex-col gap-2"
    >
      <div
        v-for="toast in toastStore.activeToasts"
        :key="toast.id"
        :class="getToastClasses(toast.type)"
      >
        <div class="flex items-center justify-between">
          <span class="flex-1">{{ toast.message }}</span>
          <button
            class="ml-4 cursor-pointer text-white transition-colors hover:text-gray-200"
            @click="toastStore.hideToast(toast.id)"
          >
            ×
          </button>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateY(20px) translateX(-50%);
}

.toast-leave-to {
  opacity: 0;
  transform: translateY(-20px) translateX(-50%);
}

.toast-move {
  transition: transform 0.3s ease;
}
</style>
