<script setup>
import { computed, ref } from "vue";
import { getLikertItems, likertEyes } from "./styles";
import { useClickOutside } from "../../composables/useClickOutside";
import UiDiv from "../ui-div/ui-div.vue";
import UiIcon from "../ui-icon/ui-icon.vue";

const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "",
  },
  error: {
    type: String,
    default: "",
  },
  // Add new prop for dropdown options
  options: {
    type: Array,
    default: () => [],
  },
  // Add prop for option value key (for objects)
  optionValue: {
    type: String,
    default: "value",
  },
  // Add prop for option label key (for objects)
  optionLabel: {
    type: String,
    default: "label",
  },
  // Add props for textarea
  rows: {
    type: [String, Number],
    default: 4,
  },
  // Optional maximum character limit for textarea
  maxlength: {
    type: [String, Number],
    default: 255,
  },
  sublabel: {
    type: String,
    default: "",
  },
  touched: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: true,
  },
  // Shows an "x" button to clear the value while text is entered
  clearable: {
    type: Boolean,
    default: false,
  },
  // Optional shared reveal state so several password fields can toggle together
  // (v-model:reveal). Left as null, each field manages its own visibility.
  reveal: {
    type: Boolean,
    default: null,
  },
  // Hides this field's eye button (another field's button controls it)
  hideRevealToggle: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue", "update:reveal", "input"]);

const localVisible = ref(false);
const isPasswordVisible = computed({
  get: () => (props.reveal === null ? localVisible.value : props.reveal),
  set: value => {
    localVisible.value = value;
    emit("update:reveal", value);
  },
});
const isPassword = computed(() => props.type === "password");
const inputType = computed(() =>
  isPassword.value && isPasswordVisible.value ? "text" : props.type
);

function clearValue() {
  emit("update:modelValue", "");
  emit("input", "");
}

function updateValue(event) {
  if (props.type === "checkbox") {
    // For checkbox, emit the checked status
    const isChecked = event.target.checked;
    emit("update:modelValue", isChecked);

    // Also emit the input event with the same value for validation
    emit("input", isChecked);
  } else {
    // For other inputs
    emit("update:modelValue", event.target.value);
    emit("input", event.target.value);
  }
}

const hasValue = computed(() => {
  return (
    props.modelValue !== null &&
    props.modelValue !== "" &&
    props.modelValue !== false
  );
});

const showClear = computed(
  () => props.clearable && !isPassword.value && String(props.modelValue) !== ""
);

const hasError = computed(() => {
  return props.error !== "";
});

// Computed class for input highlighting
const inputClasses = computed(() => {
  return {
    "border-green-500 ring-2 ring-green-100":
      hasValue.value && !isCheckbox.value && !hasError.value,
    "border-red-500 ring-2 ring-red-100": hasError.value,
    "form-input w-full px-4 py-3 text-black transition-all duration-300 focus:border-orange focus:ring-4 focus:ring-orange/30": true,
  };
});

const selectClasses = computed(() => {
  return {
    "border-green-500 ring-2 ring-green-100": hasValue.value && !hasError.value,
    "border-red-500 ring-2 ring-red-100": hasError.value,
    "form-select w-full px-4 py-3 text-black transition-all duration-300 focus:border-orange focus:ring-4 focus:ring-orange/30": true,
  };
});

const textareaClasses = computed(() => {
  return {
    "border-green-500 ring-2 ring-green-100": hasValue.value && !hasError.value,
    "border-red-500 ring-2 ring-red-100": hasError.value,
    "form-textarea w-full px-4 py-3 text-black transition-all duration-300 focus:border-orange focus:ring-4 focus:ring-orange/30": true,
  };
});

// Computed property to check if we should render a select element
const isSelect = computed(() => {
  return props.type === "select";
});

// Computed property to check if we should render a textarea element
const isTextarea = computed(() => {
  return props.type === "textarea";
});

// Computed property to check if we should render a checkbox element
const isCheckbox = computed(() => {
  return props.type === "checkbox";
});

// Computed property to check if we should render a Likert scale
const isLikert = computed(() => {
  return props.type === "likert";
});

