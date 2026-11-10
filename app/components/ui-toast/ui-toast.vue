<script setup>
import UiIcon from "../ui-icon/ui-icon.vue";

const props = defineProps({
  toasts: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["close"]);

const TOAST_STYLES = {
  success: { color: "bg-green-600", icon: "mdi:check-circle-outline" },
  error: { color: "bg-red-600", icon: "mdi:alert-circle-outline" },
  warning: { color: "bg-amber-500", icon: "mdi:alert-outline" },
  info: { color: "bg-blue-600", icon: "mdi:information-outline" },
};

const getToastStyle = type => TOAST_STYLES[type] || TOAST_STYLES.success;
</script>

<template>
  <transition-group
    name="toast"
    tag="div"
    class="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex flex-col items-center gap-2 px-4"
  >
    <div
      v-for="toast in props.toasts"
      :key="toast.id"
      role="status"
      class="pointer-events-auto flex w-full max-w-md items-start gap-3 rounded-xl px-4 py-3 text-sm leading-snug font-medium text-white shadow-lg"
      :class="getToastStyle(toast.type).color"
    >
      <ui-icon
        :icon-name="getToastStyle(toast.type).icon"
        icon-color="text-white"
        class="mt-px h-5 w-5 shrink-0"
      />
      <span class="min-w-0 flex-1 break-words">{{ toast.message }}</span>
      <button
        type="button"
        aria-label="Close notification"
        class="-mt-0.5 -mr-1 flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-full text-lg leading-none text-white/80 transition-colors hover:bg-white/20 hover:text-white"
        @click="emit('close', toast.id)"
      >
        ×
      </button>
    </div>
  </transition-group>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.toast-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.toast-move {
  transition: transform 0.3s ease;
}
</style>
