<script setup>
import { ref } from "vue";
import unInput from "~/components/unInput/unInput.vue";
import unButton from "~/components/unButton/unButton.vue";
import unDiv from "../unDiv/unDiv.vue";
import { validate } from "./validate";
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
const errors = ref({});
const showToast = ref(false);
const toastMessage = ref("");
const isSubmitting = ref(false); // Track submission/loading state
const toastType = ref("success"); // Type of toast message (success/error)

let validateField = validate(props.schema, errors.value);

const displayToast = (message, type = "success", duration = 5000) => {
  toastType.value = type;
  toastMessage.value = message;
  showToast.value = true;
  setTimeout(() => {
    showToast.value = false;
  }, duration);
};

const handleSubmit = async () => {
  props.schema.forEach((field) => {
    validateField(field.id, formData.value[field.id]);
  });
  const hasErrors = Object.values(errors.value).some((error) => error !== "");

  if (!hasErrors) {
    isSubmitting.value = true;
    try {
      setTimeout(() => {
        formData.value = props.schema.reduce((acc, field) => {
          if (field.type === "checkbox") {
            acc[field.id] = false;
          } else {
            acc[field.id] = "";
          }
          return acc;
        }, {});
        isSubmitting.value = false;
        displayToast(EN.successMessage, "success");
      }, 1000);
    } catch (err) {
      isSubmitting.value = false;
    }
  } else {
    console.log(EN.errorMessage);
  }
};

watch(
  () => props.schema,
  (newSchema) => {
    formData.value = newSchema.reduce((acc, field) => {
      if (field.type === "checkbox") {
        acc[field.id] = false;
      } else {
        acc[field.id] = "";
      }
      return acc;
    }, {});
    validateField = validate(newSchema, errors.value);
  },
  { immediate: true },
);

</script>

<template>
  <unDiv
    class="items-start"
    :gap="'gap-6'"
  >
    <unFormattedText
      :tag="'h2'"
      class="text-center text-2xl"
      :text="title"
    />
    <form
      class="easeIn w-full rounded-lg bg-white p-6"
      @submit.prevent="handleSubmit"
    >
      <unDiv
        div="grid"
        :grid-cols="12"
        :gap="'gap-4'"
      >
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
      </unDiv>
      <unDiv class="mt-6 flex w-full justify-center">
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
      </unDiv>
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
  </unDiv>
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