const likertItems = computed(() =>
  getLikertItems(props.options, props.optionValue, props.optionLabel)
);

// Custom dropdown (replaces the native <select> so it looks the same everywhere)
const selectRef = ref(null);
const isSelectOpen = ref(false);
const activeIndex = ref(-1);
const dropUp = ref(false);

useClickOutside(selectRef, () => {
  isSelectOpen.value = false;
});

const selectOptions = computed(() =>
  props.options.map(option =>
    typeof option === "object"
      ? { value: option[props.optionValue], label: option[props.optionLabel] }
      : { value: option, label: option }
  )
);

const selectedOption = computed(() =>
  selectOptions.value.find(
    option => String(option.value) === String(props.modelValue)
  )
);

function toggleSelect() {
  isSelectOpen.value = !isSelectOpen.value;

  if (isSelectOpen.value) {
    // Open upwards when the list would run off the bottom of the viewport.
    const { top, bottom } = selectRef.value.getBoundingClientRect();
    const listHeight = Math.min(selectOptions.value.length * 40 + 8, 240);

    dropUp.value =
      window.innerHeight - bottom < listHeight + 8 &&
      top > window.innerHeight - bottom;
  }

  activeIndex.value = selectOptions.value.indexOf(selectedOption.value);
}

function chooseOption(option) {
  isSelectOpen.value = false;
  emit("update:modelValue", option.value);
  emit("input", option.value);
}

function moveActive(step) {
  if (!isSelectOpen.value) {
    return toggleSelect();
  }

  const count = selectOptions.value.length;
  activeIndex.value = (activeIndex.value + step + count) % count;
}

function selectActive() {
  const option = selectOptions.value[activeIndex.value];

  return isSelectOpen.value && option ? chooseOption(option) : toggleSelect();
}

function selectLikert(value) {
  emit("update:modelValue", value);
  emit("input", value);
}

const charsLeft = computed(() => {
  // Only show for string/number types
  if (
    typeof props.modelValue === "string" ||
    typeof props.modelValue === "number"
  ) {
    return props.maxlength - String(props.modelValue).length;
  }
  return props.maxlength;
});
</script>

