export const useHandleSubmit = () => {
  const handleSubmit = async (
    schema,
    formData,
    errors,
    validateField,
    isSubmitting,
    displayToast,
    EN
  ) => {
    schema.forEach(field => {
      validateField(field.id, formData.value[field.id]);
    });
    const hasErrors = Object.values(errors.value).some(error => error !== "");

    if (!hasErrors) {
      isSubmitting.value = true;
      setTimeout(() => {
        formData.value = schema.reduce((acc, field) => {
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
    } else {
      // Show error toast if there are validation errors
      displayToast(EN.errorMessage, "error");
    }
  };

  return { handleSubmit };
};
