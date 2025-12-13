<script setup>
import { ref, watch } from "vue";
import { NuxtImg } from "#components";
import AppButton from "@/components/AppButton/AppButton.vue";
import AppInput from "@/components/AppInput/AppInput.vue";
import AppDiv from "~/components/AppDiv/AppDiv.vue";
import { useGraphics } from "~/composables/useGraphics";
import { useToastStore } from "~/stores/toast.js";
import { useHandleSubmit } from "./composables/useHandleSubmit.js";
import { useValidate } from "./composables/useValidate.js";
import EN from "./en.json";

const { getIcon } = useGraphics();

const { handleSubmit } = useHandleSubmit();
const { validate } = useValidate();

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
const isSubmitting = ref(false); // Track submission/loading state
const toastStore = useToastStore();

let validateField = validate(props.schema, errors.value);

const displayToast = (message, type = "success", duration = 5000) => {
  toastStore.showToast(message, type, duration);
};

const onSubmit = async () => {
  await handleSubmit(
    props.schema,
    formData,
    errors,
    validateField,
    isSubmitting,
    displayToast,
    EN
  );
};

watch(
  () => props.schema,
  newSchema => {
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
  { immediate: true }
);
</script>

<template>
  <AppDiv class="items-start">
    <form
      class="easeIn w-full rounded-lg bg-white p-6"
      @submit.prevent="onSubmit"
    >
      <AppDiv
        div="grid"
        :grid-cols="12"
        gap="gap-4"
      >
        <AppDiv
          v-for="(field, index) in schema"
          :key="index"
          :col-span="field.span || 12"
        >
          <AppInput
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
        </AppDiv>
      </AppDiv>
      <AppDiv class="mt-6 flex w-full justify-center">
        <AppButton
          :icon="true"
          type="submit"
          :text="isSubmitting ? '' : buttonText"
        >
          <NuxtImg
            v-if="isSubmitting"
            class="ml-2 h-6 w-6 animate-spin"
            :src="getIcon('loader')"
          />
        </AppButton>
      </AppDiv>
    </form>
  </AppDiv>
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