<template>
  <ui-div
    class="text-sm"
    gap="gap-2"
    :col-span="6"
  >
    <ui-div gap="gap-1">
      <label
        :for="name"
        class="text-black"
      >
        {{ label }}
      </label>
      <span
        v-if="sublabel"
        class="text-xs text-gray-500"
      >
        {{ sublabel }}
      </span>
    </ui-div>

    <div class="relative w-full">
      <!-- Custom select dropdown -->
      <div
        v-if="isSelect"
        ref="selectRef"
        class="relative"
        @keydown.esc="isSelectOpen = false"
      >
        <button
          type="button"
          :name="name"
          role="combobox"
          aria-haspopup="listbox"
          :aria-expanded="isSelectOpen"
          :class="selectClasses"
          class="flex cursor-pointer items-center text-left"
          @click="toggleSelect"
          @keydown.down.prevent="moveActive(1)"
          @keydown.up.prevent="moveActive(-1)"
          @keydown.enter.prevent="selectActive"
        >
          <span
            class="truncate"
            :class="selectedOption ? 'text-black' : 'text-gray-400'"
          >
            {{ selectedOption ? selectedOption.label : placeholder }}
          </span>
        </button>
        <ui-icon
          icon-name="mdi:chevron-down"
          icon-color="text-gray-500"
          class="select-chevron h-5 w-5 transition-transform"
          :class="{ 'rotate-180': isSelectOpen }"
        />
        <ul
          v-if="isSelectOpen"
          role="listbox"
          class="absolute right-0 left-0 z-30 max-h-60 overflow-x-hidden overflow-y-auto rounded-xl border-2 border-gray-200 bg-white py-1 shadow-lg"
          :class="dropUp ? 'bottom-full mb-1' : 'mt-1'"
        >
          <li
            v-for="(option, index) in selectOptions"
            :key="option.value"
            role="option"
            :aria-selected="option === selectedOption"
            class="cursor-pointer truncate px-4 py-2 text-sm text-gray-900 transition-colors"
            :title="option.label"
            :class="[
              option === selectedOption ? 'bg-orange/30 font-semibold' : '',
              index === activeIndex ? 'bg-orange/20' : 'hover:bg-orange/20',
            ]"
            @click="chooseOption(option)"
            @mouseenter="activeIndex = index"
          >
            {{ option.label }}
          </li>
          <li
            v-if="!selectOptions.length"
            class="px-4 py-2 text-sm text-gray-500"
          >
            No options
          </li>
        </ul>
      </div>

      <!-- Textarea for multiline content -->
      <textarea
        v-else-if="isTextarea"
        :name="name"
        :placeholder="placeholder"
        :value="modelValue"
        :rows="rows"
        :maxlength="maxlength"
        :required="required"
        :class="textareaClasses"
        @input="updateValue"
      />

      <!-- Checkbox input -->
      <div
        v-else-if="isCheckbox"
        class="flex"
      >
        <input
          type="checkbox"
          :name="name"
          :checked="!!modelValue"
          class="form-checkbox text-orange h-6 w-6 transition duration-150 ease-in-out"
          :class="{ 'border-red-500': hasError }"
          @change="updateValue"
        />
        <span
          class="ml-2 text-black"
          :class="{ 'text-red-500': hasError }"
        >
          {{ placeholder }}
        </span>
      </div>

      <!-- Likert scale -->
      <div
        v-else-if="isLikert"
        role="radiogroup"
        :aria-label="label"
        class="likert-scale flex w-full"
        :class="{ 'likert-error': hasError }"
      >
        <button
          v-for="option in likertItems"
          :key="option.value"
          type="button"
          role="radio"
          :aria-checked="Number(modelValue) === option.value"
          :aria-label="option.label || String(option.value)"
          class="likert-option group flex min-w-0 flex-1 basis-0 cursor-pointer flex-col items-stretch gap-2 text-center"
          :class="{
            'is-selected': Number(modelValue) === option.value,
            'is-dimmed': hasValue && Number(modelValue) !== option.value,
          }"
          @click="selectLikert(option.value)"
        >
          <span
            class="likert-box smd:py-5 flex items-center justify-center py-3"
          >
            <svg
              viewBox="0 0 48 48"
              class="likert-tile smd:h-14 smd:w-14 h-9 w-9"
              fill="none"
              aria-hidden="true"
            >
              <path
                class="likert-shape"
                :d="option.face.shape"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="4"
                stroke-linejoin="round"
              />
              <g
                class="likert-face"
                :transform="`translate(0 ${option.face.faceY || 0})`"
              >
                <circle
                  v-for="eye in likertEyes"
                  :key="eye.cx"
                  v-bind="eye"
                  r="2.6"
                  fill="currentColor"
                />
                <path v-bind="option.face.mouth" />
              </g>
            </svg>
          </span>
          <span
            class="likert-label smd:text-sm px-0.5 text-[10px] leading-tight font-medium text-black"
          >
            {{ option.label }}
          </span>
        </button>
      </div>

      <!-- Regular input for all other cases -->
      <div
        v-else
        class="relative w-full"
      >
        <input
          :type="inputType"
          :required="required"
          :name="name"
          :placeholder="placeholder"
          :value="modelValue"
          :maxlength="maxlength"
          :class="[
            inputClasses,
            { 'pr-11': isPassword && !hideRevealToggle, 'pr-16': showClear },
          ]"
          @keydown.enter.prevent="false"
          @input="updateValue"
        />
        <button
          v-if="showClear"
          type="button"
          class="hover:bg-orange/20 hover:text-dark absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer rounded-md px-2 py-0.5 text-xs font-medium text-gray-500"
          @click="clearValue"
        >
          Clear
        </button>
        <button
          v-if="isPassword && !hideRevealToggle"
          type="button"
          class="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          :aria-label="isPasswordVisible ? 'Hide password' : 'Show password'"
          @click="isPasswordVisible = !isPasswordVisible"
        >
          <ui-icon
            class="h-5 w-5"
            :icon-name="
              isPasswordVisible ? 'mdi:eye-off-outline' : 'mdi:eye-outline'
            "
            icon-color="text-gray-500"
          />
        </button>
      </div>
      <span
        v-if="hasValue && !isCheckbox && !isLikert && !hasError"
        class="mini-label"
        :class="{ 'text-red-500': hasError, 'text-green-500': !hasError }"
      >
        {{ label }}
      </span>
      <!-- Character counter for textarea only -->
      <div
        v-if="isTextarea"
        class="text-right text-xs text-gray-500"
      >
        {{ charsLeft }} characters left
      </div>
    </div>
    <div
      v-if="error"
      class="error-container"
    >
      <p class="slide-in text-sm text-red-500">
        {{ error }}
      </p>
    </div>
  </ui-div>
