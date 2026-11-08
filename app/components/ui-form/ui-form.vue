<script setup>
import { computed, ref, watch } from "vue";
import { useHandleSubmit } from "./composables/useHandleSubmit.js";
import { useValidate } from "./composables/useValidate.js";
import { useToastStore } from "../../stores/toast.js";
import UiButton from "../ui-button/ui-button.vue";
import UiDiv from "../ui-div/ui-div.vue";
import UiIcon from "../ui-icon/ui-icon.vue";
import UiInput from "../ui-input/ui-input.vue";

const { handleSubmit } = useHandleSubmit();
const { validate } = useValidate();

const props = defineProps({
  schema: {
    type: Object,
    required: true,
  },
});

const formData = ref({});
const errors = ref({});
const isSubmitting = ref(false); // Track submission/loading state
const toastStore = useToastStore();

const fields = computed(() => props.schema?.fields || []);

let validateField = validate(fields.value, errors.value);

const displayToast = (message, type = "success", duration = 5000) => {
  toastStore.showToast(message, type, duration);
};

const onSubmit = async () => {
  await handleSubmit(
    fields.value,
    formData,
    errors,
    validateField,
    isSubmitting,
    displayToast,
    props.schema
  );
};

watch(
  () => fields.value,
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
  <ui-div class="items-start">
    <form
      class="easeIn w-full rounded-lg bg-white p-6"
      @submit.prevent="onSubmit"
    >
      <ui-div
        div="grid"
        :grid-cols="12"
        gap="gap-4"
      >
        <ui-div
          v-for="(field, index) in fields"
          :key="index"
          :col-span="field.span || 12"
        >
          <ui-input
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
        </ui-div>
      </ui-div>
      <ui-div class="mt-6 flex w-full justify-center">
        <ui-button
          variant="tertiary"
          type="submit"
          :text="isSubmitting ? '' : props.schema.submitButtonText || 'Submit'"
        >
          <ui-icon
            v-if="isSubmitting"
            class="ml-2 h-6 w-6"
            icon-name="svg-spinners:ring-resize"
          />
        </ui-button>
      </ui-div>
    </form>
  </ui-div>
</template>
