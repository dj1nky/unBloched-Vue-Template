// Create a validation factory that returns configured validation function
export const validate = (schema, errors) => {
  // Validate field based on validations from schema
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
          if (value && value.length < validation.value) {
            errors[fieldId] = validation.message;
            return;
          }
          break;

        case "email":
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (!emailRegex.test(value) && value.length > validation.value) {
            errors[fieldId] = validation.message;
            return;
          }
          break;

        case "phone":
          const phoneRegex = /^\d{10}$/;
          if (!phoneRegex.test(value)) {
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