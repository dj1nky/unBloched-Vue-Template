export const useValidate = () => {
  const validate = (schema, errors) => {
    return (fieldId, value) => {
      const field = schema.find(field => field.id === fieldId);
      if (!field || !field.validations) return;

      // Reset error for this field
      errors[fieldId] = "";

      for (const validation of field.validations) {
        switch (validation.type) {
          case "empty":
            if (
              value === undefined ||
              value === null ||
              value === "" ||
              (typeof value === "string" && value.trim().length === 0)
            ) {
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
            const emailRegex =
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
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
          case "dob": {
            // DD/MM/YYYY format validation
            const dobRegex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
            if (value && !dobRegex.test(value)) {
              errors[fieldId] = "Date must be in DD/MM/YYYY format";
              return;
            }

            // Additional validation for valid date
            if (value && dobRegex.test(value)) {
              const [day, month, year] = value.split("/");
              const date = new Date(
                parseInt(year),
                parseInt(month) - 1,
                parseInt(day)
              );
              // Check if it's a valid date and matches the input
              const isValidDate =
                date.getDate() === parseInt(day) &&
                date.getMonth() === parseInt(month) - 1 &&
                date.getFullYear() === parseInt(year);

              if (!isValidDate) {
                errors[fieldId] = "Please enter a valid date";
                return;
              }

              // Check if date is not in the future
              const today = new Date();
              if (date > today) {
                errors[fieldId] = "Date of birth cannot be in the future";
                return;
              }

              // Check if age is not more than 99 years
              const maxAgeDate = new Date();
              maxAgeDate.setFullYear(today.getFullYear() - 99);
              if (date < maxAgeDate) {
                errors[fieldId] = "Age cannot be more than 99 years";
                return;
              }
            }
            break;
          }
        }
      }
    };
  };

  return { validate };
};
