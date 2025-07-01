// Types for validation schema
export type ValidationRule = {
  type: "empty" | "minLength" | "email" | "phone" | "checkbox" | "dob";
  message: string;
  value?: number;
};

export type FieldSchema = {
  id: string;
  validations?: ValidationRule[];
};

export type ErrorsObject = {
  [key: string]: string;
};
export type FieldValidator = (fieldId: string, value: string) => void;
