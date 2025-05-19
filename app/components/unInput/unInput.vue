<script setup>
import { computed } from "vue";
import unFlex from "~/components/unFlex/unFlex.vue";
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
});

const emit = defineEmits(["update:modelValue", "input"]);

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

const hasError = computed(() => {
  return props.error !== "";
});

// Computed class for input highlighting
const inputClasses = computed(() => {
  return {
    "border-green-500 ring-1 ring-green-500":
      hasValue.value && !isCheckbox.value && !hasError.value,
    "border-red-500 ring-1 ring-red-500": hasError.value,
    "form-input w-full px-4 py-2 text-black transition-all duration-300 focus:border-transparent focus:ring-1 focus:ring-indigo-500": true,
  };
});

const selectClasses = computed(() => {
  return {
    "border-green-500 ring-1 ring-green-500": hasValue.value && !hasError.value,
    "border-red-500 ring-1 ring-red-500": hasError.value,
    "form-select w-full px-4 py-2 text-black transition-all duration-300 focus:border-transparent focus:ring-1 focus:ring-indigo-500": true,
  };
});

const textareaClasses = computed(() => {
  return {
    "border-green-500 ring-1 ring-green-500": hasValue.value && !hasError.value,
    "border-red-500 ring-1 ring-red-500": hasError.value,
    "form-textarea w-full px-4 py-2 text-black transition-all duration-300 focus:border-transparent focus:ring-1 focus:ring-indigo-500": true,
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
</script>

<template>
  <unFlex class="text-sm" :gap="'gap-2'" :col-span="6">
    <unFlex :gap="'gap-1'">
      <label :for="name" class="text-black">{{ label }}</label>
      <span v-if="sublabel" class="text-xs text-gray-500">
        {{ sublabel }}
      </span>
    </unFlex>

    <div class="relative w-full">
      <!-- Select dropdown if type is select and options are provided -->
      <select
        v-if="isSelect"
        :name="name"
        :value="modelValue"
        required
        :class="selectClasses"
        @input="updateValue"
      >
        <option value="" disabled>
          {{ placeholder }}
        </option>
        <option
          v-for="(option, index) in options"
          :key="index"
          :value="typeof option === 'object' ? option[optionValue] : option"
        >
          {{ typeof option === "object" ? option[optionLabel] : option }}
        </option>
      </select>

      <!-- Textarea for multiline content -->
      <textarea
        v-else-if="isTextarea"
        :name="name"
        :placeholder="placeholder"
        :value="modelValue"
        :rows="rows"
        :maxlength="maxlength"
        required
        :class="textareaClasses"
        @input="updateValue"
      />

      <!-- Checkbox input -->
      <div v-else-if="isCheckbox" class="flex">
        <input
          type="checkbox"
          :name="name"
          :checked="!!modelValue"
          class="form-checkbox h-6 w-6 text-indigo-500 transition duration-150 ease-in-out"
          :class="{ 'border-red-500': hasError }"
          @change="updateValue"
        />
        <span class="ml-2 text-black" :class="{ 'text-red-500': hasError }">{{
          placeholder
        }}</span>
      </div>

      <!-- Regular input for all other cases -->
      <input
        v-else
        :type="type"
        required
        :name="name"
        :placeholder="placeholder"
        :value="modelValue"
        :maxlength="maxlength"
        :class="inputClasses"
        @keydown.enter.prevent="false"
        @input="updateValue"
      />
      <span
        v-if="hasValue && !isCheckbox && !hasError"
        class="mini-label"
        :class="{ 'text-red-500': hasError, 'text-green-500': !hasError }"
      >
        {{ label }}
      </span>
    </div>
    <div v-if="error" class="error-container">
      <p class="slide-in text-sm text-red-500">
        {{ error }}
      </p>
    </div>
  </unFlex>
</template>

<style scoped>
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
  border-radius: 6px;
  border: 0.5px solid #343333;
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

.error-container {
  min-height: 1.5rem;
}

.form-input,
.form-select,
.form-textarea {
  transition: all 0.3s ease-in-out;
  background-color: white;
  border-radius: 6px;
  border: 0.5px solid #343333;
}

.form-checkbox {
  cursor: pointer;
  border: 0.5px solid #343333;
  border-radius: 4px;
}

.form-checkbox:checked {
  background-color: #6366f1;
  border-color: #6366f1;
}

.form-checkbox:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.3);
}
</style>
