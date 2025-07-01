import { defineStore } from "pinia";

export const useToastStore = defineStore("toast", {
  state: () => ({
    toasts: [],
  }),

  actions: {
    showToast(message, type = "success", duration = 5000) {
      // Immediately clear all toasts (no timeout)
      this.toasts = [];
      const id = Date.now().toString();
      const toast = {
        id,
        message,
        type,
        duration,
        show: true,
      };

      this.toasts.push(toast);

      // Auto-remove toast after duration
      setTimeout(() => {
        this.hideToast(id);
      }, duration);

      return id;
    },

    hideToast(id) {
      const toast = this.toasts.find((t) => t.id === id);
      if (toast) {
        toast.show = false;
        // Remove from array after animation completes
        setTimeout(() => {
          this.toasts = this.toasts.filter((t) => t.id !== id);
        }, 300);
      }
    },

    clearAllToasts() {
      this.toasts.forEach((toast) => {
        toast.show = false;
      });
      setTimeout(() => {
        this.toasts = [];
      }, 300);
    },

    // Convenience methods
    success(message, duration) {
      return this.showToast(message, "success", duration);
    },

    error(message, duration) {
      return this.showToast(message, "error", duration);
    },

    warning(message, duration) {
      return this.showToast(message, "warning", duration);
    },

    info(message, duration) {
      return this.showToast(message, "info", duration);
    },
  },

  getters: {
    activeToasts: (state) => state.toasts.filter((toast) => toast.show),
  },
});
