import { FieldSchema, ErrorsObject, FieldValidator } from "./types";

export const validate = (
  schema: FieldSchema[],
  errors: ErrorsObject,
): FieldValidator => {
  return (fieldId, value) => {
    const field = schema.find((field) => field.id === fieldId);
    if (!field || !field.validations) return;

    // Reset error for this field
    errors[fieldId] = "";

    for (const validation of field.validations) {
      switch (validation.type) {
        case "empty":
          if (!value || value.trim().length === 0) {
            errors[fieldId] = validation.message;
            return;
          }
          break;

        case "minLength":
          if (value && value.length < validation.value!) {
            errors[fieldId] = validation.message;
            return;
          }
          break;

        case "email":
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          // Fixed email validation to properly check format without confusing length check
          if (value && !emailRegex.test(value)) {
            errors[fieldId] = validation.message;
            return;
          }
          break;

        case "phone":
          const phoneRegex = /^\d{10}$/;
          if (value && !phoneRegex.test(value)) {
            errors[fieldId] = validation.message;
            return;
          }
          break;

        case "checkbox":
          // For checkbox, we want to make sure it IS checked, not the opposite
          if (!value) {
            errors[fieldId] = validation.message;
            return;
          }
          break;
      }
    }
  };
};
