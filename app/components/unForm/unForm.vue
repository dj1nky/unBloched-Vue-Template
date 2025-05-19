<script setup>
import { ref } from "vue";
import unInput from "~/components/unInput/unInput.vue";
import unButton from "~/components/unButton/unButton.vue";
import unGrid from "../unGrid/unGrid.vue";
import unFlex from "../unFlex/unFlex.vue";
const loaderIcon = "icons/loader.svg";
import EN from "./en.json";

const props = defineProps({
  buttonText: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  schema: {
    type: Array,
    required: true,
  },
  successMessage: {
    type: String,
    default: "",
  },
});
const formData = ref({});

// Initialize form data when schema changes
watch(
  () => props.schema,
  (newSchema) => {
    formData.value = newSchema.reduce((acc, field) => {
      // Initialize checkbox fields with false instead of empty string
      if (field.type === "checkbox") {
        acc[field.id] = false;
      } else {
        acc[field.id] = "";
      }
      return acc;
    }, {});
  },
  { immediate: true },
);

const errors = ref({});
const showToast = ref(false);
const toastMessage = ref("");
const isSubmitting = ref(false); // Track submission/loading state
const toastType = ref("success"); // Type of toast message (success/error)

const displayToast = (message, type = "success", duration = 5000) => {
  // Set the toast type first (either "success" or "error")
  toastType.value = type;

  // Set the message
  toastMessage.value = message;

  // Show the toast
  showToast.value = true;

  setTimeout(() => {
    showToast.value = false;
  }, duration);
};

// Validate field based on validations from schema
const validateField = (fieldId, value) => {
  const field = props.schema.find((field) => field.id === fieldId);
  if (!field || !field.validations) return;

  // Reset error for this field
  errors.value[fieldId] = "";

  for (const validation of field.validations) {
    switch (validation.type) {
      case "empty":
        if (!value || value.trim().length === 0) {
          errors.value[fieldId] = validation.message;
          return;
        }
        break;

      case "minLength":
        if (value && value.length < validation.value) {
          errors.value[fieldId] = validation.message;
          return;
        }
        break;

      case "email":
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(value) && value.length > validation.value) {
          errors.value[fieldId] = validation.message;
          return;
        }
        break;

      case "phone":
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(value)) {
          errors.value[fieldId] = validation.message;
          return;
        }
        break;

      case "checkbox":
        // For checkbox, we want to make sure it IS checked, not the opposite
        if (!value) {
          errors.value[fieldId] = validation.message;
          return;
        }
        break;
    }
  }
};

// Function to handle form submission
const handleSubmit = async () => {
  // Validate all fields before submission
  props.schema.forEach((field) => {
    validateField(field.id, formData.value[field.id]);
  });

  // Check if there are any errors
  const hasErrors = Object.values(errors.value).some((error) => error !== "");

  if (!hasErrors) {
    // Set loading state
    isSubmitting.value = true;

    try {
      // Simulate API call with timeout
      setTimeout(() => {
        // Reset form after submission
        formData.value = props.schema.reduce((acc, field) => {
          if (field.type === "checkbox") {
            acc[field.id] = false;
          } else {
            acc[field.id] = "";
          }
          return acc;
        }, {});

        // Reset loading state
        isSubmitting.value = false;

        // Show success toast
        displayToast(EN.successMessage, "success");
      }, 1000); // Simulate a delay for API call
    } catch (err) {
      isSubmitting.value = false;
      // Handle error...
    }
  } else {
    console.log(EN.errorMessage);
  }
};
</script>

<template>
  <unFlex class="items-start" :gap="'gap-6'">
    <unFormattedText :tag="'h2'" class="text-center text-2xl" :text="title" />
    <form
      class="easeIn w-full rounded-lg bg-white p-6"
      @submit.prevent="handleSubmit"
    >
      <unGrid :grid-cols="12" :gap="'gap-4'">
        <unInput
          v-for="(field, index) in schema"
          :key="index"
          v-model="formData[field.id]"
          :placeholder="field.placeholder"
          :label="field.label"
          :name="field.name"
          :text="field.text"
          :type="field.type"
          :options="field.options"
          :error="errors[field.id]"
          :sublabel="field.subLabel"
          @input="validateField(field.id, formData[field.id])"
        />
        <unFlex class="mt-6 flex w-full justify-center">
          <unButton
            :icon="true"
            type="submit"
            :text="isSubmitting ? '' : buttonText"
          >
            <NuxtImg
              v-if="isSubmitting"
              class="ml-2 h-6 w-6 animate-spin"
              :src="loaderIcon"
            />
          </unButton>
        </unFlex>
      </unGrid>
    </form>

    <!-- Toast notification with animation -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-10 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-10 opacity-0"
    >
      <div
        v-if="showToast"
        class="fixed bottom-12 left-1/2 z-50 container mx-auto w-full -translate-x-1/2 transform rounded-lg px-6 py-3 text-white shadow-lg md:w-auto"
        :class="toastType === 'error' ? 'bg-red-500' : 'bg-green-500'"
      >
        {{ toastMessage }}
      </div>
    </transition>
  </unFlex>
</template>

<style scoped>
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
