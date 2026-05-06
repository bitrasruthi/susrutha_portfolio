import * as Yup from "yup";
import { CurrentStatusEnum } from "./enums";

export const RegisterFormSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required")
    .min(3, "Full name must be at least 3 characters"),

  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),

  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9+\-\s()]+$/, "Enter a valid phone number"),

  currentStatus: Yup.string().required("Current status is required"),

  yearsOfExp: Yup.string().when("currentStatus", {
    is: (value: string) => value === String(CurrentStatusEnum.Professional),

    then: (schema) => schema.required("Years of experience is required"),

    otherwise: (schema) => schema.notRequired(),
  }),

  courseId: Yup.number()
    .typeError("Course is required")
    .required("Course is required")
    .min(1, "Please select a course"),
});