</template>

<style scoped>
.likert-option {
  outline: none;
  transition: opacity 0.2s ease;
}

.likert-box {
  background-color: white;
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--color-orange) 40%, white);
  transition:
    background-color 0.2s ease,
    transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.2s ease;
}

.likert-option:first-child .likert-box {
  border-radius: 12px 0 0 12px;
}

.likert-option:last-child .likert-box {
  border-radius: 0 12px 12px 0;
}

.likert-tile {
  overflow: visible;
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.likert-shape {
  color: var(--color-orange);
  transition: color 0.2s ease;
}

.likert-face {
  color: var(--color-dark);
  transition: color 0.2s ease;
}

.likert-option:hover .likert-box,
.likert-option:focus-visible .likert-box {
  background-color: color-mix(in srgb, var(--color-orange) 22%, white);
}

.likert-option:hover .likert-tile,
.likert-option:focus-visible .likert-tile {
  transform: scale(1.12);
}

.likert-option:focus-visible .likert-box {
  outline: 3px solid var(--color-dark);
  outline-offset: 2px;
}

.likert-option.is-dimmed:not(:hover) {
  opacity: 0.75;
}

.likert-option.is-selected .likert-box {
  position: relative;
  z-index: 1;
  background-color: var(--color-dark);
  transform: scale(1.1);
  box-shadow:
    0 0 0 3px var(--color-orange),
    0 12px 24px color-mix(in srgb, var(--color-dark) 35%, transparent);
}

.likert-option.is-selected .likert-face {
  transform-box: fill-box;
  transform-origin: center;
  animation: likertPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.likert-option.is-selected .likert-label {
  position: relative;
  z-index: 2;
  color: var(--color-dark);
  font-weight: 700;
  transform: translateY(6px);
}

.likert-error .likert-box {
  box-shadow: inset 0 0 0 2px #fca5a5;
}

@keyframes likertPop {
  0% {
    transform: scale(0.6) rotate(-12deg);
  }

  100% {
    transform: scale(1) rotate(0);
  }
}

.shake-animation {
  animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

.slide-in {
  animation: slideIn 0.3s forwards;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.error-container {
  min-height: 1.5rem;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
}

.form-input,
.form-select,
.form-textarea {
  transition: all 0.3s ease-in-out;
  background-color: white;
  border-radius: 12px;
  border: 2px solid #e5e7eb;
}

.form-input:hover,
.form-select:hover,
.form-textarea:hover {
  border-color: #fec200;
}

.mini-label {
  position: absolute;
  top: -6px;
  left: 8px;
  font-size: 10px;
  border-radius: 12px;
  background-color: #fef7ff;
  padding: 0 4px;
  color: oklch(0.723 0.219 149.579);
  border-radius: 2px;
  font-weight: 600;
  pointer-events: none;
  opacity: 0;
  transform: translateY(-4px);
  animation: fadeInMiniLabel 0.3s forwards;
}

@keyframes fadeInMiniLabel {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.relative {
  position: relative;
}

.form-checkbox {
  cursor: pointer;
  border: 2px solid #d1d5db;
  border-radius: 6px;
}

.form-checkbox:checked {
  background-color: #fec200;
  border-color: #fec200;
}

.form-checkbox:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(254, 194, 0, 0.4);
}

/* Custom select styling */
.form-select {
  padding-right: 2.5rem;
}

.select-chevron {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  margin-top: -0.625rem;
  pointer-events: none;
}
</style>
