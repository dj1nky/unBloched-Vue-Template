import { onBeforeUnmount, onMounted } from "vue";

/** Calls `onOutside` when a pointer press lands outside `elementRef`. */
export const useClickOutside = (elementRef, onOutside) => {
  const handlePointerDown = event => {
    const element = elementRef.value;

    if (element && !element.contains(event.target)) {
      onOutside(event);
    }
  };

  onMounted(() => document.addEventListener("pointerdown", handlePointerDown));
  onBeforeUnmount(() =>
    document.removeEventListener("pointerdown", handlePointerDown)
  );
};
